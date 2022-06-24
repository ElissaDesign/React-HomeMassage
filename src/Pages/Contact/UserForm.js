import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../../components/NavBar/NavBar'

const UserForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0sgvy39', 'template_v3fxxhl', form.current, 'zYyBQt12awpKz-BpQ')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
          window.alert("Message Sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          window.alert("Message was not sent");
      });
  };
  return (
   <div>
     <NavBar/>
      <div className='w-[95%] md:w-[70%] mx-auto shadow p-4 drop-shadow-sm hover:shadow-lg my-10'>
      <form ref={form} onSubmit={sendEmail} className="w-full mx-auto">
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your full name'  className='w-full my-5 p-2 text-sm' required/>
      <br />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Your Email'  className='w-full my-5 p-2 text-sm' required/>
      <br />
      <label>Phone Number</label>
      <input type="text" name="user_number" placeholder='Your Phone Number'  className='w-full my-5 p-2 text-sm' required/>
      <br />
      <label>Service Name</label>
      <input type="text" name="service_name" placeholder='Service name '  className='w-full my-5 p-2 text-sm' required/>
      <br />
      <label>Massage by</label>
      <select name="gender" id="" className='w-full my-5 p-2 text-sm'>
        <option value="any">Any</option>
        <option value="woman">Woman</option>
        <option value="man">Man</option>
      </select>
      <br />
      <label>Anything Alse?</label>
      <textarea name="message" placeholder='Any addition on how can we help you?'  className='w-full my-5 p-2 text-sm'/>
      <br />
      {/* <input type="submit" value="Send" className='text-center'/> */}
      <button type="submit" value="Send" className='bg-primary py-2 px-4 text-center w-full text-white'>Send</button>
    </form>
    </div>
   </div>
  )
}

export default UserForm