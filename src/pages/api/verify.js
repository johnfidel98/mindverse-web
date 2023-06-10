import {Client, Account} from 'appwrite';

export default async function handler(req, res) {
  const { userId, secret } = req.query;

  try {
    // Initialize the Appwrite client
    const client = new Client();
    const account = new Account(client);
    
    client
      .setEndpoint(process.env.APPWRITE_ENDPOINT) 
      .setProject(process.env.APPWRITE_PROJECT_ID); 

    // Verify the user
    await account.updateVerification(userId, secret);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // Verification failed
    res.status(400).json({ error: 'failed' });
  }
}
