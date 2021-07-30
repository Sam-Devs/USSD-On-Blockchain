require("dotenv").config();
const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");

const rpc = process.env.ALFAJORES;
const web3 = new Web3(rpc);

const kit = ContractKit.newKit(rpc);

const createAccount = async () => {
    const account = await kit.web3.eth.accounts.create();
    console.log(account);
}
createAccount();