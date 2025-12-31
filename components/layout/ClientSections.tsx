"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/ui/Loader";

const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
    loading: () => <Loader />,
    ssr: false,
});

const Location = dynamic(() => import("@/components/sections/Location"), {
    loading: () => <Loader />,
    ssr: false,
});

export default function ClientSections() {
    return (
        <>
            <Gallery />
            <Location />
        </>
    );
}
