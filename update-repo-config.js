import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Get GitHub username from user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Please enter your GitHub username:');
rl.question('GitHub Username: ', (username) => {
  // Update package.json with the username
  packageJson.homepage = `https://${username}.github.io/BidVerse-A-Bidding-Website-main`;
  packageJson.repository.url = `https://github.com/${username}/BidVerse-A-Bidding-Website-main.git`;
  
  // Write back to package.json
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  
  console.log('✅ Package.json updated successfully!');
  console.log(`Homepage: ${packageJson.homepage}`);
  console.log(`Repository: ${packageJson.repository.url}`);
  
  rl.close();
});
