import logo from "../../../public/logo-landscape.svg";

export default function Navbar() {
    return (
        <div className="w-full rounded-3xl bg-light px-8 py-6 grid grid-cols-6 gap-2">
            <div>
                <a href="/" className="w-full">
                    <img src={logo.src} alt="company logo"  className="w-full"/>
                </a>
            </div>
            <div className="col-span-4 flex flex-row justify-center space-x-12 max-w-[90%] mx-auto h-full items-stretch">
                <a href="" className="animated-underline self-center">
                    Projekty
                </a>
                <a href="" className="animated-underline self-center">
                    Služby
                </a>
                <a href="" className="animated-underline self-center">
                    O nás
                </a>
            </div>
            <div>
                <button className="w-full">Kontakt</button>
            </div>
        </div>
    );
}