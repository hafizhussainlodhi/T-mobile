import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function CheckComp() {
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <main className="max-w-xl mx-auto h-dvh w-full overflow-hidden bg-white flex flex-col items-center relative">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 z-20">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <section className="flex-1 flex flex-col items-center text-center px-6">
                <h1 className="mt-14 text-2xl font-semibold ">
                    Refill Flow
                </h1>

                <div className="mt-24">
                    <p className="text-xl ">Let's Check</p>
                    <h2 className="text-2xl font-semibold leading-tight text-[#00BFFF]">
                        Your Device Compatibility
                    </h2>
                </div>

                <div className="mt-10 w-full max-w-[300px] rounded-md bg-white shadow-2xl py-5 px-4">
                    <h3 className="text-xl font-semibold text-[#E00171]">
                        *#06#
                    </h3>
                    <p className="text-xs mt-1">
                        Your IMEI number will appear on the screen
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <div className="mt-auto mb-8 w-full max-w-[300px] z-10">
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="w-full h-11 rounded-full bg-[#E00171] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#c20162] transition-colors"
                >
                    Check Compatibility
                </button>

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <Link
                        to="/plan"
                        className="h-10 rounded-full bg-[#E00171] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#c20162]"
                    >
                        Skip
                    </Link>
                </div>
            </div>

            {/* Check Compatibility Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                    Check Your Device
                                </p>
                                <h2 className="mt-2 text-2xl font-semibold">
                                    Compatibility
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-100"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-50 p-4 text-left text-sm text-gray-600">
                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                                IMEI
                            </p>
                            <p className="font-medium text-base text-[#1f2937]">
                                21902459038459032948
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setShowModal(false);
                                setShowSuccess(true);
                            }}
                            className="mt-6 w-full rounded-full bg-[#E00171] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c20162]"
                        >
                            CHECK
                        </button>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                        <div className="flex justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-12 w-12">
                                    <path d="M9.75 17.25l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5z" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                                YOUR PHONE ESIM IS COMPATIBLE
                            </h2>
                            <p className="mt-4 text-sm text-slate-500">
                                IMEI: 21902459038459032948
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowSuccess(false)}
                            className="mt-8 w-full rounded-full bg-[#E00171] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c20162]"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}