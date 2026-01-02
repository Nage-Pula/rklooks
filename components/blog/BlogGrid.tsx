"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Youtube, ImageIcon, Star } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

type BlogType = "instagram" | "youtube" | "image" | "testimonial" | "facebook";

function getIcon(type: BlogType) {
    switch (type) {
        case "instagram":
            return <Instagram size={20} />;
        case "youtube":
            return <Youtube size={20} />;
        case "testimonial":
            return <Star size={20} />;
        case "image":
        default:
            return <ImageIcon size={20} />;
    }
}

export default function BlogGrid() {
    return (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, i) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* 
            Rule:
            - image → internal blog detail page
            - links (insta / yt / fb) → open external
          */}
                    {post.type === "image" ? (
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                        >
                            <CardContent post={post} />
                        </Link>
                    ) : (
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                        >
                            <CardContent post={post} />
                        </a>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

/* -------------------------------
   Card content (shared)
-------------------------------- */
function CardContent({ post }: { post: (typeof blogPosts)[number] }) {
    return (
        <>
            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_60%)]" />
            {post.preview && (
                <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                        src={post.preview}
                        alt={post.title}
                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}

            {/* icon */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                {getIcon(post.type as BlogType)}
            </div>

            <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-900">
                {post.title}
            </h3>

            <p className="relative z-10 mt-2 text-sm text-slate-600">
                Click to view
            </p>

            <span className="relative z-10 mt-4 block h-1 w-0 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 group-hover:w-24" />
        </>
    );
}

