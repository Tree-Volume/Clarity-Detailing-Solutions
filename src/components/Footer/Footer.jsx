import React from "react";
import { logo_image } from "assets/";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full">
            <div id="top" className="flex w-full">
                <nav className="relative flex w-4/12 p-6">
                    <ul>
                        <li className="text-left md:p-2 sm:p-1">
                            <a href="/services">Services</a>
                        </li>
                        <li className="text-left md:p-2 sm:p-1">
                            <a href="/testimonials">Testimonials</a>
                        </li>
                        <li className="text-left md:p-2 sm:p-1">
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex w-4/12">
                    <a href="/" className="m-auto w-1/3 sm:w-32">
                        <img
                            src={logo_image}
                            alt="Clarity Detailing Solutions Logo"
                        />
                    </a>
                </div>
                <div id="contact" className="relative p-6 flex flex-col w-4/12">
                    <p className="text-right w-full p-1">123 Main Street</p>
                    <p className="text-right w-full p-1">New York, NY 10030</p>
                    <p className="text-right w-full p-1">905-739-2859</p>
                    <a
                        className="text-right w-full p-1 break-words"
                        href="mailto:contact@claritydetailingsolutions.com"
                    >
                        contact@claritydetailingsolutions.com
                    </a>
                </div>
            </div>
            <span className="mx-10">
                <hr className="w-full my-5 linebreak" />
            </span>
            <div id="bottom" className="flex w-full p-2">
                <p className="text-center w-full p-1">
                    Copyright &copy; 2020 Clarity Detailing Solutions
                </p>
            </div>
        </footer>
    );
};

export default Footer;
