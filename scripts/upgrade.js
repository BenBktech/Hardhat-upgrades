const { ethers, upgrades } = require("hardhat");
const ProxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function main() {
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    // Effectue la mise à niveau du proxy à l'adresse spécifiée pour utiliser la logique de BoxV2. Cela permet de conserver l'adresse et l'état du contrat original tout en mettant à jour sa logique.
    const proxy = await upgrades.upgradeProxy(ProxyAddress, BoxV2);
    console.log('Proxy Address : ' + proxy.target);
    
    let transaction = await proxy.store(444);
    let transaction2 = await proxy.increment();
    let value = await proxy.retrieve();
    console.log(value.toString());
    let version = await proxy.version();
    console.log(version.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});