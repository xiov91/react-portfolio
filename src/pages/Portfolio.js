import React, { Component } from 'react';
import Bookhunt from './screenshot.png';
import Runbuddy from './rb_screenshot.png';
import Quiz from './quiz-screenshot.png';
import Wandrlust from './wl-screen.png';
import Readme from './readme-screen.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="bg-lime-200">
                <div className="flex flex-row py-6">
                    <div className="bookhunt px-2">
                        <a href="https://vast-citadel-02849.herokuapp.com/" rel="noreferrer" target="_blank"><img src={Bookhunt} alt="book-hunt" title="Book Hunt" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:opacity-50 duration-300"></img></a>
                        <p className="text-lg text-center"><b>Book Hunt</b></p>
                        <p>Book Hunt is a project that centers around a prebuilt Google API to search for books, with a MERN stack supporting it to create a profile and save or delete books a user is interested in.</p>
                        <a href="https://github.com/xiov91/book-hunt" rel="noreferrer" target="_blank"><p className="text-lg text-center hover:text-lime-500"><b>Repository</b></p></a>
                    </div>
                    <div className="run-buddy px-2">
                       <a href="https://xiov91.github.io/run-buddy/" rel="noreferrer" target="_blank"><img src={Runbuddy} alt="run-buddy" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:opacity-50 duration-300"></img></a>
                        <p className="text-lg text-center"><b>Run Buddy</b></p>
                        <p>Our first project in our Full Stack course. This was solely a foray into the front-end, including forms, CSS, and multiple HTML pages.</p>
                        <a href="https://github.com/xiov91/run-buddy" rel="noreferrer" target="_blank"><p className="text-lg text-center hover:text-lime-500"><b>Repository</b></p></a>
                    </div>
                    <div className="coding-quiz px-2">
                        <a href="https://xiov91.github.io/ultimate-coding-quiz/" rel="noreferrer" target="_blank"><img src={Quiz} alt="coding-quiz" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:opacity-50 duration-300"></img></a>
                        <p className="text-lg text-center"><b>Coding Quiz</b></p>
                        <p>A short quiz made in JavaScript to test out the user's knowledge of the language!</p>
                        <a href="https://github.com/xiov91/ultimate-coding-quiz" rel="noreferrer" target="_blank"><p className="text-lg text-center hover:text-lime-500"><b>Repository</b></p></a>
                    </div>
                </div>
                <div className="flex flex-row py-6">
                    <div className="readme px-4">
                        <a href="https://drive.google.com/file/d/1zoIoYs4tMhcCW1FPeCK3N8C43Rn_etRS/view" rel="noreferrer" target="_blank"><img src={Readme} alt="readme-generator" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:opacity-50 duration-300"></img></a>
                        <p className="text-lg text-center"><b>ReadMe Generator</b></p>
                        <p>A from-scratch built CLI program that inquires and compiles information into a README.md file. Born from Node.js and Inquirer, this exports the given information into a properly formatted file.</p>
                        <a href="https://github.com/xiov91/readme-generation1" rel="noreferrer" target="_blank"><p className="text-lg text-center hover:text-lime-500"><b>Repository</b></p></a>
                    </div>
                    <div className="wander px-4">
                        <img src={Wandrlust} alt="wandrlust" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:opacity-50 duration-300"></img>
                        <p className="text-lg text-center"><b>WandrLust</b></p>
                        <p>A full-stack project that combined the full MERN stack as well as ApolloServer, GraphQL, Tailwind, and 3rd Party APIs.</p>
                        <a href="https://github.com/wagnergabe/Wandrlust" rel="noreferrer" target="_blank"><p className="text-lg text-center hover:text-lime-500"><b>Repository</b></p></a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Portfolio;