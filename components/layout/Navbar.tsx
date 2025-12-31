"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "pricing", label: "Pricing" },
    { id: "location", label: "Location" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

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

    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header
            role="navigation"
            aria-label="Primary navigation"
            className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b"
        >

            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                {/* Brand */}
                <span className="font-bold text-slate-900">
                    RK Looks
                </span>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${active === item.id
                                ? "text-amber-600"
                                : "text-slate-700 hover:text-slate-900"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >

                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col px-4 py-3 gap-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item.id)}
                                className={`text-left text-sm font-medium ${active === item.id
                                    ? "text-amber-600"
                                    : "text-slate-700"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
