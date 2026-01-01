"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Youtube, ImageIcon, Star } from "lucide-react";
import { blogPosts } from "../../data/blogPosts";

function getIcon(type: string) {
    switch (type) {
        case "instagram":
            return <Instagram />;
        case "youtube":
            return <Youtube />;
        case "image":
            return <ImageIcon />;
        case "testimonial":
            return <Star />;
        default:
            return <ImageIcon />;
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
                    <a
                        href={post.type === "image" ? `/blog/${post.id}` : post.url}
                        target={post.type !== "image" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                    >
                        {/* glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_60%)]" />

                        {/* icon */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                            {getIcon(post.type)}
                        </div>

                        <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-900">
                            {post.title}
                        </h3>

                        <p className="relative z-10 mt-2 text-sm text-slate-600">
                            Click to view
                        </p>

                        <span className="relative z-10 mt-4 block h-1 w-0 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 group-hover:w-24" />
                    </a>
                </motion.div>
            ))}
        </div>
    );
}

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Instagram, Star, PlayCircle } from "lucide-react";

// const posts = [
//     { slug: "hair-patch", title: "Hair Patch Transformation", type: "Reel" },
//     { slug: "testimonial", title: "Client Testimonial", type: "Review" },
//     { slug: "modern-cut", title: "Modern Haircut Style", type: "Photo" },
//     { slug: "bridal-look", title: "Bridal Grooming", type: "Photo" },
// ];

// export default function BlogGrid() {
//     return (
//         <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//             {posts.map((post, i) => (
//                 <motion.div
//                     key={post.slug}
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                     className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
//                 >
//                     <Link
//                         href={`/blog/${post.slug}`}
//                         className="group relative block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl"
//                     >
//                         {/* Glow border */}
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_60%)]" />

//                         {/* Icon */}
//                         <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
//                             {post.type === "Reel" && <PlayCircle />}
//                             {post.type === "Review" && <Star />}
//                             {post.type === "Photo" && <Instagram />}
//                         </div>

//                         <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-900">
//                             {post.title}
//                         </h3>

//                         <p className="relative z-10 mt-2 text-sm text-slate-600">
//                             Tap to explore
//                         </p>

//                         {/* Animated underline */}
//                         <span className="relative z-10 mt-4 block h-1 w-0 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 group-hover:w-24" />
//                     </Link>
//                 </motion.div>
//             ))}
//         </div>
//     );
// }
