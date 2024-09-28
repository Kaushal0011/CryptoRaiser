require('dotenv').config();

module.exports= {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "amoy",
    networks: {
      // hardhat: {},
      hardhat: {
        chainId: 80002,
      },
      amoy: {
        url: "https://80002.rpc.thirdweb.com/{API_KEY}",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
