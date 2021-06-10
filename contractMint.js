const { LCDClient, MsgExecuteContract, MnemonicKey } = require('@terra-money/terra.js');

const main = async () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev',
    chainID: 'tequila-0004'
  });

  const mk = new MnemonicKey({
    mnemonic: 'scatter sting light spirit observe mountain push divert script maid story season urge rally milk pulse theme theory spoon future rigid much matrix remove'
  });
  const wallet = terra.wallet(mk);
  const contractAddess  = "terra1vgezj7ejp0w4p7f4l6vgp8qhujn5p5hsykdfvf";

  // console.log(wallet)

  const execute = new MsgExecuteContract(
    wallet.key.accAddress, // sender
    contractAddess, // contract account address
    {
			mint:{
				recipient: "terra16twetz7x39lsqflmepnpup77a7dsjwzzyhdmx9",
				amount: "42069"
			}
    }, // handle msg
    { uluna: 1 } // coins
  );

	wallet.createAndSignTx({
		msgs:[execute],
		memo: "Tangina mo! Jepoy Dizon!"
	}).then(tx => terra.tx.broadcast(tx))
	.then(result => {
		console.log(`TXhash: ${result.txhash}`)
	})
	.catch(err => {
		console.log("There was an error",err);
	})

  // const executeTx = await wallet.createAndSignTx({
  //   msgs: [execute],
  // });

  // console.log(executeTx);

  // const executeTxResult = await terra.tx.broadcast(executeTx);
  // console.log(executeTxResult);
  // return executeTxResult;
}

main()