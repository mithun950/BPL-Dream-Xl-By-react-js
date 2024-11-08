
import PropTypes from 'prop-types'
// 

function Selected({selectedPlayers,handleDelete,handleToggle}) {


    





const displayCount = Math.min(selectedPlayers.length, 6); 

const displayPlayers = selectedPlayers.slice(0, 6);

  return (
    <div className='text-left '>
        
                <h2 className="font-bold mb-4 text-2xl mt-3">
                    Selected Players: {displayCount}/6
                </h2>
            

            <div className='w-full mx-auto mt-10  grid-col-1 sm:grid grid-cols-2 lg:grid-cols-3 gap-10'>
         
     {
       displayPlayers.map((player) => (
            <div  key={player.id} className=" border-1 shadow-lg p-4  rounded-xl flex justify-between items-center gap-4">
            <div  className='flex gap-5 items-center'>
                <div className="">
                    <img className='w-20 rounded-lg' src={player.img} alt="" />
                </div>
                <div className="div">
                    <h4 className='font-bold'>{player.name}</h4>
                    <p className='text-sm text-gray-400'>{player.batting_style}</p>
                    
                </div>
            </div>
            <button onClick={()=>handleDelete(player.id)} className='text-red text-1xl'><i className="fa-regular fa-trash-can"></i></button>
            </div>
        ))
        
     }
     </div>

     <div className='mt-5'>
        <button 
          onClick={() => handleToggle('available')} 
          className="btn bg-[#E7FE29] rounded-lg px-3 py-1 text-black"
        >
          Add More Players
        </button>
      </div>

    </div>
  )
}

Selected.propTypes = {
    selectedPlayers:PropTypes.object,
    handleToggle:PropTypes.func,
    handleDelete:PropTypes.func

}  

export default Selected

