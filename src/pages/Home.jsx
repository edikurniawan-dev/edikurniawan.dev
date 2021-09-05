import React from 'react';
import Myfoto from '../images/me.png';

const Home = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="w-3/5">
                <h3>Hi, my name is Edi Kurniawan</h3>
                <h1>I'm a freelance Web Developer</h1>
            </div>
            <div className="w-2/5 pt-40 relative">
                <div className="flex justify-end pr-5">
                    <img
                        src={Myfoto}
                        className="absolute h-5/6 -mt-20"
                        alt=""
                    />
                </div>
                <div className="bg-blue-500 ml-32 pb-80 rounded-3xl"></div>
            </div>
        </div>
    );
};

export default Home;
