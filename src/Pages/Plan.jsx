import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Plan() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            name: "$10 Connect by TMO 1GB",
            price: "10",
            description:
                "Get 1000 Talk & 1000 Text with up to 1GB of high speed data on T-Mobile's network to use virtually anywhere within the U.S., with no annual service contracts to sign or risk of data overage charges.",
        },
        {
            name: "$15 Connect by TMO 5GB",
            price: "15",
            description:
                "5GB data with unlimited talk and unlimited texts.",
        },
        {
            name: "$25 Connect by TMO 8GB",
            price: "25",
            description:
                "8GB data with unlimited talk and unlimited texts.",
        },
        {
            name: "$35 Connect by TMO 12GB",
            price: "35",
            description:
                "12GB data with unlimited talk and unlimited texts.",
        },
        {
            name: "Starter Monthly",
            price: "45",
            description:
                "Unlimited Nationwide Talk, Text & 5G Data, with 15GB of Premium Data.",
        },
        {
            name: "Unlimited Monthly",
            price: "50",
            description:
                "Get Unlimited Talk, Text & 5G data on your smartphone virtually everywhere in the U.S., with no data overages or annual contracts.",
        },
        {
            name: "Unlimited Plus Monthly",
            price: "65",
            description:
                "Get Unlimited Talk, Text & 5G data on your smartphone, with no data overages or annual contracts. Includes 5GB of 5G high speed mobile.",
        },
        {
            name: "T-Mobile Prepaid 10GB 4 lines for $100",
            price: "100",
            description:
                "$100/month - First line is $97 and second, third and fourth lines are $1 each - that's 4 lines for $100. All the nationwide Talk, Text & Data you can handle, with up to 10GB of 5G for only $97/month, giving you high speed access when you need it most.",
        },
        {
            name: "T-Mobile Prepaid Unlimited 2 lines for $75 with Talk & Text to Mexico/Canada",
            price: "75",
            description:
                "$75/month - First line is $55/month and second line is $20/month. That's a saving of $15/month. Talk and text to Mexico & Canada while in the U.S. included Unlimited talk and text, Unlimited 5G data, and up to 3GB of domestic high-speed mobile hotspot data with texting to 215+ destinations while in U.S., Mexico & Canada.",
        },
        {
            name: "North America Stateside International Calling w/Mobile",
            price: "15",
            description:
                "Go ahead and talk the world’s ear off with Stateside International Calling w/Mobile. Get unlimited calling from U.S./Mexico/Canada to mobiles in 30+ countries & landlines in 70+ countries. Calls must originate on T-Mobile’s U.S. network or in Canada or Mexico. Rates and included countries vary and are subject to change.",
        },
        {
            name: "Mexico & Canada Unlimited",
            price: "5",
            description:
                "Expand your plan with Mexico & Canada Unlimited for only $5/mo more and get Unlimited Talk, Text & LTE data on your smartphone in the U.S., and unlimited data while traveling in Mexico and Canada, with up to 5GB at 4G LTE speeds. As a bonus, get unlimited text messaging in Mexico and Canada.",
        },
    ];

    return (

        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col">
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

            <section className="flex-1 flex flex-col px-6 min-h-0">
                <h1 className="mt-14 text-2xl font-semibold text-center">

                </h1>

                <div className="text-center mt-2">
                    <p className="text-xl">Select</p>
                    <h2 className="text-2xl font-bold">Desired Plan</h2>
                </div>

                {/* Tabs */}
                {/* <div className="mt-8 mx-auto flex rounded overflow-hidden border border-gray-200">
                    {["Local", "Regional", "Global"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-24 h-8 text-xs ${activeTab === tab
                                ? "bg-(--primary-color) text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div> */}

                {/* Plans */}
                <div className="mt-8 flex-1 overflow-y-auto pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-gray-300 bg-white shadow-lg px-3 py-4 text-center"
                            >
                                <div className="text-(--primary-color) font-bold">
                                    <span className="align-top text-sm">$</span>
                                    <span className="text-4xl">{plan.price}</span>
                                    <span className="text-xs">/mo</span>
                                </div>

                                <p className="mt-2 text-[9px] font-semibold leading-tight line-clamp-4">
                                    {plan.description}
                                </p>

                                <h3 className="mt-3 text-sm font-bold">
                                    {plan.name}
                                </h3>

                                <button
                                    onClick={() => setSelectedPlan(plan)}
                                    className="mt-3 rounded-full bg-(--primary-color) text-white text-[9px] font-bold px-5 py-1"
                                >
                                    View Details
                                </button>

                                <p className="mt-1 text-[8px]">
                                    Taxes & fees extra
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="w-full max-w-[300px] mx-auto py-4">

                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                            onClick={() => window.history.back()}
                            className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <Link
                            to="/information"
                            className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </section>
            {selectedPlan && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setSelectedPlan(null)}
                >
                    <div
                        className="relative w-full max-w-[460px] rounded-lg bg-white px-6 py-8 text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="absolute right-5 top-4 text-black text-xl font-bold"
                        >
                            ×
                        </button>

                        <div className="text-(--primary-color) font-bold">
                            <span className="align-top text-xl">$</span>
                            <span className="text-5xl">
                                {selectedPlan.price}
                            </span>
                            <span className="text-sm">/mo</span>
                        </div>

                        <p className="mt-2 text-[10px] text-black">
                            Taxes & fees extra
                        </p>

                        <h2 className="mt-2 text-lg font-bold">
                            {selectedPlan.name}
                        </h2>

                        <p className="mt-3 text-left text-sm leading-6">
                            {selectedPlan.description}
                        </p>

                        <button className="mt-3 text-left block text-xs font-bold text-blue-600 underline">
                            Full Plan Details
                        </button>

                        <div className="border-t border-gray-300 mt-4 pt-4 text-left space-y-3 text-sm">
                            <p>↕️ {selectedPlan.price === "5" ? "5GB" : "Data included with plan"}</p>

                            <p>🌐 Hotspot add-on available</p>

                            <p>
                                🌍 Unlimited talk and text in the U.S. and unlimited
                                text from the U.S. to over 230 countries and territories.
                            </p>
                        </div>

                        <div className="mt-5">
                            <h3 className="font-bold text-xs">
                                Broadband Labels
                            </h3>

                            <p className="text-[10px] text-(--primary-color) underline">
                                https://www.att.com/broadbandlabels/NEDPPbfacts
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}