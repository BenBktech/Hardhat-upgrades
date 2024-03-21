// Upgrades : plugin OpenZeppelin pour Hardhat, utilisé pour déployer et gérer des contrats intelligents upgradables.
const { ethers, upgrades } = require("hardhat");

async function main() {
    // créer une "fabrique de contrats" pour le contrat Box. Cette fabrique est un objet qui permet de déployer de nouvelles instances du contrat Box.
    const Box = await ethers.getContractFactory("Box");
    // Déploie une nouvelle instance du contrat Box à travers un proxy en utilisant upgrades.deployProxy. 
    const proxy = await upgrades.deployProxy(Box);
    await proxy.waitForDeployment()

    console.log('Proxy Address : ' + proxy.target);

    let transaction = await proxy.store(42);
    let value = await proxy.retrieve();
    console.log(value.toString());

    let version = await proxy.version();
    console.log(version.toString()); 
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});