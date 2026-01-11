
export default function Home() {

  return (
    <>
      <div className="text-white flex flex-col justify-center items-center h-[40vh]">
        <div className="text-3xl font-bold flex gap-2 items-center justify-center ">Buy Me a Chai <span><img width={44} src="/chai.gif" alt="" /></span></div>
        <p className="text-center ">
          Welcome to Get Me a Chai, the ultimate platform for creators to bring their ideas to life.
        </p>
        <div className="flex gap-4 my-3">
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">Save Here</button>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-xl group bg-linear-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-xl group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
              Read More
            </span>
          </button>
        </div>

      </div>
      <div className="bg-white h-1 opacity-10"></div>
      
      <div className="text-white  container mx-auto ">
        <h1 className="text-2xl  my-6 font-bold text-center">Your Fans can buy you Chai</h1>
        <div className="flex gap-5 justify-around ">
        <div  className=" flex flex-col  items-center space-y-3 ">
          <img width={80} className="bg-slate-400 rounded-full p-2 transform rotate-y-180" src="/man.gif" alt="" />
          <p className="font-bold">Fund Yourself</p>
        </div>
        <div  className=" flex flex-col  items-center space-y-3">
          <img width={80} className="bg-slate-400 rounded-full p-2 transform rotate-y-180" src="/coin.svg" alt="" />
          <p className="font-bold">Fund Yourself</p>
        </div>
        <div  className="item space-y-3 flex flex-col justify-center items-center">
          <img width={80} className="bg-slate-400 rounded-full p-2 transform rotate-y-180" src="/we.gif" alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="w-1/2 text-center">Your fans are available for you to help you</p>
        </div>
        </div>
      </div>
    </>
  );
}
