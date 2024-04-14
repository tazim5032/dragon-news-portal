import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultImg from '../../assets/user.png';
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <img src={userDefaultImg} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navLinks
                        }

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navLinks
                    }

                </ul>
            </div>
            <div className="navbar-end">

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                {
                    user ? <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;