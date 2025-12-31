"use client";

import { useEffect, useState } from "react";
import CrawlLogo from "./CrawlLogo";
import CrawlWordmark from "./CrawlWordmark";

type Props = {
    enabled?: boolean;
    variant?: "logo" | "wordmark";
    monochrome?: boolean;
};

export default function AttributionBar({
    enabled = true,
    variant = "logo",
    monochrome = false,
}: Props) {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (!enabled) return;

        const onScroll = () => {
            const y = window.scrollY;
            if (y > lastScrollY && y > 80) setVisible(false);
            else setVisible(true);
            setLastScrollY(y);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY, enabled]);

    if (!enabled) return null;

    return (
        <footer
            className={`fixed bottom-0 left-0 z-50 w-full transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"
                } bg-gray-950/90 backdrop-blur`}
        >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-center justify-center gap-2 px-4 py-2 text-xs text-gray-400">
                <span>Designed & Developed by</span>

                <span className="relative inline-flex items-center gap-1 font-semibold">
                    <span
                        className={`flex items-center gap-1 ${monochrome
                                ? "text-white"
                                : "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400"
                            }`}
                    >
                        CrawL-UP
                        {variant === "logo" ? (
                            <CrawlLogo monochrome={monochrome} />
                        ) : (
                            <CrawlWordmark />
                        )}
                        Digitals
                    </span>

                    <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-sm opacity-70" />
                </span>
            </div>
        </footer>
    );
}
