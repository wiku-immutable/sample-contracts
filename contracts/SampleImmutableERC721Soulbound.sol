// SPDX-License-Identifier: MIT License
pragma solidity ^0.8.19;

import "@imtbl/contracts/contracts/token/erc721/preset/ImmutableERC721.sol";

error TokenSoulbound();

contract SampleImmutableERC721Soulbound is ImmutableERC721 {
    constructor(
        address owner,
        string memory name,
        string memory symbol,
        string memory baseURI,
        string memory contractURI,
        address operatorAllowlist,
        address royaltyReceiver,
        uint96 feeNumerator
    )
        ImmutableERC721(
            owner,
            name,
            symbol,
            baseURI,
            contractURI,
            operatorAllowlist,
            royaltyReceiver,
            feeNumerator
        )
    {}
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override {
        if (!hasRole(MINTER_ROLE, msg.sender)) {
            revert TokenSoulbound();
        }
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _approve(address to, uint256 tokenId) internal override {
        if (!hasRole(MINTER_ROLE, msg.sender)) {
            revert TokenSoulbound();
        }
        super._approve(to, tokenId);
    }

    function setApprovalForAll(
        address operator,
        bool approved
    ) public override {
        if (!hasRole(MINTER_ROLE, msg.sender)) {
            revert TokenSoulbound();
        }
        super.setApprovalForAll(operator, approved);
    }
}
