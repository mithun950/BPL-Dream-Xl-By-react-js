
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

import Toggle from './Components/Toggle/Toggle'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  // claim coins 
  const [coins, setCoins] = useState(4000000)

  // handle increase price 
  const handleIncreasePrice = (coin) =>{
    if(coins >= coin){
      setCoins(coins - coin)
    }
    else{
      toast.warning('Not enough coins !');
    }
    
  }

  // handle claim coins
  const handleClaimCoin = () => {
    const newCoins = (coins + 4000000)
    setCoins(newCoins >= 0 ? newCoins : 0);
  }

  // toggle section
   const [isActive,setIsActive] = useState({
      available: true,
    status: 'active'
   })

  //  toggle handler

  const handleToggle = (status) => {
    if(status === "available"){
       setIsActive({available: true,
        status: 'selected'
      })
    }
    else{
      setIsActive({
        available: false,
    status: 'selected'
      })
    }
  }




  // selected players

  const [selectedPlayers,setSelectedPlayers] = useState([])

  const handleMoreAddCoins = (id) =>{
    const player = selectedPlayers.find((p) =>p.id === id);
    setCoins(player.price + coins)
  
  }

  const handleDelete = (id) => {
    handleMoreAddCoins(id)
   const remainingPlayer = selectedPlayers.filter((p) => p.id !==id)
   setSelectedPlayers(remainingPlayer)
  }

  const handleSelectedProduct = (playerCount) => {
    const isExist = selectedPlayers.find((p) => p.id === playerCount.id);
    if(selectedPlayers.length >= 6){
      toast.warning('You can select only 6 players')
    }
   if(isExist){
    toast.error('Already Exist This Player');
    
   }
   else if  (coins >= playerCount.price) {
    
    handleIncreasePrice(playerCount.price)
    const newPlayerCount = [...selectedPlayers,playerCount]
    setSelectedPlayers(newPlayerCount)
    }
    else{
      toast.warning('You do not have enough coins')
    }

    }
    
  
  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>
      
      <div className='w-10/12 mx-auto  mt-8 text-center sm:flex justify-between items-center'>
   
      <Toggle  coins={coins} handleDelete={handleDelete} selectedPlayers={selectedPlayers} handleToggle={handleToggle} isActive={isActive} handleSelectedProduct={handleSelectedProduct}></Toggle>
      </div>
      
     <Footer></Footer>
     <ToastContainer></ToastContainer>
  
    </>
  )
}

export default App
