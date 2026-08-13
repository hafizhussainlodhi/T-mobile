import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./Pages/Home";
import Layout from "./Layout";
import StartS from "./Pages/StarterS";
import CheckComp from "./Pages/CheckComp";
import Plan from "./Pages/Plan";
import Info from "./Pages/Info";
import Term from "./Pages/Term";
import Review from "./Pages/Review";
import Request from "./Pages/Request";
import Receipt from "./Pages/Receipt";
import Success from "./Pages/Success";
import Retry from "./Pages/Retry";
import Recharge from "./Pages/Recharge";
import AddInfo from "./Pages/AddInfo";
import RTerm from "./Pages/RTerm";
import RReview from "./Pages/RReview";

import GoogleTranslate from "./components/GoogleTranslate";
import LanguageSync from "./components/LanguageSync";

function App() {
    const location = useLocation();

    return (
        <>
            <ScrollToTop />

            <GoogleTranslate />
            <LanguageSync />

            <main>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route element={<Layout />}>
                            {/* Home */}
                            <Route path="/:lang" element={<Home />} />

                            {/* Activation Flow */}
                            <Route path="/start-screen/:lang" element={<StartS />} />
                            <Route
                                path="/check-compatibility/:lang"
                                element={<CheckComp />}
                            />
                            <Route path="/plan/:lang" element={<Plan />} />
                            <Route path="/information/:lang" element={<Info />} />
                            <Route path="/term/:lang" element={<Term />} />
                            <Route path="/review/:lang" element={<Review />} />
                            <Route path="/request/:lang" element={<Request />} />
                            <Route path="/success/:lang" element={<Success />} />
                            <Route path="/retry/:lang" element={<Retry />} />
                            <Route path="/receipt/:lang" element={<Receipt />} />

                            {/* Recharge Flow */}
                            <Route path="/recharge/:lang" element={<Recharge />} />
                            <Route
                                path="/add-information/:lang"
                                element={<AddInfo />}
                            />
                            <Route path="/r-term/:lang" element={<RTerm />} />
                            <Route path="/r-review/:lang" element={<RReview />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;