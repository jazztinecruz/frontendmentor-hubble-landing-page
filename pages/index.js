export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr,auto]'>
      <div className='max-w-desktopWith max-h-desktopHeight relative lg:w-desktopWith md:h-desktopHeight'>
        <img className='w-full h-full' src="illustration-mockups.svg" alt="mobile-devices" />
      </div>

      <div className='grid grid-flow-row gap-6 justify-center items-center lg:gap-0'>
        <div className='grid grid-flow-row gap-2 text-center lg:text-left'>
          <h1 className='text-xl font-semibold text-white font-primary'>Build The Community <br/> Your Fans Will Love </h1>
          <p className='text-lightViolet font-secondary'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        </div>

        <div className='grid items-center justify-center lg:justify-start lg:mb-auto'>
          <button className='bg-white rounded-3xl p-2 px-16 text-center text-sm text-darkViolet font-secondary hover:bg-pink hover:text-white hover:transition-colors'>Register</button>
        </div>
        
      </div>
    </div>
  )
}
