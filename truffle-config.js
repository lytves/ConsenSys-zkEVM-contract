require('dotenv').config();
const { MNEMONIC, INFURA_API_KEY, ETHERSCAN_API_KEY } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');

console.log(MNEMONIC);

module.exports = {
    networks: {
        consensyszkevmgoerli: {
            provider: () => {
                return new HDWalletProvider(
                    MNEMONIC,
                    `https://consensys-zkevm-goerli-prealpha.infura.io/v3/${INFURA_API_KEY}`,
                );
            },
            verify: {
                apiUrl: "https://explorer.goerli.zkevm.consensys.net/api",
                apiKey: ETHERSCAN_API_KEY,
                explorerUrl: "https://explorer.goerli.zkevm.consensys.net/",
            },
            network_id: "59140",
        },
    },

    plugins: ["truffle-plugin-verify"],

    // Set default mocha options here, use special reporters, etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    },
};