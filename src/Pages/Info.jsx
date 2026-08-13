import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Info() {
    const [simType, setSimType] = useState("esim");
    return (
        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col overflow-hidden">

            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 shrink-0">
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

            {/* Scrollable Content */}
            <section className="flex-1 overflow-y-auto px-6">
                <div className="pb-4">
                    <h1 className="mt-14 text-2xl font-semibold text-center">

                    </h1>

                    <div className="text-center mt-2">
                        <h2 className="text-2xl font-bold">
                            <span className="text-xl font-light">Add</span>{" "}
                            Personal Info.
                        </h2>
                        <p>Note : Required For SIM Activation & Invoicing</p>
                    </div>

                    <div className="mt-6 space-y-3">

                        {/* SIM Type */}
                        <div className="w-full">
                            <select
                                name="simType"
                                value={simType}
                                onChange={(e) => setSimType(e.target.value)}
                                className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none focus:border-(--primary-color)"
                                required
                            >
                                <option value="esim">
                                    eSIM
                                </option>

                                <option value="physical-sim">
                                    Physical SIM
                                </option>
                            </select>
                        </div>


                        {/* SIM Number — only for Physical SIM */}
                        {simType === "physical-sim" && (
                            <input
                                type="text"
                                name="simNo"
                                placeholder="SIM No"
                                className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />
                        )}


                        {/* Name */}
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />
                        </div>


                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs"
                        />


                        {/* Address */}
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs"
                        />


                        {/* City / State / Zip */}
                        <div className="grid grid-cols-3 gap-3">

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />

                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Zip Code"
                                className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs"
                            />

                        </div>


                        {/* IMEI */}
                        <input
                            type="text"
                            name="imei"
                            placeholder="IMEI"
                            className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs"
                        />


                        {/* Contact */}
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact"
                            className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs"
                        />

                    </div>
                </div>
            </section>

            {/* Fixed Footer */}
            <div className="shrink-0 bg-white border-t border-gray-100 px-6 py-4">
                <div className="max-w-[300px] mx-auto grid grid-cols-2 gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <Link
                        to="/term"
                        className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Next
                    </Link>
                </div>
            </div>

        </main>
    );
}