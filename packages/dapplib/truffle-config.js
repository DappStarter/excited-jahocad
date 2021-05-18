require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth praise code hunt brand flip gas'; 
let testAccounts = [
"0xc9d299203ec31a764645485e4152bfba86308c2b58ed8135cf8b2465bfd6e17a",
"0x12bd6c142b255461d1b2e3e4666f71ca65a2e7ad61b8e3cb5fb762b8d3d6b754",
"0xeba176a0115ea2df4615c869b780fe1adc9d080800c31f823b8a29c497fb7851",
"0x93f92ecba6ffb5814ab568a4668baab9fcf5903d455d96e94b7180e9f2ae360f",
"0x244f17a0930ae3b62eb015d1594ea937207adba4f65dcd032a6c13f033a5e330",
"0x3cc4f9b9fa27c49b8d11dfaac6b5cf1b360f5d729b957f72a9ab558877221ffc",
"0x8ae2fa2f8b14373a421e9649e01fbd8970eb2d0ff8b1035e782bb121ea7e7592",
"0x08f2fdba184b755a5eb3f0f02a0e29cd6f51726eb0f7891c36463082f4094cdb",
"0xe843951bd90e7408c4d57168ee3684374c89f703a8daadaab97f8c053e8eae5e",
"0xc62dd39a7f08e4283a614087bdc75b6d1e6aa7eebdd73e65cde598f03d16b810"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
