export default function BlogDetail({ params }: { params: { slug: string } }) {
    return (
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="section-inner max-w-3xl">
                <h1 className="text-3xl font-extrabold text-slate-900 capitalize">
                    {params.slug.replaceAll("-", " ")}
                </h1>

                <p className="mt-4 text-slate-600">
                    This page will showcase images, reels, testimonials, ratings,
                    comments, and real work done at RK Looks.
                </p>

                <p className="mt-6 text-sm text-slate-500">
                    🚧 Content will be synced from Instagram / manual uploads.
                </p>
            </div>
        </section>
    );
}
