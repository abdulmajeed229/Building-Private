function AboutContent(){

    return(

        <div className="h-[75vh] w-full p-10  flex justify-center items-center" >

            <div className="h-[70vh] w-[90%]  flex ">

                <div className="w-[50%] flex">

<div className="flex flex-col gap-2 justify-center">

    <img className="h-[220px] w-[270px]" src="https://eloquent-horse-d72418.netlify.app/Rectangle%208.png" alt="img" />

    <img src="https://eloquent-horse-d72418.netlify.app/Rectangle%2010.png" alt="img" />

</div>

<div className="flex justify-center items-center p-5">

    <img className="h-[320px] w-[270px]" src="https://eloquent-horse-d72418.netlify.app/Rectangle%209.png" alt="img" />

</div>


                </div>




<div className="w-[50%] flex flex-col p-5 ">
<h1 className="text-[35px] text-[#E5E5E5] mt-[30px]">About</h1>

<p className="text-justify text-[#b6aeae]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>


<button className="h-[45px] w-[160px] bg-[#eeecec] mt-[10px] text-[14px]">READ MORE <img className="w-[20px] inline-block ml-2"  src="https://img.icons8.com/?size=100&id=99409&format=png&color=000000" alt="" /> </button>


</div>






            </div>



        </div>
    )
}

export default AboutContent