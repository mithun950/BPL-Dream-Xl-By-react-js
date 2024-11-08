
import PropTypes from 'prop-types'

function Player({player,handleSelectedProduct}) {

    const {img, name,Ratting, nationality, role, batting_style, price} = player;
  
  
    return (
        <div className=''>
            
    <div className='mt-5 border-1 shadow-lg p-4 rounded-lg text-nowrap '>
        <div className=''>
<img className=' w-full rounded-lg' src={img} alt="" />
</div>


{/* name */}

<div className='mt-3 text-1xl font-bold text-left'>
        <h3><i className="fa-solid fa-user"></i>  {name}</h3>
      </div>

      {/* nationality */}
      <div className='flex justify-between gap-12 items-center mt-3'>
        <p className='text-gray-500'> <i className="fa-solid fa-flag"></i> {nationality}</p>
        <p className='bg-slate-100 rounded-lg px-3 py-1 font-medium text-gray-600 text-sm'>{role}</p>
      </div>

      <hr className='mt-3 mb-3 ' />
      <div className='flex justify-between'>
       
      <h4 className='font-bold text-left'>Rating</h4>
      <p>{Ratting}</p>

      </div>

{/* batting_style */}
<div className='flex justify-between items-center'>
   <p className='mt-2 font-medium'>{batting_style}</p>
   <p className='text-gray-400'>{batting_style}</p>
</div>


 {/* price and chose button */}

 <div className='flex justify-between items-center mt-3'>
        <p className=' font-medium'>Price: ${price}</p>

        {/* chose btn */}
        <button onClick={()=>handleSelectedProduct(player)} className="btn py-1 font-bold text-gray-600">Choose Player</button>
     </div>

    </div>

    </div>
  )
}

Player.propTypes = {
    handleSelectedProduct: PropTypes.func,
    player:PropTypes.object,
}

export default Player

