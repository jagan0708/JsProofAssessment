# JsProofAssessment
```markdown
# NFT Collection

This project allows you to create and manage a collection of NFTs (Non-Fungible Tokens) with metadata including title, description, and image URL.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository or download the `nftCollection.js` file to your local machine.

2. Navigate to the directory where the `nftCollection.js` file is located.

## Usage

You can use the provided functions to mint new NFTs, list all NFTs, and get the total number of NFTs created.

### Functions

1. **mintNFT(title, description, imageUrl)**

   This function creates a new NFT with the provided metadata and stores it in the `myNFTs` array.

   ```javascript
   mintNFT("Sunset Painting", "A beautiful sunset over the mountains", "https://example.com/image1.png");
   ```

2. **listNFTs()**

   This function iterates over the `myNFTs` array and prints the metadata of each NFT to the console.

   ```javascript
   listNFTs();
   ```

3. **getTotalSupply()**

   This function returns the total number of NFTs created.

   ```javascript
   console.log("Total NFTs created: " + getTotalSupply());
   ```

### Example

Here's an example of how to use the functions:

```javascript
// Minting new NFTs
mintNFT("Sunset Painting", "A beautiful sunset over the mountains", "https://example.com/image1.png");
mintNFT("Cityscape Photo", "Night view of the city skyline", "https://example.com/image2.png");
mintNFT("3D Sculpture", "Digital sculpture of a mythical creature", "https://example.com/image3.png");
mintNFT("Portrait Drawing", "A detailed pencil sketch of a person", "https://example.com/image4.png");

// Listing all NFTs
console.log("Listing NFTs:");
listNFTs();

// Getting the total supply of NFTs
console.log("Total NFTs created: " + getTotalSupply());
```

### Running the Code

To run the code, execute the following command in your terminal:

```bash
node nftCollection.js
```
