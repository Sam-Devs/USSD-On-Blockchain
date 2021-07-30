require("dotenv").config();
const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");

const rpc = process.env.ALFAJORES;
const web3 = new Web3(rpc);

const kit = ContractKit.newKit(rpc);

const address = "0x52DBDfa46Cd6AeC23e248c3D2cec723830D227CD"

const totalBalance = async () => {
    const balance = await kit.getTotalBalance(address);
    console.log(balance);
    // console.log(balance[0]);
}
totalBalance();

const createAccount = async () => {
    const account = await kit.web3.eth.accounts.create();
    console.log(account);
}
createAccount();