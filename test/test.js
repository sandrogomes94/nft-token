const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFToken", function () {
  it("Should deploy the NFToken contract", async function () {
    const NFToken = await ethers.getContractFactory("NFToken");
    const nftoken = await NFToken.deploy("NFToken","NFT");
    await nftoken.deployed();
    expect(await nftoken.symbol()).to.equal("NFT");
  });
});