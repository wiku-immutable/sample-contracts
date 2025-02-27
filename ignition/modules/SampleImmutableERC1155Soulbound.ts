import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SampleImmutableERC1155SoulboundModule = buildModule(
  "SampleImmutableERC1155Soulbound",
  (m) => {
    const sampleImmutableERC1155Soulbound = m.contract("SampleImmutableERC1155Soulbound", 
      [
        "0x6c443510cF6a4a56341D4ce1aEA3B4399a14fBc7", 
        "Treebound",
        "https://emerald-variable-swallow-254.mypinata.cloud/ipfs/bafybeibux2h4lg5kuco7mp2b7x2lcdamtzksmjrfd5uv7imjoueqay7aze/",
        "https://emerald-variable-swallow-254.mypinata.cloud/ipfs/bafkreib6xowiwh3mw6qdfrb2bhlwsoered7734haraxyau2pmkpm5brode",
        "0x6b969FD89dE634d8DE3271EbE97734FEFfcd58eE",
        "0x6c443510cF6a4a56341D4ce1aEA3B4399a14fBc7",
        5 // not really needed as soulbound and cannot trade
      ]
    );
    return { sampleImmutableERC1155Soulbound };
  }
);

export default SampleImmutableERC1155SoulboundModule;
