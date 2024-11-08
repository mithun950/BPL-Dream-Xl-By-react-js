
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Player from '../Player'

function Available({handleSelectedProduct}) {


  
 const [availablePlayers,setAvailablePlayers] = useState([])

 useEffect(() =>{
    fetch('FakeData.json')
    .then(res => res.json())
    .then(data => setAvailablePlayers(data))
 },[])




  return (
    <div>
        <h3 className='text-left  text-2xl font-semibold '>Available Players</h3>
 <div className='w-full mx-auto mt-10 grid-col-1 sm:grid grid-cols-2 lg:grid-cols-3 gap-6'>
    
    {
        availablePlayers.map((player) => <Player handleSelectedProduct={handleSelectedProduct} key={player.id} player={player}></Player>)
    }
 </div>

 </div> 

 
  )
}

Available.propTypes = {
    handleSelectedProduct: PropTypes.func,
}

export default Available


