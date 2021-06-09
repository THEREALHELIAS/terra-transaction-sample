const { LCDClient, MsgExecuteContract, MnemonicKey } = require('@terra-money/terra.js');

const main = async () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev',
    chainID: 'tequila-0004'
  });

  const mk = new MnemonicKey({
    mnemonic: 'used tool interest party wrong among claim session any brand solid wool turn common gloom abstract satisfy fine base final develop cover enhance cereal'
  });
  const wallet = terra.wallet(mk);
  const contractAddess  = 'terra1vgezj7ejp0w4p7f4l6vgp8qhujn5p5hsykdfvf';

  const execute = new MsgExecuteContract(
    wallet.key.accAddress, // sender
    contractAddess, // contract account address
    {
      transfer: {
        recipient: "terra1f8wkdt7sms3c3tucaqle7yvn59v8qz27srlghj",
        amount: "10000"
      }
    }, // handle msg
    { uluna: 0 } // coins
  );

  const executeTx = await wallet.createAndSignTx

  console.log(executeTx)
  // const executeTxResult = await terra.tx.broadcast(executeTx);
  // console.log(executeTxResult);
  // return executeTxResult;
}

main().then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err)
})