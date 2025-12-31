"use client";

import { useEffect, useState } from "react";

export default function CrawlLogo({
    monochrome = false,
}: {
    monochrome?: boolean;
}) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 ${monochrome ? "text-white" : "text-cyan-400"
                } ${animate ? "animate-crawl-in" : ""}`}
            fill="none"
        >
            <circle cx="16" cy="6" r="2" fill="currentColor" />
            <path
                d="M6 14c3-3 6-4 9-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M12 12l3 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M8 15l-2 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
