import React from "react";
import Image from "next/image";
const Projects = () =>{
    return (
        <div className="h-screen bg-slate-700 text-white mt-24">
            <h1 className="font-bold italic text-center text-xl">My Projects</h1>
            <section className="flex h-24 mt-8  bg-slate-500 w-screen h-1/3" style={{height: "300px"}}>
                <Image 
                className="rounded-lg  max-h-full max-w-full mt-3 ml-5 mb-3 mr-5" 
                src="/PrimeiroProjeto.png"
                width={400}
                height={100}
                alt="Bookstore project"/>
                <h1 className="aling-middle mt-32 italic">This is my first project. It's a simulation of a Bookstore, to do this project I used HTML, CSS, JavaScript.</h1>
            </section>
        </div>
    )
};

export default Projects;