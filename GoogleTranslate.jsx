import { useEffect } from "react";

function GoogleTranslate() {
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,es",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        // Prevent loading twice
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");

            script.id = "google-translate-script";
            script.src =
                "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

            script.async = true;

            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            id="google_translate_element"
            className="hidden"
        />
    );
}

export default GoogleTranslate;