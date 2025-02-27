import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SampleImmutableERC721SoulboundModule = buildModule(
  "SampleImmutableERC721Soulbound",
  (m) => {
    const sampleImmutableERC721Soulbound = m.contract("SampleImmutableERC721Soulbound", 
      [
        "0x6c443510cF6a4a56341D4ce1aEA3B4399a14fBc7", 
        "Soulbound",
        "https://emerald-variable-swallow-254.mypinata.cloud/ipfs/QmWaiQicRNFhRX8rsnqxeaYRPyLJ2pqxaqryyh2o1TVEqQ/",
        "https://emerald-variable-swallow-254.mypinata.cloud/ipfs/QmXnDagCfaSQAHcbN7m18mzqdUtBwG4233mztaQKUyDJjf",
        "0x6b969FD89dE634d8DE3271EbE97734FEFfcd58eE",
        "0x6c443510cF6a4a56341D4ce1aEA3B4399a14fBc7",
        5 // not really needed as soulbound and cannot trade
      ]
    );
    return { sampleImmutableERC721Soulbound };
  }
);

export default SampleImmutableERC721SoulboundModule;
