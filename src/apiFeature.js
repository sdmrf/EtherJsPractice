import { ethers } from "ethers";
import { abi } from "../artifacts/contracts/Counter.sol/Counter.json";

// Variables
const address = "0x90dC6258F419bF910D616a570C804177777599a3";

// Getting the provider from metamask (connects to the blockchain)
const getProvider = () => {
    // Checking if metamas is installed
    if(window.ethereum){
        // Creating a provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        return provider;
    }
    else{
        alert("Please install metamask");
    }
}

// Getting the signer from metamask (generates a user for signing transactions)
const getSigner = async () => {
    // Getting the provider
    const provider = getProvider();
    // Getting the signer
    const signer = await provider.getSigner();
    return signer;
}

// Getting the contract instance (contract instance)
const getContract = async () => {
    // Getting the signer
    const signer = await getSigner();
    // Creating a contract instance
    const contract = new ethers.Contract(address, abi, signer);
    return contract;
}

// Getting the current Block Number
const getCurrentBlockNumber = async () => {
    // Getting the provider
    const provider = getProvider();
    // Getting the current block number
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
}

export {getContract}