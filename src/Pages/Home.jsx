import { ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import {
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
    Smartphone,
    BadgeDollarSign,
    CreditCard,
    ArrowRight
} from "lucide-react";


const services = [
    {
        title: "Activate a New Plan",
        description: "Activate your line in minutes with eSIM or a physical SIM.",
        icon: Smartphone,
        to: "/check-compatibility",
        logos: [
            "/assets/att.png",
            "/assets/app-logo.png",
            "/assets/cricket.png",
        ],
    },
    {
        title: "Recharge Your Phone",
        description: "Add balance to your current plan instantly.",
        icon: BadgeDollarSign,
        to: "/recharge",
        logos: [
            "/assets/simple-mobile.png",
            "/assets/Claro.png",
            "/assets/metro.png",
            "/assets/cubacel.png",
        ],
    },
    // {
    //     title: "Buy Virtual Cards",
    //     description: "Buy cards for your favorite services instantly.",
    //     icon: CreditCard,
    //     to: "/start-screen",
    //     logos: [
    //         "/assets/spotify.webp",
    //         "/assets/netflix.png",
    //         "/assets/hulu.webp",
    //     ],
    // },
];


export default function Home() {
    return (
        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col overflow-hidden">

            <header className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 shadow-md shadow-gray-200 shrink-0">

                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>

            </header>

            <section className="flex-1 min-h-0 overflow-y-auto px-4 py-4">

                <section className="px-3 py-4">

                    <div className="relative mx-auto h-52 w-full overflow-hidden rounded-2xl bg-(--primary-color)">

                        {/* Banner Content */}
                        <div className="relative z-10 flex h-full flex-col justify-center px-7">

                            <h2 className="max-w-82 text-[28px] font-semibold leading-[1.2] text-white">
                                Get Unlimited Plan
                                <br />
                                Starting at $30/mo
                            </h2>

                            {/* Features */}
                            <div className="mt-10 flex flex-wrap items-center gap-2 text-[14px] font-medium text-white">

                                <span>No Contact</span>

                                <span className="h-6 w-px bg-white/70" />

                                <span>Fast Activation</span>

                                <span className="h-6 w-px bg-white/70" />

                                <span>Top Network</span>

                            </div>

                        </div>


                        {/* Boy + Phone */}
                        <img
                            src="/assets/banner.png"
                            alt=""
                            className="absolute bottom-0 right-0 z-20 h-53 w-auto object-contain"
                        />

                    </div>

                </section>


                {/* ==================== SERVICES ==================== */}
                <section className="mt-4 space-y-3">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                to={service.to}
                                className="
                                    group
                                    grid
                                    min-h-29
                                    grid-cols-[76px_minmax(0,1fr)_45px]
                                    items-center
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white
                                    px-3
                                    py-3
                                    shadow-[0_5px_16px_rgba(0,0,0,0.08)]
                                    transition
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-lg
                                "
                            >

                                {/* Icon */}
                                <div className="flex h-full items-center justify-center border-r border-gray-200 pr-3">

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-(--primary-color) shadow-[0_5px_8px_rgba(185,0,0,0.25)]">

                                        <Icon
                                            strokeWidth={1.8}
                                            className="h-8 w-8 text-white"
                                        />

                                    </div>

                                </div>


                                {/* Text */}
                                <div className="min-w-0 px-4">

                                    <h2 className="text-[16px] font-bold text-gray-950">
                                        {service.title}
                                    </h2>

                                    <p className="mt-2 text-[11px] text-gray-600">
                                        {service.description}
                                    </p>

                                    {/* Logos — kept exactly from your original */}
                                    {/* 
                                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                        {service.logos.map((logo) => (
                                            <img
                                                key={logo}
                                                src={logo}
                                                alt=""
                                                className="max-h-8 max-w-16 object-contain"
                                            />
                                        ))}
                                    </div>
                                    */}

                                </div>


                                {/* Arrow */}
                                <div className="flex items-center justify-center">

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary-color) text-white shadow-md transition group-hover:translate-x-1">

                                        <ArrowRight
                                            strokeWidth={3}
                                            className="h-5 w-5"
                                        />

                                    </span>

                                </div>

                            </Link>
                        );

                    })}

                </section>

            </section>


            {/* ==================================================
                FIXED BOTTOM AREA — ALWAYS VISIBLE
            ================================================== */}
            <footer className="shrink-0 border-t border-gray-100 bg-white px-4 py-3">

                {/* ==================== PAYMENT LOGOS ==================== */}
                <div className="flex items-center justify-center gap-3 sm:gap-6">

                    <img
                        src="/assets/amex.png"
                        alt=""
                        className="h-7 w-auto"
                    />

                    <img
                        src="/assets/visa.png"
                        alt=""
                        className="h-7 w-auto"
                    />

                    <img
                        src="/assets/a-pay.png"
                        alt=""
                        className="h-7 w-auto"
                    />

                    <img
                        src="/assets/g-pay.png"
                        alt=""
                        className="h-7 w-auto"
                    />

                    <img
                        src="/assets/m-card.png"
                        alt=""
                        className="h-7 w-auto"
                    />

                </div>


                {/* ==================== DESKTOP FEATURES ==================== */}
                <section className="hidden md:block mt-4 rounded-xl border border-gray-300 px-4 py-4 shadow-xl">

                    <div className="grid grid-cols-4 items-center divide-x divide-gray-300">

                        {/* Take less */}
                        <div className="flex items-center justify-center gap-2">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary-color)">
                                <Zap className="h-5 w-5 text-white" />
                            </div>

                            <h3 className="text-xs font-semibold">
                                Take less
                            </h3>

                        </div>


                        {/* Secure */}
                        <div className="flex items-center justify-center gap-2">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary-color)">
                                <ShieldCheck className="h-5 w-5 text-white" />
                            </div>

                            <h3 className="text-xs font-semibold">
                                Secure
                            </h3>

                        </div>


                        {/* Carrier */}
                        <div className="flex items-center justify-center gap-2">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary-color)">
                                <RadioTower className="h-5 w-5 text-white" />
                            </div>

                            <h3 className="text-xs font-semibold">
                                Carrier
                            </h3>

                        </div>


                        {/* Support */}
                        <div className="flex items-center justify-center gap-2">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary-color)">
                                <Headset className="h-5 w-5 text-white" />
                            </div>

                            <h3 className="text-xs font-semibold">
                                Support
                            </h3>

                        </div>

                    </div>

                </section>

            </footer>

        </main>
    );
}