
import PropTypes from 'prop-types'

function Navbar({coins}) {
  return (
    <div className=' sticky top-0 z-50 backdrop-blur-md bg-white/80 flex justify-between items-center w-10/12 mx-auto mt-8'>
        <div className=' '>
      <img src="/assets/logo.png" alt="" />
      </div>
      <div className='hidden md:flex gap-6 items-center font-semibold text-stone-600'>
        <p>Home</p>
        <p className=''>Fixture</p>
        <p>Teams</p>
        <p>Schedules</p>
        <p className='border-2 rounded-lg px-3 py-2'>{coins} Coins <i className="fa-solid fa-coins text-yellow-400"></i></p>
      </div>
      <div className='flex lg:hidden'>
        <p><i className="fa-solid fa-bars"></i></p>
      </div>
    </div>
   
  )
}

Navbar.propTypes = {
 coins:PropTypes.object,
}

export default Navbar

