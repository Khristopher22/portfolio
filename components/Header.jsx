"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 text-white ${isScrolled ? "py-7 bg-[#121212]/80 backdrop-blur-sm" : "py-8 xl:py-12"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {isMounted && (
                    <>
                        <Link href="#home">
                            <h1 className="text-4xl font-semibold">
                                Khristopher <span className="text-accent">.</span>
                            </h1>
                        </Link>

                        <div className="hidden xl:flex items-center gap-8">
                            <Nav />
                            <Link href="#contact">
                                <Button>Contrate-me</Button>
                            </Link>
                        </div>
                    </>
                )}

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;