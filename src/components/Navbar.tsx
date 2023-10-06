import React, { useEffect, useRef } from "react";
import brandIcon from "/vite.svg";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const Navbar: React.FC = () => {
    const [theme, setTheme] = useLocalStorage("theme", "emerald");
    const themeSelectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        for (let i = 0; i < themeSelectRef.current!.options.length; i++) {
            if (themeSelectRef.current!.options[i].value === theme) {
                themeSelectRef.current!.selectedIndex = i;
                break;
            }
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div className="navbar bg-base-100 border-b border-base-200">
            <div id="navbar-brand" className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl flex items-center" to="/">
                    <img src={brandIcon} alt="brand icon" className="w-6 h-6" />
                    <span>WLiV</span>
                </Link>
            </div>

            <div id="navbar-menu" className="flex gap-4">
                <select className="select w-full max-w-xs select-bordered" ref={themeSelectRef} onChange={(e) => setTheme(e.target.value)}>
                    <option disabled selected>
                        Theme
                    </option>
                    <option>light</option>
                    <option>dark</option>
                    <option>cupcake</option>
                    <option>bumblebee</option>
                    <option>emerald</option>
                    <option>corporate</option>
                    <option>synthwave</option>
                    <option>retro</option>
                    <option>cyberpunk</option>
                    <option>valentine</option>
                    <option>halloween</option>
                    <option>garden</option>
                    <option>forest</option>
                    <option>aqua</option>
                    <option>lofi</option>
                    <option>pastel</option>
                    <option>fantasy</option>
                    <option>wireframe</option>
                    <option>black</option>
                    <option>luxury</option>
                    <option>dracula</option>
                    <option>cmyk</option>
                    <option>autumn</option>
                    <option>business</option>
                    <option>acid</option>
                    <option>lemonade</option>
                    <option>night</option>
                    <option>coffee</option>
                    <option>winter</option>
                </select>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li id="auth-dropdown-menu">
                            <a className="justify-between">Profile</a>
                        </li>
                        <li>
                            <form method="post">
                                <button type="submit" className="font-bold text-error">Signout</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
