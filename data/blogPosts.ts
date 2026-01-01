export type BlogPost = {
    id: string;
    title: string;
    type: "instagram" | "facebook" | "youtube" | "image" | "testimonial";
    url: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "బట్టతలతో భాద పడ్డ వ్యక్తి కి హేర్ పాచ్ వర్క్",
        type: "instagram",
        url: "https://www.instagram.com/p/DOjNsySAOLW/?igsh=ejhnZjM1Y3hnd2h6",
    },
    {
        id: "2",
        title: "A Smaple Patch Work Video",
        type: "youtube",
        url: "https://www.youtube.com/shorts/o5PF5eAeyZw",
    },
    {
        id: "3",
        title: "Modern Haircut Style",
        type: "youtube",
        url: "https://www.youtube.com/shorts/uBeBLg5oTRI",
    },
];
