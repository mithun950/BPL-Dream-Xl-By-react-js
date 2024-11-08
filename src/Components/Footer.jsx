


function Footer() {
  return (
      <div className='relative' >
      {/* newsletter section */}
        <div className='text-center mt-6 bg-gradient-to-r from-[#ADD8E6] via-white to-[#FFFFE0]
 p-8 w-9/12 mx-auto rounded-2xl absolute top-[-120px] left-1/2 transform -translate-x-1/2'>
      <h3 className='text-xl font-bold'>Subscribe to our Newsletter</h3>
      <p className='text-gray-600'>Get the latest updates and news right in your inbox!</p>
     
            
             <div className=''>
            <input className='p-2 rounded-l-2xl mt-3 border-2' type="email" placeholder='Enter your email' />
            <button className=' border-2 max-sm: p-2 rounded-r-2xl bg-[#E7FE29] font-semibold mt-3 '>Subscribe</button>
            </div>
     
      </div>

    <div className='bg-black p-10 mt-40'>
        <div className='mt-12'>
            <img className='mx-auto' src="/public/assets/logo-footer.png" alt="" />
      <div className=' w-11/12  mx-auto md:flex justify-around items-center gap-5'>
        <div>
            <h3 className='text-xl text-gray-400 font-bold'>About Us </h3>
            <p className='text-gray-500'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
        </div>

        <div className='mt-6'>
            <h3 className='text-xl text-gray-400 font-bold'>Quick Links </h3>
            <p className='text-gray-500'>Home</p>
            <p className='text-gray-500'>Service</p>
            <p className='text-gray-500'>About</p>
            <p className='text-gray-500'>Contact</p>
        </div>

        <div>
            <h3 className='text-xl text-gray-400 font-bold mt-6'>Subscribe</h3>
            <p className='text-gray-500'>Subscribe to our newsletter for <br /> the latest updates.</p>
            <div className=''>
            <input className='p-2 rounded-l-2xl mt-3' type="email" placeholder='Enter your email' />
            <button className=' max-sm: p-2 rounded-r-2xl bg-[#E7FE29] font-semibold mt-3 '>Subscribe</button>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>

  )
}

Footer.propTypes = {

}

export default Footer

