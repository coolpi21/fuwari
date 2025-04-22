import { NodeSSH } from "node-ssh";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ssh = new NodeSSH();

// --- Server Configuration Placeholders ---
// Please replace these with your actual server details
const SERVER_CONFIG = {
  host: "43.154.188.198", // e.g., '192.168.1.100' or 'example.com'
  port: 22, // Default SSH port
  username: "root",
  password: "vrnjupqr123", // Consider using SSH keys for better security
  remotePath: "/home/astro-blog", // e.g., '/var/www/html'
};
// -----------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_BUILD_DIR = path.join(__dirname, "dist"); // Assumes 'dist' is in the parent directory relative to this script

async function deploy() {
  console.log(`Connecting to ${SERVER_CONFIG.host}...`);
  try {
    await ssh.connect({
      host: SERVER_CONFIG.host,
      port: SERVER_CONFIG.port,
      username: SERVER_CONFIG.username,
      password: SERVER_CONFIG.password,
    });

    console.log("Connection successful.");
    console.log(
      `Uploading directory ${LOCAL_BUILD_DIR} to ${SERVER_CONFIG.remotePath}...`
    );

    // Ensure the target directory exists (optional, putDirectory might handle it)
    // await ssh.mkdir(SERVER_CONFIG.remotePath, 'sftp'); // Might need adjustments based on permissions

    const status = await ssh.putDirectory(
      LOCAL_BUILD_DIR,
      SERVER_CONFIG.remotePath,
      {
        recursive: true,
        concurrency: 10, // Adjust concurrency as needed
        validate: (itemPath) => {
          // Optional: Exclude specific files/folders if needed
          // const baseName = path.basename(itemPath);
          // return baseName !== '.git' && baseName !== 'node_modules';
          return true;
        },
        tick: (localPath, remotePath, error) => {
          if (error) {
            console.error(`Failed to upload ${localPath}: ${error.message}`);
          } else {
            // console.log(`Uploaded ${localPath} to ${remotePath}`); // Uncomment for verbose logging
          }
        },
      }
    );

    if (status) {
      console.log("Upload completed successfully.");
    } else {
      console.error("Upload failed. Check logs for details.");
    }
  } catch (error) {
    console.error("Deployment failed:", error);
  } finally {
    if (ssh.isConnected()) {
      
      console.log("Disconnecting from server...");
      ssh.dispose();
    }
  }
}

// Execute the deployment function
deploy();
