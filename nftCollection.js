/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
class NFT {
    constructor(Doctorname, Department, Level) {
        this.Doctorname = Doctorname;
        this.Department = Department;
        this.Level = Level;
    }
}

// Create a variable to hold your NFT's
const myNFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(Doctorname, Department, Level) {
    const nft = new NFT(Doctorname, Department, Level);
    myNFTs.push(nft);
}

// This function will iterate over the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < myNFTs.length; i++) {
        const nft = myNFTs[i];
        console.log("Doctorname: " + nft.Doctorname);
        console.log("Department: " + nft.Department);
        console.log("level: " + nft.Level);
        console.log("----------------------");
    }
}

// This function will print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return myNFTs.length;
}

// Call your functions below this line

mintNFT("Praveen", "Cardiologist", "Senior Doctor");
mintNFT("Hemanth", "dentist", "Junior Doctor");
mintNFT("Harshith", "psychiatrist", "Senior Doctor");
mintNFT("Murthuza", "Ophthalmologist", "Senior Doctor");

console.log("Listing NFTs:");
listNFTs();

console.log("Total NFTs created: " + getTotalSupply());
