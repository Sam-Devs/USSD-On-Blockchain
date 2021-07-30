require("dotenv").config();
const Web3 = require("web3");

const rpc = process.env.ALFAJORES;
const web3 = new Web3(rpc);
