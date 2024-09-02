# 🏗 Scaffold-ETH 2


## Start Pay 
-- Introduction 
This is a decentralized platform for payment using link as a means of payment. This platform allows users to gift their family and friends using our dapp. This allows users to pay for any transaction through a link rather than looking for a wallet address before they can make transactions. Users send crypto to family and friends or purchase items with links. Users generate a link, this link is sent to the recipient's email address or copy and paste anywhere they want to send depends on where they are sending it. Users have access to send NFT through their email addresses as well. When user receive the link in their email they claim what they send them either ERC20 or ERC721. This allows fast cross-border payment and promotes cross-border payment without a wallet address before sending and making transactions.

### The problem it solves
Cross-border payments and gifting through cryptocurrencies have always posed significant challenges due to the necessity of knowing the recipient's wallet address. This requirement can be cumbersome, especially for users who are not technically inclined or familiar with the intricate details of crypto transactions. Furthermore, the process of sending and receiving NFTs (ERC721 tokens) is equally complex, often necessitating multiple steps and a thorough understanding of blockchain technology.

#### Our platform addresses these issues by simplifying the transaction process. Here's how:

1. Faster Transactions

2. Eliminating the Need for Wallet Addresses,

3. Streamlined Gifting and Payments

4. Enhanced User Experience with Account Abstraction

### Features

1. User can zksync token 
2. User can send support ERC20
3. User can sen ERC721 through email address

#### To Get Started With the project cd packages/nexjs
```js
cd packages/nextjs
```

#### You need to install the devDependencies

You can use either yarn or npm 
```js
npm install 
```
or

```js
yarn  
```


#### You can start your developement server
```js
yarn run dev 
```

### Technologies I used
1. Nextjs
2. Hardhat
3. Solidity
4. Peanut

### How we built it
I was able to use peanut protocol to anchor the link for transaction processing into a link. When a user generates a link, it will be sent to the recipient email through nodemailer and react-email component. Users have a page where they can view their link.