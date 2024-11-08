
// import PropTypes from 'prop-types'
// import { useEffect, useState } from 'react'
// import Available from './Available';

// function AvailablePlayers() {

//     const [availablePlayers,setAvailablePlayers] = useState([])


//     useEffect(() => {

//         fetch('FakeData.json')
//         .then(res => res.json())
//         .then(data => setAvailablePlayers(data))
        
//     },[]);

//     console.log(availablePlayers)
   
    
    
//   return (
//     <div className='w-10/12 mx-auto mt-10 grid-cols-1 sm:grid grid-cols-2 lg:grid-cols-3 gap-6'>
//         {/* <div><p>Available Player</p></div> */}
//       {
//         availablePlayers.map((player) => <Available key={player.id} player={player} ></Available>)
//       }
//     </div>
//   )
// }

// AvailablePlayers.propTypes = {

// }

// export default AvailablePlayers

