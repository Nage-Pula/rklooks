export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gray-950 text-gray-300">
            {/* Gradient Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                {/* Top */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                            CrawLUP <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">Digitals</span>
                        </h3>
                        <p className="mt-2 max-w-md text-sm text-gray-400">
                            Building brands that scale with clarity, performance, and intent.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            target="_blank"
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/5"
                            rel="noopener noreferrer"
                        >
                            Work With Us
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col gap-4 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} CrawLUP Digitals. All rights reserved.</p>
                    <p className="tracking-wide">
                        Designed & Engineered for Growth
                    </p>
                </div>
            </div>
        </footer>
    );
}
