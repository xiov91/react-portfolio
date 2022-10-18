import React, { Component } from 'react';
import Me from './me.png';

class About extends Component {
    render() {
        return (
            <div className="bg-lime-200 flex flex-row py-6">
                <div className="max-w-4xl">
                    <p className="text-lg text-justify px-6 py-24">Why hello there!
<br />
<br />
Welcome to my Portfolio! My name is Xiomara, or "Zee" for short. I'm a Full Stack Web Developer with a passion for mixing art and technology.
<br />
<br />
I have been working hard on this journey of coding with the idea of being able to expand my skills and learn how to expand from web development into game development. I've recently graduated from a Full Stack Web Development Bootcamp course through the University of Minnesota and received my certificate.
<br />
<br />
I am pride myself on my attention to detail and my attempts to mix style with function. Whether it's my art commissions or my website developments, I'll always have a focus on bringing your image to life.
<br />
<br />
When I'm not working on expanding my programming knowledge, I dive into different worlds through video games and books. I also enjoy character art and writing on the side.
<br />
<br />
Please contact me if you're interested in learning more about me, my skills, or would like to connect for work!</p>
                </div>
                <div>
                    <img src={Me} alt="myself" className="max-h-fit rounded-full drop-shadow-2xl px-28" />
                </div>
            </div>
        );
    };
};

export default About;