import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Title Section */}
            <div className="flex justify-center mt-10">
                <h1 className="text-3xl md:text-4xl font-extrabold">About Me</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center px-5 md:px-20 mt-10 space-y-10 md:space-y-0">
                {/* Animated Cards Section */}
                <div className="md:w-2/3 space-y-20">
                    {[...Array(2)].map((_, sectionIndex) => (
                        <div key={sectionIndex} className="relative overflow-hidden">
                            <div className="flex gap-5 absolute top-10 left-5 md:gap-10 md:left-[160px]">
                                {[...Array(3)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="group w-[100px] md:w-[150px] overflow-hidden transition-all duration-700 hover:w-[300px] md:hover:w-[560px]"
                                    >
                                        <ul className="flex -translate-x-[250px] group-hover:translate-x-0 transition-transform duration-700">
                                            <li className="w-[100px] md:w-[160px] h-[100px] md:h-[160px] bg-black mr-2 md:mr-[20px]">
                                                <a
                                                    href=""
                                                    className={`block w-full h-full bg-contain bg-no-repeat`}
                                                    style={{
                                                        backgroundImage: `url(${[
                                                                'https://cdnb.artstation.com/p/assets/images/images/060/616/891/large/benjamin-neuit-woods-blablo3450-create-a-cartoon-illustration-of-a-superhero-saving-6c2a8280-c45f-4544-84c6-26354ccc6691.jpg?1678956538',
                                                                'https://comicyears.com/wp-content/uploads/2023/03/2-692x1024.jpg',
                                                                'https://c8.alamy.com/comp/HTAN34/superhero-using-his-powers-to-save-helpless-women-and-kid-with-orange-HTAN34.jpg',
                                                            ][index]
                                                            })`,
                                                    }}
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="relative shadow-lg w-[100px] md:w-[120px] h-[150px] md:h-[230px] bg-gradient-to-r from-red-500 to-red-700 rounded-lg overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-gray-600 via-black to-gray-600"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-gray-600 via-black to-gray-600"></div>
                                <div className="absolute rotate-90 transform translate-x-[40px] md:translate-x-[60px] translate-y-[20px] md:translate-y-[40px] text-center font-bold text-black">
                                    <p className="text-lg md:text-3xl leading-tight">GOLD</p>
                                    <p className="text-base md:text-2xl italic">400</p>
                                    <p className="text-xs md:text-sm font-serif">
                                        drag here to view
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image and Button Section */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/originals/a1/06/e7/a106e79480617be8d9597076e14f8e00.png"
                        alt="Hero Placeholder"
                        className="w-[200px] md:w-[300px] lg:w-[500px] h-auto object-cover"
                    />
                    <Link to={'/grievance'}>
                        <button className="bg-red-500 text-white py-2 px-4 md:px-6 rounded-lg hover:bg-red-600 mt-5">
                            Ask Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
