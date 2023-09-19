import './components/globals.css'
import Image from 'next/image';

const homePage = () => {
  return (
      <main className=' bg-slate-700 h-screen mt-24'>
        <section className='flex flex-row bg-slate-500 h-1/4'>
          <Image
              className='rounded-full w-50 h-50 max-h-full max-w-full mt-3 ml-5 mb-3' 
              src="/Foto Perfil.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              />
              <div className="flex flex-col m-12 h-24">
                <h1 className='font-bold italic text-white mt-7'>
                  Hello! My name is Gustavo Toyoshi Hatanaka.
                </h1>
                <h2 className='text-white italic'>Born in Londrina in Brazil. I'm an undergraduate Software Engineer with a passion for solving problems with code. I started my journey into the world of software develpment a year ago, and since then i've been constantly learning and improving my skills.</h2>
              </div>
        </section>
        <section className='h-40'>
          <h1 className='text-white mt-20 p-5 h-30 italic'>As a begginer, I'm constantly seeking new challenges and projects to work on. I'm particularly intereste in full-stack development, machine learning, and game development, and I've completed several personal projects in these areas. I'm always eager to take on new challenges and collaborate with others, and I believe that working on projects is the best way to learn and grow as a software engineer.</h1>
        </section>
        <section className='flex flex-row bg-slate-500 h-1/4'>
        <div className="flex flex-col h-24 mt-8 ml-3">
                <h1 className='text-white italic mt-10 p-2'>
                  When I'm not coding, I enjoy spendind time with my family and friend, watching movies, and playing video games. I'm a lifelong learner, and I'm always looking for new books, tutorial, and courses to help me improve my skills and knowlegde. If you're interested in learning more about my skills and experience, feel free to take a look at my CV. I'd love to hear from you and discuss potential opportunities to collaborate on projects or learn from each other.
                </h1>
              </div>
          <Image
              className='rounded-lg w-50 h-50 max-h-full max-w-full mt-3 ml-5 mb-3 mr-5' 
              src="/café e computador.jpg"
              width={400}
              height={200}
              alt="Picture of coffe"
              />
        </section>
      </main>
  )
};

export default homePage


