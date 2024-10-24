function Footer() {
    return (
      <div className="h-[250px] w-full bg-[#2C2C2C] flex justify-center items-center text-white p-10 text-[14px]">
        <div className="w-[90%] h-[100%] flex justify-between">
          
          <div className="w-[200px]">
            <img
              src="https://eloquent-horse-d72418.netlify.app/Group%2011%201.png"
              alt="Logo"
            />
          </div>
  
         
          <div className="flex flex-col w-[300px] space-y-2">


            <h1 className="font-bold mb-3">Information</h1>
            <span>Main</span>
            <span>Gallery</span>
            <span>Projects</span>
            <span>Certification</span>
            <span>Contacts</span>
          </div>

          <div className="w-[350px]">

            <h1 className="font-bold mb-3">Contacts</h1>

            <span >1234 Sample Street <br /> Austin, Texas 23456</span>
            <br /><br />
            <span>Phone: +923112484573</span>
            <br /><br />
            <span>info@example.com</span>
          </div>
  
       
          <div className="w-[300px]">

            <h1 className="font-bold mb-3">Social Media</h1>
            
            <div className="flex items-center space-x-4">
           
              <a href="#" aria-label="Facebook">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>
  
             
              <a href="#" aria-label="Twitter">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 97.2c-19 8.4-39.4 14.1-60.8 16.6 21.9-13.1 38.6-33.9 46.5-58.6-20.5 12.2-43.2 21-67.4 25.8C414 59 388 48 360.4 48c-53.6 0-97.1 43.5-97.1 97.2 0 7.6 0.9 15.2 2.5 22.5C173.9 161.8 92.6 121.5 40 63.3c-8.4 14.4-13.2 31.2-13.2 49.1 0 33.9 17.3 63.9 43.5 81.5-16-0.5-31-4.9-44.1-12v1.2c0 47.4 33.7 86.9 78.4 95.8-8.2 2.3-16.8 3.5-25.7 3.5-6.3 0-12.4-0.6-18.4-1.7 12.5 38.7 48.5 66.8 91.2 67.6-33.5 26.3-75.7 42-121.5 42-7.9 0-15.7-0.5-23.4-1.4 43.3 27.8 94.7 44.1 150 44.1 180 0 278.5-149.2 278.5-278.5 0-4.2-0.1-8.4-0.3-12.6C480.2 136.6 497.7 118.3 512 97.2z" />
                </svg>
              </a>
  
           
              <a href="#" aria-label="LinkedIn">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 480H7.4V165.4h92.9V480zm-46.5-356c-31.5 0-56.9-25.5-56.9-56.9S22.2 10 53.7 10c31.5 0 56.9 25.5 56.9 56.9S84.8 124 53.7 124zM447.8 480h-93.1V312.4c0-40-14.3-67.3-50.1-67.3-27.3 0-43.5 18.3-50.6 36-2.6 6.4-3.2 15.3-3.2 24.2V480h-93.1V165.4h89.5v43h1.3c12.5-23.7 43.1-57.6 105.3-57.6 76.9 0 134.6 50.2 134.6 158.1V480z" />
                </svg>
              </a>
  
             
              <a href="#" aria-label="Pinterest">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M496 256c0 136.8-111.1 248-248 248S0 392.8 0 256 111.1 8 248 8s248 111.2 248 248zm-138.2-7.5c-10.4-8.1-24.1-13.5-38.3-13.5-29.5 0-47.4 22.4-47.4 46.3 0 11.2 4.3 21.8 12.7 26.5 2.8 1.7 2.9 3.8 2.2 5.9-.7 2.1-4.4 14.3-5.7 18.6-.9 3-3.2 3.7-5.8 2.3-16.6-9.5-24.2-34.9-24.2-56.1 0-36.6 26.6-69.9 75.9-69.9 41.1 0 73.4 29.2 73.4 68.3 0 43-24 75.1-59.1 75.1-19.2 0-36.6-10.3-42.6-21.9 0 0-9.7 37.7-11.7 45.1-3.5 12.7-10.3 25.5-16.6 35.7 14.9 4.4 30.8 6.9 47.3 6.9 119.4 0 190.7-93.7 190.7-187.1 0-54.4-21.8-103.4-90.4-103.4-46.6 0-77.5 32.1-77.5 67.1 0 18.3 7 35.8 15.7 45.9 1.8 2.2 2.1 4.2 1.6 6.5-.6 2.6-2.1 9.1-2.7 11.6-1 4.2-3.3 5.1-7.5 3.1z" />
                </svg>
              </a>
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  