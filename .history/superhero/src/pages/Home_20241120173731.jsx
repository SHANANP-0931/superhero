import React, { useEffect, useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {

    const spanize = (text) =>
        text.split("").map((char, idx) => <span key={idx}>{char}</span>);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUsername(JSON.parse(sessionStorage.getItem("user")).username);
        } else {
            setUsername("");
        }

        const letters = document.querySelectorAll(".js-spanize span");
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.05}s`;
        });
    }, []);

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2  h-screen overflow-hidden">
                <section className="mast">
                    <figure className="mast__bg"></figure>
                    <header className="mast__header">
                        <h1 className="mast__title js-spanize">
                            Hello <span className="text-red-400">Guest !!!</span>
                        </h1>
                        <hr className="sep" />
                        <p className="mast__text js-spanize">
                            {spanize(
                                ` "I am Aurora, defender of the innocent and champion of justice. My voice is your voice, my strength is your strength. I will fight for those who cannot fight for themselves."`
                            )}
                        </p>
                        <div>
                            <Link to={'/about'}>
                                <button className="rounded shadow bg-red-700 text-white px-6 py-2 mt-5 hover:bg-red-600">
                                    About
                                </button>
                            </Link>
                        </div>
                    </header>
                </section>

                <div className="flex justify-center items-center overflow-hidden">
                    <img
                        className="animate__animated animate__backInDown max-w-full h-auto"
                        src="src/assets/hero.png"
                        alt="Hero Image"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
