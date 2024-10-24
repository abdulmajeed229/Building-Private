function HomeCenter() {
  return (
    <div className="h-[100vh] w-full flex">
      <div className="w-[30%] flex justify-center items-center flex-col">

        <h1 className="text-[55px] text-gray-300 leading-none">PROJECT</h1>

        <span className="text-[45px] text-gray-800 font-extrabold -mt-2 ml-9">NURTOWN</span>

      </div>

      <div className="w-[70%] flex justify-center items-center relative">
        
      
        <button className="h-[55px] w-[190px] bg-white text-[12px] tracking-widest absolute bottom-0 left-[94px] text-[#333333]">
          VIEW PROJECT    <img className="w-[20px] inline-block ml-2" src="https://img.icons8.com/?size=100&id=99409&format=png&color=000000" alt="" />
        </button>

      
        <img className="w-[80%] h-[100%]" src="https://eloquent-horse-d72418.netlify.app/Rectangle%206.png" alt="image" />

      </div>
    </div>
  )
}

export default HomeCenter;
