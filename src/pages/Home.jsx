import React from 'react';
import Myfoto from '../images/me.png';

const Home = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="w-3/5 space-y-5 pt-20">
                <h1 className="font-hind font-bold text-2xl">
                    Welcome to my personal site
                </h1>
                <h1 className="font-poppins text-4xl">
                    Hi, my name is Edi Kurniawan
                </h1>
                <h1 className="font-poppins font-bold text-4xl">
                    I'm a freelance Web Developer
                </h1>
                <div className="pt-5">
                    <a href="https://github.com" className="mr-4 text-blue-500">
                        <i className="fab fa-linkedin-in fa-3x"></i>
                    </a>
                    <a href="https://github.com" className="mr-4 text-blue-500">
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a href="https://github.com" className="text-blue-500">
                        <i className="fab fa-instagram fa-3x"></i>
                    </a>
                </div>
            </div>
            <div className="w-2/5 pt-40 relative">
                <div className="flex justify-end pr-5">
                    <img
                        src={Myfoto}
                        className="absolute h-5/6 -mt-20"
                        alt=""
                    />
                </div>
                <div className="bg-gradient-to-b from-green-100 to-blue-500 ml-32 pb-80 rounded-3xl"></div>
            </div>
        </div>
    );
};

export default Home;
