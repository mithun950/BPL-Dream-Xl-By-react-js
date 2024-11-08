
import PropTypes from 'prop-types'
import Available from '../Players-profile/Available'
import Selected from '../SelectContainer/Selected'


function Toggle({handleToggle,isActive,handleSelectedProduct,selectedPlayers,handleDelete,coins,handlePlayerSelect}) {
    

    // const handle
  return (
    <div className='text-center lg:text-right mt-10'>
      <button onClick={() =>handleToggle('available')} className={`${isActive.available?" btn active rounded-r-none" : "btn rounded-r-none"}`}>Available</button>
      <button  onClick={() =>handleToggle('selected')} className={`${isActive.available?"btn rounded-l-none" : "btn active rounded-l-none" }`}>Selected ({selectedPlayers.length})</button>


   {
    isActive.available?<Available handleSelectedProduct={handleSelectedProduct} handlePlayerSelect={handlePlayerSelect} coins={coins}></Available> : <Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete} coins={coins} handleToggle={handleToggle} ></Selected>
   }

    </div>
  )
}

Toggle.propTypes = {
    handleToggle:PropTypes.func,
    available:PropTypes.object,
    isActive:PropTypes.bool,
    handleSelectedProduct:PropTypes.func,
    handleDelete:PropTypes.func,
    selectedPlayers:PropTypes.object,
    coins:PropTypes.object,
    handlePlayerSelect:PropTypes.func

}

export default Toggle

