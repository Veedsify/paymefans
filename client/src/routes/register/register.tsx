import { countries } from "@/lib/locations";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [country, setCountry] = useState<string>("Nigeria");
    const [countryList, setCountryList] = useState<boolean>(false);

    const countryFocus = () => {
        setCountryList(true);
        setCountry("")
        document.body.style.overflow = "hidden";
    }

    const countryBlur = () => {
        if (country !== "") {
            setCountryList(false);
        }
    }

    const selectCountry = (e: MouseEvent<HTMLParagraphElement>) => {
        const code = e.currentTarget.getAttribute("data-code");
        const getCountry = countries.filter(country => country.code === code);
        setCountry(getCountry?.[0].name);
        setCountryList(false);
    }
    return (
        <div className="min-h-screen p-5 bg-black md:p-7">
            <div className="max-w-screen-xl pt-12 mx-auto mb-24 md:mt-16">
                <Link to="/">
                    <img src="/site/logo.svg" alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col items-start justify-center max-w-screen-xl mx-auto">
                <h1 className="mt-auto mb-5 text-2xl font-bold text-white">Sign up</h1>
                <form action="" className="flex-1 w-full mb-5" autoComplete="false" aria-autocomplete="none">
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <input type="text" id="name" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Full Name" />
                    </div>
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <input type="email" id="email" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Email" />
                    </div>
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <input type="tel" id="phone" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Phone Number" />
                    </div>
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <input
                            onFocus={countryFocus}
                            onBlur={countryBlur}
                            type="text"
                            placeholder="Country"
                            id="location" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" value={country}>
                        </input>
                        {countryList && (
                            <div className="overflow-y-auto bg-white rounded-lg max-h-80">
                                {countries.map((country, index) => (
                                    <p
                                        onClick={selectCountry}
                                        data-code={country.code}
                                        className="p-2 text-sm font-bold text-black border-b cursor-pointer hover:bg-messages-unread" key={index}>{country.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 mb-5 md:max-w-96">
                        <input type="password" id="password" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Password" />
                    </div>
                    <div className="flex items-start justify-between w-full mb-6 md:max-w-96">
                        <input type="checkbox" name="terms" className="w-5 h-5 mt-1 mr-2 bg-transparent accent-primary-dark-pink" id="terms" />
                        <label htmlFor="terms" className="text-sm font-bold text-white cursor-pointer">I am 18+ and it is legal to access this site in my country.</label>
                    </div>
                    <div>
                        <button className="block w-full px-3 py-3 text-sm font-bold text-white rounded-lg bg-primary-dark-pink md:max-w-96">Sign up</button>
                    </div>
                </form>
                <div className="mt-12">
                    <p className="text-sm font-bold text-center text-white">Have an account? <Link to="/login" className="font-bold text-primary-dark-pink">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;