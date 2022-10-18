import React from 'react';
import LinkedIn from './LinkedIn.png';
import GitHub from './GitHub.png';

const Home = () => {

    return (
        <div className="intro-section bg-lime-200 h-screen">
                <div className="subtitle text-4xl content-center flex flex-col items-center py-9">

                    <p>- DEV -</p>
                    <p>- ARTIST -</p>
                    <p>- ABSOLUTE NERD -</p>
                    <br />
                    <p className="text-xl">Check Me Out:</p>
                </div>
                <div className="socials grid grid-cols-6 gap-1">
                <div className="col-start-3">
                    
                    <a href="https://www.linkedin.com/in/xiomara-virola-7b351211b/" rel="noreferrer" target="_blank"><img className='flex justify-center object-scale-down h-48 w-98' src={LinkedIn} alt='linkedin logo'></img></a>
                </div>
                <div>
                    <a href="https://github.com/xiov91" rel="noreferrer" target="_blank"><img className='flex justify-center object-scale-down h-48 w-98' src={GitHub} alt='github logo'></img></a>
                </div>
            </div>
        </div>
    );
};

export default Home;