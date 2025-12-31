export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="relative flex items-center justify-center">
                {/* Spinner */}
                <span className="absolute inline-block h-14 w-14 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
                {/* Brand */}
                <span className="z-10 bg-white px-3 text-lg font-extrabold tracking-wide text-slate-900">
                    RK LOOKS
                </span>
            </div>

            <p className="mt-4 text-sm text-slate-600">
                Loading…
            </p>
        </div>
    );
}
