const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "c72941ff3c594156aa6ffda1433e851e";
//
const fs = require('fs');
const mnemonic = "motor satoshi bean taxi client lyrics process artist noodle punch person scissors";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4 ,  // rinkeby's id
     
        from: "0x3de5326e4FA15F48761DF56e1911AEf09a8cab14"
    }
  }
};