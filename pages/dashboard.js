import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';

import { NFTADDRESS, NFTMARKETADDRESS } from '../config';

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

import Image from 'next/image';

export default function Dashboard1() {
  const [nfts, setNfts] = useState([]);
  const [soldNfts, setSoldNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    setLoading(true);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(NFTADDRESS, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      NFTMARKETADDRESS,
      Market.abi,
      signer,
    );
    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          sold: i.sold,
          description: meta.data.description,
        };
        return item;
      }),
    );

    const soldItems = items.filter((i) => i.sold);
    setNfts(items);
    setSoldNfts(soldItems);
    setLoading(false);
  }

  return (
    <>
      {loading === false && !nfts.length ? (
        <h1 className='px-20 py-10 text-3xl'>No Items </h1>
      ) : (
        <div className='flex justify-center'>
          <div className=''>
            <h2 className='my-3 text-center'>All Items</h2>
            <div className='px-4' style={{ maxWidth: '1600px' }}>
              <div className='grid grid-cols-1 sm:grids-cols-2 lg-grids-cols-4 gap-4 pt-4'>
                {nfts.map((nft, i) => {
                  return (
                    <div
                      key={i}
                      className='border shadow rounded-xl overflow-hidden'
                    >
                      <Image
                        width='400'
                        height='350'
                        src={nft.image}
                        alt='NFT'
                      />
                      <div className='p-4'>
                        <p
                          className='text-2xl font-semibold'
                          style={{ height: '64px' }}
                        >
                          {nft.name}
                        </p>
                        <div style={{ height: '70px', overflow: 'hidden' }}>
                          <p className='text-gray-400'>{nft.description}</p>
                        </div>
                      </div>
                      <div className='p-4 bg-black'>
                        <div className='text-2xl mb-4 font-bold text-white'>
                          {nft.price} Matic
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {Boolean(soldNfts.length) && (
            <>
              <h2>Sold Items</h2>
              <div className='px-4' style={{ maxWidth: '1600px' }}>
                <div className='grid grid-cols-1 sm:grids-cols-2 lg-grids-cols-4 gap-4 pt-4'>
                  {soldNfts.map((nft, i) => {
                    return (
                      <div
                        key={i}
                        className='border shadow rounded-xl overflow-hidden'
                      >
                        <Image
                          width='400'
                          height='350'
                          src={nft.image}
                          alt='NFT'
                        />
                        <div className='p-4'>
                          <p
                            className='text-2xl font-semibold'
                            style={{ height: '64px' }}
                          >
                            {nft.name}
                          </p>
                          <div style={{ height: '70px', overflow: 'hidden' }}>
                            <p className='text-gray-400'>{nft.description}</p>
                          </div>
                        </div>
                        <div className='p-4 bg-black'>
                          <div className='text-2xl mb-4 font-bold text-white'>
                            {nft.price} Matic
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
