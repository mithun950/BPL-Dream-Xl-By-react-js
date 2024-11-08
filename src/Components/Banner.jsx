import '../Components/Banner.css'
import PropTypes from 'prop-types'
import bannerShadow from '/public/assets/bg-shadow.png'

function Banner({handleClaimCoin}) {
  return (
    
 
     
   
     <div
  className="hero min-h-screen mt-6 w-10/12 mx-auto"
  style={{backgroundImage: `url(${bannerShadow})` }}>
  <div className="hero-overlay  bg-gradient-to-tr from-[#ADD8E6] via-black to-[rgb(244,244,161)] rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
        <img className='mx-auto mb-4' src="/assets/banner-main.png" alt="" />
      <h1 className="mb-5 text-3xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={handleClaimCoin} className="btn btn-primary bg-gradient-to-r from-[#ADD8E6] via-white to-[rgb(247,247,64)] text-black font-bold px-4">Claim Free Credit</button>
    </div>
  </div>
</div>
   
 
    
  )
}

Banner.propTypes = {
  handleClaimCoin:PropTypes.func
}

export default Banner

