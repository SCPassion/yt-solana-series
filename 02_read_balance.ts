import {
  clusterApiUrl,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("8gvEnWWDRenjNA3cgWWgCXVbPnJygSUCVVdfwJ5Lvjnj");
const balance = await connection.getBalance(address);
const solBalance = balance / LAMPORTS_PER_SOL;

console.log(`Balance: ${solBalance} SOL`);
