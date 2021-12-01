require('@nomiclabs/hardhat-waffle');
const loadEnvConfig = require('@next/env');

const load = async () => {
  const projectDir = process.cwd();
  loadEnvConfig.loadEnvConfig(projectDir);
};

load();

// const fs = require('fs');
// const privateKey = fs.readFileSync('.secret').toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: '0.8.4',
};
