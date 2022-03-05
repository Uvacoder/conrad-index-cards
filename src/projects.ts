export interface Project {
    letter: string;
    description: string;
    github?: string;
    link?: string;
}

export const projectList: Project[] = [
    {
        letter: "s",
        description: "Display the song I'm currently listening to on Spotify",
        github: "https://github.com/cnrad/s",
    },
    {
        letter: "m",
        description: "Redirects to my PayPal, with a slug for specified amount",
        github: "https://github.com/cnrad/pay",
    },
    {
        letter: "t",
        description: "A miniature toolkit for (web) developers",
        github: "https://github.com/cnrad/tools",
    },
    {
        letter: "h",
        description: 'A "New Tab" page with many customizable features',
        github: "https://github.com/cnrad/h",
    },
    {
        letter: "d",
        description: "A little dashboard that tracks the stats of specified Discord, Github, and Twitter profiles",
    },
    {
        letter: "p",
        description: "Not a project, just my Polywork",
        link: "https://p.cnrad.dev",
    },
];