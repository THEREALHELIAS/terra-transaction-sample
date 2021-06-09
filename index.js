const { LCDClient, Coin, MnemonicKey, MsgSend } = require('@terra-money/terra.js');



const mk = new MnemonicKey({
  mnemonic: 'used tool interest party wrong among claim session any brand solid wool turn common gloom abstract satisfy fine base final develop cover enhance cereal'
});

//Creation of new wallet
// const main = async () => {
//   const terra = new LCDClient({
//     URL: 'https://tequilla-lcd.terra.dev',
//     chainID: 'tequilla-0004'
//   });

//   const mk = new MnemonicKey;
//   console.log(mk.accAddress);
//   console.log(mk.mnemonic);
// }

//Retrieving Wallet info
const main = async () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev',
    chainID: 'tequila-0004'
  });

  // console.log(terra)

  const mk = new MnemonicKey({
    mnemonic: 'used tool interest party wrong among claim session any brand solid wool turn common gloom abstract satisfy fine base final develop cover enhance cereal'
  });

  // const exchangeRates = await terra.oracle.exchangeRates();
  // console.log(JSON.stringify(exchangeRates));

  // console.log(mk.accAddress.toString())

  const accountInfo = await terra.auth.accountInfo(mk.accAddress.toString());
  console.log('accountInfo', accountInfo)
}

main().then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err)
})