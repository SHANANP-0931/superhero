import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div style={{ width: "100%", height: "70px" }} className=" bg-black flex justify-end gap-3  
              text-gray-500 font-bold">
                <Link to={"/"}><h5 className="cursor-pointer mt-5 hover:scale-110 hover:translate-y-[-2px] hover:shadow-lg transition-transform duration-300">Home</h5></Link>
                <Link to={"/about"}><h5 className="cursor-pointer mt-5 hover:scale-110 hover:translate-y-[-2px] hover:shadow-lg transition-transform duration-300">About</h5></Link>
                <Link to={"/grievance"}><h5 className="cursor-pointer mt-5 pe-5 hover:scale-110 hover:translate-y-[-2px] hover:shadow-lg transition-transform duration-300">Grievance</h5></Link>
            </div>

        </>
    )
}

export default Header