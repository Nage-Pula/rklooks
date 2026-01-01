import { Instagram, Star } from "lucide-react";

const posts = [
    {
        title: "Hair Patch Transformation",
        type: "Reel",
        tag: "Instagram",
    },
    {
        title: "Customer Testimonial",
        type: "Review",
        tag: "5 Star",
    },
    {
        title: "Modern Haircut Style",
        type: "Photo",
        tag: "Trending",
    },
];

export default function BlogPreview() {
    return (
        <section id="blog" className="section">
            <div className="section-inner">
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50/40 to-white px-6 py-16 shadow-lg">

                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900">
                        From Our Chair
                    </h2>
                    <p className="mt-3 text-center text-slate-600">
                        Real work. Real clients. Real stories.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, i) => (
                            <a
                                key={i}
                                href="https://blog.rklooks.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Instagram size={16} />
                                    {post.tag}
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                    {post.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-600">
                                    Tap to view on blog
                                </p>

                                <div className="mt-4 flex items-center gap-1 text-amber-500">
                                    <Star size={14} />
                                    <Star size={14} />
                                    <Star size={14} />
                                    <Star size={14} />
                                    <Star size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
