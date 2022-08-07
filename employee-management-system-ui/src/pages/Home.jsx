import React from "react";
import chifan from "../assets/images/chifan.jpeg";
import zhazha from "../assets/images/zhazha.jpeg";
import daidai from "../assets/images/daidai.gif";
import xiuxiu from "../assets/images/xiuxiu.gif";

const Home = () => {
  return (
    <div className="">
      <div className="h-96 mb-1 bg-green-700 gap-4 flex justify-center items-center">
        <div className=" text-pink-400 text-4xl font-black">快乐的小鸭</div>
        <div className=" text-pink-400 text-4xl font-black">🦆!!!!!!</div>
      </div>
      <div className="h-96 gap-5 bg-pink-700 flex justify-center ">
        <img className="w-80" src={xiuxiu} alt="" />
        <img className="w-80 items-end" src={zhazha} alt="" />
        <img className="w-80" src={chifan} alt="" />
        <img className="w-80" src={daidai} alt="" />
      </div>
    </div>
  );
};

export default Home;
