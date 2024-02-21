import logo from "../../../public/logo-landscape.svg";

function Navbar() {
    return (
        <main>
            <div className="w-full rounded-3xl bg-light px-8 py-6 flex flex-row justify-between items-stretch">
                <div className="self-center">
                    <a href="/" className="h-full">
                        <img src={logo.src} alt="company logo" className="h-8 l:h-9 self-center" loading="lazy"/>
                    </a>
                </div>
                
                <div className="hidden space-x-12 self-center text-sm font-normal md:flex">
                    <a href="#projects" className="animated-underline self-center" aria-label="navigate to about me button">
                        Projekty
                    </a>
                    <a href="#services" className="animated-underline self-center" aria-label="navigate to projects button">
                        Služby
                    </a>
                    <a href="#about" className="animated-underline self-center" aria-label="navigate to contact button">
                        O&nbsp;nás
                    </a>
                    <button className="button-primary">
                        Kontakt
                    </button>
                </div>

                <button id="menu-btn" className="block hamburger self-center md:hidden focus:outline-none" aria-label="toggle mobile menu button">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            <div id="menu" className="full-screen hidden z-50 fixed backdrop-blur-sm mt-8">
                <div className="font-semibold tracking-widest bg-white">
                    <div className="flex flex-col max-w-[90%] mx-auto">
                        <button id="services-btn" className="w-[95%] mx-auto outline-none border-0 text-right px-2 py-4" aria-label="navigate to services button">SERVICES</button>
                        <hr className="w-full border-0 border-b border-gray-500"/>
                        <button id="about-btn" className="w-[95%] mx-auto outline-none border-0 text-right px-2 py-4" aria-label="navigate to about me button">ABOUT</button>
                        <hr className="w-full border-0 border-b border-gray-500"/>
                        <button id="projects-btn" className="w-[95%] mx-auto outline-none border-0 text-right px-2 py-4" aria-label="navigate to projects button">PROJECTS</button>
                        <hr className="w-full border-0 border-b border-gray-500"/>
                        <button id="contact-btn" className="w-[95%] mx-auto outline-none border-0 text-right px-2 py-4" aria-label="navigate to contact button">CONTACT</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Navbar;