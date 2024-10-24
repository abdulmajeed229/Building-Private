function Contact(){

    return(

        <div className="h-[90vh] w-full  flex justify-center items-center">

            <div className="w-[90%] h-[80vh] flex justify-center items-center gap-5">

                <div>

                    <div>

                        <h1 className="text-[32px] text-[rgb(160,155,155)]">Contact  Us</h1>

                        <input type="text" placeholder="Name" required />
                        <br />
                        
                        <input type="text" placeholder="Phone Number*" required />
                        <br />
                        
                        <input type="email" placeholder="Email*" required />
                        <br />
                      
                        <input type="text"  placeholder="Intrested in" required/>
                        <br />
                      
                       <textarea name="" id="" placeholder="Message*" required></textarea>
                       <br />
                     

                       <button className="h-[40px] w-[120px] text-white bg-[#333333] text-[13px]">SEND EMAIL <img src="https://img.icons8.com/?size=100&id=99409&format=png&color=FFFFFF" className="w-[20px] inline-block ml-2"  alt="" /></button>




                        
                        
                                            </div>

                </div>

                <div>
                    <img className="h-[300px]" src="https://eloquent-horse-d72418.netlify.app/image%2012.png" alt="" />
                </div>

            </div>

        </div>

    )
}
export default Contact