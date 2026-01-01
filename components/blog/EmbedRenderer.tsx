"use client";

type Props = {
    link: string;
};

export default function EmbedRenderer({ link }: Props) {
    // ---------- Instagram ----------
    if (link.includes("instagram.com")) {
        const embedUrl = link.endsWith("/")
            ? `${link}embed`
            : `${link}/embed`;

        return (
            <iframe
                src={embedUrl}
                className="w-full aspect-[9/16] rounded-xl border border-slate-200 shadow-sm"
                loading="lazy"
                allow="autoplay; encrypted-media"
            />
        );
    }

    // ---------- YouTube (video / shorts / youtu.be) ----------
    if (link.includes("youtube.com") || link.includes("youtu.be")) {
        let videoId: string | null = null;

        try {
            if (link.includes("youtu.be")) {
                videoId = link.split("/").pop() || null;
            } else if (link.includes("shorts")) {
                videoId = link.split("/shorts/")[1]?.split("?")[0] || null;
            } else {
                videoId = new URL(link).searchParams.get("v");
            }
        } catch {
            videoId = null;
        }

        if (videoId) {
            return (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="w-full aspect-video rounded-xl border border-slate-200 shadow-sm"
                    loading="lazy"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            );
        }
    }

    // ---------- Image (local or remote) ----------
    if (
        link.startsWith("/") ||
        link.endsWith(".jpg") ||
        link.endsWith(".jpeg") ||
        link.endsWith(".png") ||
        link.endsWith(".webp")
    ) {
        return (
            <img
                src={link}
                alt="RK Looks work"
                className="w-full rounded-xl object-cover border border-slate-200 shadow-sm"
                loading="lazy"
            />
        );
    }

    // ---------- Fallback ----------
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
        >
            View Original Post →
        </a>
    );
}
