import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className='flex  justify-center mt-10' >
                <h1 className='text-white text-3xl font-extrabold'>About Me</h1>
            </div>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className="relative overflow-hidden m-20 ">

                        <div className="flex gap-10 absolute top-[35px] left-[160px]">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="group w-[150px] overflow-hidden transition-all duration-1000 hover:w-[560px]"
                                >
                                    <ul className="flex -translate-x-[450px] group-hover:translate-x-0 transition-transform duration-1000 border-y-[17px] border-solid border-[url('https://i.imgur.com/Sm9CNai.png')]">
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://cdnb.artstation.com/p/assets/images/images/060/616/891/large/benjamin-neuit-woods-blablo3450-create-a-cartoon-illustration-of-a-superhero-saving-6c2a8280-c45f-4544-84c6-26354ccc6691.jpg?1678956538')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://comicyears.com/wp-content/uploads/2023/03/2-692x1024.jpg')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://c8.alamy.com/comp/HTAN34/superhero-using-his-powers-to-save-helpless-women-and-kid-with-orange-HTAN34.jpg')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="relative shadow-[8px_0px_10px_rgba(0,0,0,0.5)] top-[20px] left-[50px] w-[120px] h-[230px] bg-gradient-to-r from-[#a42208c7] via-[#f43b3b] to-[#ec4b11] overflow-hidden">
                            <div className="absolute top-0 left-[-5px] w-[130px] h-[10px] bg-gradient-to-r from-[#3f3f3f] via-[#000] to-[#474747]"></div>
                            <div className="absolute bottom-0 left-[-5px] w-[130px] h-[10px] bg-gradient-to-r from-[#3f3f3f] via-[#000] to-[#474747]"></div>
                            <div className="absolute rotate-90 translate-x-[60px] translate-y-[40px] text-center font-bold text-black">
                                <p className="text-[3em] leading-[0.9em]">GOLD</p>
                                <p className="text-[2em] italic">400</p>
                                <p className="text-[0.8em] font-serif">drag here to view</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden m-20 ">

                        <div className="flex gap-10 absolute top-[35px] left-[160px]">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="group w-[150px] overflow-hidden transition-all duration-1000 hover:w-[560px]"
                                >
                                    <ul className="flex -translate-x-[450px] group-hover:translate-x-0 transition-transform duration-1000 border-y-[17px] border-solid border-[url('https://i.imgur.com/Sm9CNai.png')]">
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://www.miraclestudios.com/wp-content/uploads/2019/03/Hero-Saves-Girl.jpg')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://thumbs.dreamstime.com/b/super-hero-saving-kitty-28201623.jpg')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                        <li className="w-[160px] h-[160px] bg-black mr-[20px]">
                                            <a
                                                href=""
                                                className="block w-full h-full bg-[url('https://thumbs.dreamstime.com/z/savior-illustration-flying-superhero-carrying-woman-his-arms-no-transparency-used-basic-linear-gradients-used-sky-54025056.jpg')] bg-contain bg-no-repeat"
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="relative shadow-[8px_0px_10px_rgba(0,0,0,0.5)] top-[20px] left-[50px] w-[120px] h-[230px] bg-gradient-to-r from-[#a42208c7] via-[#f43b3b] to-[#ec4b11]  overflow-hidden">
                            <div className="absolute top-0 left-[-5px] w-[130px] h-[10px] bg-gradient-to-r from-[#3f3f3f] via-[#000] to-[#474747]"></div>
                            <div className="absolute bottom-0 left-[-5px] w-[130px] h-[10px] bg-gradient-to-r from-[#3f3f3f] via-[#000] to-[#474747]"></div>
                            <div className="absolute rotate-90 translate-x-[60px] translate-y-[40px] text-center font-bold text-black">
                                <p className="text-[3em] leading-[0.9em]">GOLD</p>
                                <p className="text-[2em] italic">400</p>
                                <p className="text-[0.8em] font-serif">drag here to view</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-lg-4 mt-32'>
                    <div className="w-[50%]">
                        <div className="flex justify-center items-center mt-10">
                            <img
                                src="https://i.pinimg.com/originals/a1/06/e7/a106e79480617be8d9597076e14f8e00.png"
                                alt="Placeholder"
                                className="w-[500px] h-auto object-cover"
                            />
                        </div>
                        <div className="flex justify-center mt-4">
                            <Link to={'/grievance'} >
                                <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
                                    Ask Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
