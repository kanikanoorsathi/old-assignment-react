
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Newsletter from './Components/Newsletter/Newsletter'
import Players from './Components/players/players'
import Available from './Components/Available/Available'
import Selected from './Components/Selected/Selected'

function App() { 

 

  const [selectedPlayers, setSelectedPlayers] =useState([]);

  const hendleDelete = (playerId)=>{
    // console.log(playerId)
    const remainingPlayers = selectedPlayers.filter((p) =>  p.playerId!=playerId);
    setSelectedPlayers(remainingPlayers);
  }



    const hendleSelectedPlayer =(player,) =>{
    
    // console.log(player)
    const isexist =selectedPlayers.find((p) => p.playerId == player.playerId)
    if(isexist){
      if(coin>=player.biddingPrice){
        alert("Your balance is low")
      }
      else{
        alert("You have already added")
      }
      
      // alert("your low price")
    
    }
    else{
      hendleDecressesPrice(player.biddingPrice)
      const newPlayers=[...selectedPlayers, player];
      setSelectedPlayers(newPlayers)
      // alert("Your player successfully added")
      // setCoin (coin-biddingPrice)
  
    }
    
  }
  // console.log(selectedPlayers);

  const [isActive, setIsActive] = useState({
    available : true,
    status: "available"
  })
  const handleIsActive = (status) =>{
    if (status == "available"){
      setIsActive({
        available: true,
        status : "available"
      })
    }
    else{
      setIsActive({
        available : false,
        status : "selected"
      })
    }
  }
  // console.log(isActive);

  const [coin, setCoin] =useState(0);
  
  const hendleDecressesPrice =(price,playerId) =>{
    setCoin(coin-price);
    console.log(playerId)
    if(coin >= price){
      if(selectedPlayers.length < 5){
        console.log("hello world", selectedPlayers.length)
      }
      else{
        alert("Already Six player added")
      }
    }
    else{
      alert("Your balance is low")
    }
  }
  

  const handleState =() =>{
   
    let totalCoin = 60000000 + coin;
    setCoin(totalCoin)
    // alert("Coin successfully added");
    
  }

  return (
    <>
      <div>
        <div className='w-10/12 mx-auto'>
          <Header coin={coin}></Header>
          <Banner handleState={handleState}></Banner>
          {isActive.available?<Available></Available>:<Selected hendleDelete={hendleDelete} selectedPlayers={selectedPlayers}></Selected>}
          <Players selectedPlayers={selectedPlayers.length} hendleSelectedPlayer={hendleSelectedPlayer} isActive={isActive} handleIsActive={handleIsActive}></Players>
          {/* {isActive.available?<Available></Available>:<Selected selectedPlayers={selectedPlayers}></Selected>} */}
          <Footer></Footer>
          <Newsletter></Newsletter>
        </div>
      </div>
     
      
    </>
  )
}



export default App
