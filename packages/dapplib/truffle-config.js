require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain solid idea clinic obscure giant'; 
let testAccounts = [
"0x0c357e6a47bbf250e00279e23370943428ad3d4fe1dbb19918adaf9652a4f771",
"0x15e3978ed6448b9dd081faefb6f2dcfe0b38f4ffb653478cba0957cf0e7d5a5a",
"0x0d880a1ff9ade643b7ad3d5144d6faf85a74021f90a31449ca67f8278c72fda3",
"0x60121b8b92ef5c045d0d7cb88c98db64c26e87c17aee082a7e20ee24047dd773",
"0x5b591be4de68edf436c9bd8bfc27fe12b17b8df610b39ac782f57c3bba7c760a",
"0xdccd5a7427a2cc364d2e96fae4d72e123d112d8e4b3028e078ce8e7bc809e366",
"0xab8e4199a55b8061b0f622eb969618cb4d9dff681fa59d6a54fa5dfcde1fafa8",
"0x024c3a8fe25e9b6ba2a6d88bc909a2a4dff8c5e5b820a67ba17bdab4da22bd3d",
"0xdd1baf763e69a7f89c0245db07948f042c5b22ed1fb31481ebdc08fd387f716d",
"0xc94ea203cfe282f65fccc689012a54ffb8f824ea453cf06065e31f4d1838ace0"
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
            version: '^0.8.0'
        }
    }
};

