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
        url: "https://www.instagram.com/reel/DJKO7uOydS-/?igsh=MXR6dHZld3V3aW4xaw==",
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
    {
        id: "4",
        title: "Bridal Grooming",
        type: "instagram",
        url: "https://www.instagram.com/reel/DSEnWbIkqQO/?utm_source=ig_web_button_share_sheet"
    }
];