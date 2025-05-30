"use client";
import { NavBar } from "@/components/NavBar/NavBar";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CharityList } from "@/components/CharityList/CharityList";
import { roboto } from "@/lib/fonts";
import Charities from "@/constants/Charities";
import { useState } from "react";

export default function Home() {
    const [charities, setCharities] = useState(Charities);
    return (
        <div className={roboto.className}>
            <header>
                <NavBar charities={charities} setCharities={setCharities} />

                <Header />
            </header>

            <main>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="py-24">
                        <h1
                            className="
                text-center text-3xl font-bold tracking-tight sm:text-4xl
                text-primary
              "
                        >
                            Featured Charities
                        </h1>
                        <p
                            className="
                mt-6 text-lg leading-8 text-primary
                text-center
              "
                        >
                            These are some of the most important charities in
                            the world. They need your help to make a difference.
                        </p>
                    </div>
                    <CharityList
                        charities={charities}
                        setCharities={setCharities}
                    />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
