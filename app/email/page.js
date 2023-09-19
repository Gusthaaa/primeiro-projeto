import React from 'react';

const emailMe = () => {
    return (
        <section className="h-screen bg-slate-700 text-white font-bold" style={{marginTop: "95px"}}>
            <h1 className="text-center text-xl" style={{marginTop: "10px"}}>Contact Me</h1>
            <div class="flex flex-col px-10 py-5 w-1/2">
                <label for="name" class=" font-bold text-sm ">Your Name</label>
                <input 
                type="text" 
                id="name" 
                class="rounded-sm py-1 " 
                placeholder="John Doe" 
                required/>
            </div>
            <div class="flex flex-col px-10 py-5 w-1/2">
                <label for="email" class=" font-bold text-sm ">Your E-mail</label>
                <input 
                type="text" 
                id="email" 
                class="rounded-sm py-1 " 
                placeholder="JohnDoe@example.com" 
                required/>
            </div>
            <div class="flex flex-col px-10 py-5 w-1/2 h-1/2">
                <label for="message" class=" font-bold text-sm ">Message (Required)</label>
                <input
                className='h-32'
                type="text" 
                id="message" 
                class="rounded-sm py-1 " 
                placeholder="Your Message" 
                required/>
            </div>
        </section>
    )
};

export default emailMe;