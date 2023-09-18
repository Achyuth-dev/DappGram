import React,{useState} from 'react'
import dappgram from './images/dappgram.png'
import './Home.css'
import { ethers } from 'ethers';
import Post from './Post.js'

function Home() {


  return (
    <div>
        {localStorage.getItem('address')?<Post></Post>:<div> <br></br><br></br>

<center>
<img style={{width:'20em'}} src={dappgram}></img>
<br></br>
<br></br><br></br>


<button class="button-17" role="button" onClick={async ()=>{
     const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    const provider = new ethers.providers.Web3Provider(window.ethereum)
      localStorage.setItem('address', accounts[0])
      localStorage.setItem('account',accounts[0].substring(0,4)+"...."+accounts[0].substring(38,42))
    const signer = provider.getSigner();
await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
        chainId: "0x13881",
        rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
        chainName: "Mumbai",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
    }]
})
window.location.reload(true)
}}>Connect Wallet</button>


</center></div>}
       



    </div>
  )
}

export default Home