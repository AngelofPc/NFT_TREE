import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';

import { NFTADDRESS, NFTMARKETADDRESS } from '../config';

// DEV
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
// import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

// PROD
import NFT from '../abi/NFT.sol/NFT.json';
import Market from '../abi/NFTMarket.sol/NFTMarket.json';

import Image from 'next/image';

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    setLoading(true);
    // localhost
    // const provider = new ethers.providers.JsonRpcProvider();

    // mumbai
    console.log(process.env.NEXT_PUBLIC_RPC);
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_RPC}`,
    );

    const tokenContract = new ethers.Contract(NFTADDRESS, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      NFTMARKETADDRESS,
      Market.abi,
      provider,
    );
    const data = await marketContract.fetchMarketItems();

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
          description: meta.data.description,
        };
        return item;
      }),
    );
    setNfts(items);
    setLoading(false);
  }

  async function buyNft(nft) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(NFTMARKETADDRESS, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    console.log(price);

    const transaction = await contract.createMarketSale(
      NFTADDRESS,
      nft.tokenId,
      {
        value: price,
      },
    );
    await transaction.wait();
    loadNFTs();
  }

  return (
    <>
      {loading === false && !nfts.length ? (
        <h1 className='px-20 py-10 text-3xl'>No Items yet</h1>
      ) : (
        <div className='flex justify-center'>
          <div className='px-4' style={{ maxWidth: '1600px' }}>
            <div className='grid grid-cols-1 sm:grids-cols-2 lg-grids-cols-4 gap-4 pt-4'>
              {nfts.map((nft, i) => {
                return (
                  <div
                    key={i}
                    className='border shadow rounded-xl overflow-hidden'
                  >
                    <Image width='400' height='350' src={nft.image} alt='NFT' />
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
                      <button
                        className='w-full bg-pink-500 text-white font-bold py-2 px-12 rounded'
                        onClick={() => buyNft(nft)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
