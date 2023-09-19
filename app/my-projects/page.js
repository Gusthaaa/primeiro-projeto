import React from "react";
import Image from "next/image";
const Projects = () =>{
    return (
        <div className="h-screen bg-slate-700 text-white mt-24">
            <h1 className="font-bold italic text-center text-xl">My Projects</h1>
            <section className='flex h-24 mt-8  bg-slate-500 w-screen h-1/3'>
                <Image 
                className='ml-3 mt-2 mb-2 mr-2 rounded-lg' 
                src="/PrimeiroProjeto.png"
                width={500}
                height={400}
                alt="Bookstore project"/>
                <h1 className='aling-middle mt-32 font-bold italic'>This is my first project. It's a simulation of a Bookstore, to do this project I used HTML, CSS, JavaScript.</h1>
            </section>
        </div>
    )
};

export default Projects;