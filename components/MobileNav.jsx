"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
    { name: "home", path: "#home" },
    { name: "services", path: "#services" },
    { name: "work", path: "#work" },
    { name: "resume", path: "#resume" },
    { name: "contact", path: "#contact" },
];

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); // Fecha o menu após clique
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <SheetDescription className="sr-only">Navegue pelo site</SheetDescription>

                <div className="mt-20 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Khristopher <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            onClick={handleLinkClick}
                            className="text-xl capitalize hover:text-accent transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;