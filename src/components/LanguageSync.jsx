import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LanguageSync() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const parts = location.pathname
            .split("/")
            .filter(Boolean);

        const lastPart = parts[parts.length - 1]?.toLowerCase();

        if (lastPart === "en" || lastPart === "es") {
            localStorage.setItem(
                "language",
                lastPart.toUpperCase()
            );

            document.cookie = `googtrans=/en/${lastPart}; path=/`;

            if (
                window.location.hostname !== "localhost" &&
                window.location.hostname !== "127.0.0.1"
            ) {
                document.cookie =
                    `googtrans=/en/${lastPart}; path=/; domain=${window.location.hostname}`;
            }

            return;
        }

        let lang =
            localStorage.getItem("language")?.toLowerCase() || "en";

        if (lang !== "en" && lang !== "es") {
            lang = "en";
        }

        const cleanPath = location.pathname.replace(/\/$/, "");

        const newPath =
            cleanPath === ""
                ? `/${lang}`
                : `${cleanPath}/${lang}`;

        navigate(newPath, {
            replace: true,
        });
    }, [location.pathname, navigate]);

    return null;
}

export default LanguageSync;