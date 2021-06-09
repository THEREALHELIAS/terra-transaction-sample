const { LCDClient, MnemonicKey, MsgSend, isTxError } = require('@terra-money/terra.js');

const main = async () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev',
    chainID: 'tequila-0004'
  });

  const mk = new MnemonicKey({
    mnemonic: 'used tool interest party wrong among claim session any brand solid wool turn common gloom abstract satisfy fine base final develop cover enhance cereal'
  });

  const wallet = terra.wallet(mk);

  console.log("Checking address consistency", wallet.key.accAddress);

  const msg = new MsgSend(
    wallet.key.accAddress,
    'terra1f8wkdt7sms3c3tucaqle7yvn59v8qz27srlghj',
    {uluna: 100}
  )

  const tx = await wallet.createAndSignTx({
    msgs: [msg],
    memo: "Here take this pity luna coin for your loss"
  });

  const txHash = await terra.tx.hash(tx);
  console.log('txHash: ', txHash);

  // Broadcast transaction
  const txResult = await terra.tx.broadcast(tx);

  if (isTxError(txResult)) {
    throw new Error(`encountered an error while running the transaction: ${txResult.code} ${txResult.codespace}`);
  }

  // Check for events from the first message
  console.log('logs: ', txResult.logs);
}

main().then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err)
})