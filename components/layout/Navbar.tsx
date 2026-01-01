"use client";

import { useEffect, useState } from "react";
import {
    Menu,
    X,
    Scissors,
    Image as ImageIcon,
    BadgeIndianRupee,
    MapPin,
    Phone,
    Home,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Scissors },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "pricing", label: "Pricing", icon: BadgeIndianRupee },
    { id: "location", label: "Location", icon: MapPin },
    { id: "contact", label: "Contact", icon: Phone },
];



export default function Navbar() {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Elevation on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // const handleClick = (id: string) => {
    //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    //     setOpen(false);
    // };
    const handleClick = (id: string) => {
        setOpen(false);

        // If already on home, scroll
        if (pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home + section
            router.push(`/#${id}`);
        }
    };


    return (
        <header
            role="navigation"
            aria-label="Primary navigation"
            className={`fixed top-0 inset-x-0 z-50 transition-all bg-gradient-to-br from-amber-50 via-rose-50 to-white
        ${scrolled
                    ? "bg-white/90 backdrop-blur shadow-md"
                    : "bg-white/70 backdrop-blur"
                }
        border-b border-slate-200`}
        >
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                {/* Brand */}
                {/* <span className="font-semibold tracking-wide text-slate-900">
                    <span className="text-pink-600">RK</span>{" "}
                    <span className="text-slate-900">LOOKS</span>
                </span> */}

                <button
                    onClick={() => router.push("/")}
                    className="font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600"
                >
                    RK LOOKS
                </button>





                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => handleClick(id)}
                            className={`group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium transition
                ${active === id
                                    ? "text-amber-600"
                                    : "text-slate-700 hover:text-slate-900"
                                }
                focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500`}
                        >
                            <Icon
                                size={16}
                                className={`transition ${active === id
                                    ? "text-amber-600"
                                    : "text-slate-400 group-hover:text-slate-700"
                                    }`}
                            />
                            {label}
                            {active === id && (
                                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500" />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/95 backdrop-blur border-t border-slate-200">
                    <nav className="flex flex-col px-4 py-3 gap-2">
                        {navItems.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => handleClick(id)}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
                  ${active === id
                                        ? "bg-amber-50 text-amber-600"
                                        : "text-slate-700 hover:bg-slate-50"
                                    }`}
                            >
                                <Icon size={16} />
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
