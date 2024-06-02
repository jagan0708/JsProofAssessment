# Hospital NFT Management

This project demonstrates a simple implementation of an NFT (Non-Fungible Token) management system using JavaScript. The NFTs represent doctors in a hospital, each with specific metadata such as the doctor's name, department, and level.

## Assessment Requirements

1. **Create a variable that can hold a number of NFTs. What type of variable might this be?**
   - A variable that can hold multiple NFTs can be an array.

2. **Create an object inside your `mintNFT` function that will hold the metadata for your NFTs. The metadata values will be passed to the function as parameters. When the NFT is ready, you will store it in the variable you created in step 1.**
   - The `mintNFT` function creates an object with the provided metadata and stores it in the `myNFTs` array.

3. **Your `listNFTs` function will print all of your NFTs' metadata to the console.**
   - The `listNFTs` function iterates over the `myNFTs` array and prints each NFT's metadata.

4. **For good measure, `getTotalSupply` should return the number of NFTs you have created.**
   - The `getTotalSupply` function returns the length of the `myNFTs` array, indicating the total number of NFTs.

## Code Overview

### NFT Class

The `NFT` class defines the structure for each NFT with the following properties:
- `Doctorname`
- `Department`
- `Level`

### Variables

- `myNFTs`: An array to hold the minted NFTs.

### Functions

- `mintNFT(Doctorname, Department, Level)`: Creates an NFT with the given metadata and adds it to the `myNFTs` array.
- `listNFTs()`: Iterates over the `myNFTs` array and prints each NFT's metadata to the console.
- `getTotalSupply()`: Returns the total number of minted NFTs.

### Usage

1. **Minting NFTs**
   ```javascript
   mintNFT("Praveen", "Cardiologist", "Senior Doctor");
   mintNFT("Hemanth", "Dentist", "Junior Doctor");
   mintNFT("Harshith", "Psychiatrist", "Senior Doctor");
   mintNFT("Murthuza", "Ophthalmologist", "Senior Doctor");
   ```

2. **Listing NFTs**
   ```javascript
   console.log("Listing NFTs:");
   listNFTs();
   ```

3. **Getting Total Supply**
   ```javascript
   console.log("Total NFTs created: " + getTotalSupply());
   ```

### Example Output

```
Listing NFTs:
Doctorname: Praveen
Department: Cardiologist
Level: Senior Doctor
----------------------
Doctorname: Hemanth
Department: Dentist
Level: Junior Doctor
----------------------
Doctorname: Harshith
Department: Psychiatrist
Level: Senior Doctor
----------------------
Doctorname: Murthuza
Department: Ophthalmologist
Level: Senior Doctor
----------------------
Total NFTs created: 4
```
