const SocialLinks = () => {
  return (
    <div className='w-36 h-8 grid gap-2 grid-flow-col mx-auto lg:ml-auto'>
      <div className='w-8 border-2 border-white rounded-full p-2 flex justify-center items-center hover:border-pink hover:transition-colors'><img src="facebook.svg" alt="facebook" /></div>
      <div className='w-8 border-2 border-white rounded-full p-2 flex justify-center items-center hover:border-pink hover:transition-colors'><img src="twitter.svg" alt="twitter" /></div>
      <div className='w-8 border-2 border-white rounded-full p-2 flex justify-center items-center hover:border-pink hover:transition-colors'><img src="instagram.svg" alt="instagram" /></div>
    </div>
  );
}
export default SocialLinks;