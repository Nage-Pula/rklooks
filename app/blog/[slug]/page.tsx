import { blogPosts } from "@/data/blogPosts";

export default function BlogDetail({
    params,
}: {
    params: { slug: string };
}) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) return null;

    return (
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="section-inner max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {post.title}
                </h1>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
                    {/* embed logic here */}
                </div>
            </div>
        </section>
    );
}
