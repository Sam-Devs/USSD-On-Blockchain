require("dotenv").config();
const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");

const rpc = process.env.ALFAJORES;
const web3 = new Web3(rpc);

const kit = ContractKit.newKit(rpc);

// const address = "0x52DBDfa46Cd6AeC23e248c3D2cec723830D227CD"

const totalBalance = async (address) => {
    try {
        const balance = await kit.getTotalBalance(address);
        console.log(balance);
        // console.log(balance[0]);
    } catch (error) {
        console.log(error);
    }
}

const createAccount = async () => {
    try {
        const account = await kit.web3.eth.accounts.create();
        console.log(account); 
    } catch (error) {
        console.log(error);
    }
}

const balance = async(account) => {
    try{
        const accountBalance = await kit.web3.eth.getBalance(account);
        // console.log(accountBalance);
        return accountBalance;
    } catch(error) {
        console.log(error);
    }
}

module.exports = { createAccount, totalBalance}