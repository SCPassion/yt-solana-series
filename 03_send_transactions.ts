import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";

const keyPair = process.env.KEYPAIR || null;

if (!keyPair) {
  console.log("Please provide a keypair");
  process.exit(1);
}

// Establish a connection to the cluster
const connection = new Connection(clusterApiUrl("devnet"));

// Get the address from the environment variable
const senderAddress = getKeypairFromEnvironment("KEYPAIR");

// From the public address, create a PublicKey object
const receiverAddress = new PublicKey(
  "8gvEnWWDRenjNA3cgWWgCXVbPnJygSUCVVdfwJ5Lvjnj"
);

// Send 0.1 SOL to the receiver
const amount = 0.1 * LAMPORTS_PER_SOL;

// Create a transaction object, not sending it yet
const transaction = new Transaction();

// Create transaction instructions
const transactionInstruction = SystemProgram.transfer({
  fromPubkey: senderAddress.publicKey,
  toPubkey: receiverAddress,
  lamports: amount,
});

// Add the transaction instruction to the transaction
transaction.add(transactionInstruction);

// If you want to add more instructions to the transaction, you can add them here
// For example:
// const anotherTransactionInstruction = SystemProgram.transfer({
//   fromPubkey: senderAddress.publicKey,
//   toPubkey: receiverAddress,
//   lamports: amount,
// });
// transaction.add(anotherTransactionInstruction);

// Execute the transaction, and get the signature
// give it the keypair of the sender which will sign and pay for the transaction
const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderAddress,
]);

console.log(
  `Transaction Successful: sent ${amount} SOL to ${receiverAddress.toBase58()} with signature: ${signature}`
);
