import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
    return (
        <section className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/40 to-white">
            <div className="section-inner">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        From Our Chair ✂️
                    </h1>
                    <p className="mt-3 text-slate-600">
                        Real work, transformations, testimonials & styles from RK Looks
                    </p>
                </div>

                <BlogGrid />
            </div>
        </section>
    );
}
