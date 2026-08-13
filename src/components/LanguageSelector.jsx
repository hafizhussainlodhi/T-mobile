import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function LanguageSelector() {
    const [open, setOpen] = useState(false);

    const [lang, setLang] = useState(
        localStorage.getItem("language") || "EN"
    );

    const dropdownRef = useRef(null);

    const languages = [
        {
            code: "EN",
            googleCode: "en",
            label: "English",
            flag: "/assets/us.png",
        },
        {
            code: "ES",
            googleCode: "es",
            label: "Spanish",
            flag: "/assets/spanish.png",
        },
    ];

    const current =
        languages.find((item) => item.code === lang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeLanguage = (language) => {
        const targetLang = language.googleCode;

        document.cookie = `googtrans=/en/${targetLang}; path=/`;

        if (
            window.location.hostname !== "localhost" &&
            window.location.hostname !== "127.0.0.1"
        ) {
            document.cookie =
                `googtrans=/en/${targetLang}; path=/; domain=${window.location.hostname}`;
        }

        localStorage.setItem(
            "language",
            targetLang.toUpperCase()
        );

        const parts = window.location.pathname
            .split("/")
            .filter(Boolean);

        const lastPart = parts[parts.length - 1];

        if (lastPart === "en" || lastPart === "es") {
            parts[parts.length - 1] = targetLang;
        } else {
            parts.push(targetLang);
        }

        const newPath = `/${parts.join("/")}`;

        window.location.href = newPath;
    };

    return (
        <div ref={dropdownRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center border-2 border-(--primary-color) rounded-full p-1 gap-1 cursor-pointer"
                aria-label="Select language"
                aria-expanded={open}
            >
                <img
                    src={current.flag}
                    alt=""
                    className="w-6 h-6 rounded-full"
                />

                <ChevronDown size={18} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 p-2 w-32 bg-white rounded-xl shadow-lg z-50">
                    {languages.map((item) => (
                        <button
                            type="button"
                            key={item.code}
                            onClick={() => changeLanguage(item)}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer text-sm ${lang === item.code
                                    ? "bg-yellow-400 font-medium text-black"
                                    : ""
                                }`}
                        >
                            <img
                                src={item.flag}
                                alt=""
                                className="w-5 h-5 rounded-full"
                            />

                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;