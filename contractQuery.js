const { LCDClient, Coin, MnemonicKey, MsgSend } = require('@terra-money/terra.js');

const main = async () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev',
    chainID: 'tequila-0004'
  });

  const contractAddess  = 'terra1vgezj7ejp0w4p7f4l6vgp8qhujn5p5hsykdfvf'
  const result = await terra.wasm.contractQuery(contractAddess, 
    {
        balance: {
          address: "terra1f8wkdt7sms3c3tucaqle7yvn59v8qz27srlghj"
        }
    }
  );

  console.log(result);
}

main().then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err)
})