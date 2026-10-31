// Site-wide settings. Edit these to rename the site or add/remove tabs.

export const SITE = {
    title: "Team 9: Muscle Fatigue Detector",
    // Short blurb shown under the title in the header.
    description:
        "An EMG sensor based detector for muscle fatigue targetted at improving safety while weight lifting, particularly a bicep curl.",
    // Team member names, shown in the header.
    team: ["Milo Ridenour, Bernardo Lin, Adi Bhagwani, James Lee"],
    // Repo linked from the header. Set to "" to hide the link.
    github: "https://github.com/uw-ece475-542-f26-t9",
};

// The tab the home page ("/") sends visitors to.
export const DEFAULT_CATEGORY = "proposal";

// Each entry here becomes a tab in the header, a content collection, and a
// folder under src/content/<id>/. Drop a .md or .mdx file into that folder and it
// shows up on the tab automatically.
//
// `sort`: 'date' lists newest first; 'order' uses the `order` frontmatter
// field (lowest first), which suits reference docs that have a reading order.
// `single`: the tab shows its one entry directly instead of a list of links.
export const CATEGORIES = [
    {
        id: "proposal",
        label: "Proposal",
        description: "Our project proposal.",
        sort: "order",
        single: true,
    },
    {
        id: "prd",
        label: "PRD",
        description: "Product requirements document.",
        sort: "order",
        single: true,
    },
    {
        id: "rapid-prototype",
        label: "Rapid Prototype",
        description:
            "Early prototype of device, hardware, and software layout.",
        sort: "order",
        single: true,
    },
    {
        id: "literature-survey",
        label: "Literature Survey",
        description: "Relevant papers and how they influence our project.",
        sort: "order",
        single: true,
    },
    {
        id: "notebooks",
        label: "Notebooks",
        description: "Week-by-week progress logs.",
        sort: "date",
        single: false,
    },
    {
        id: "additional-notes",
        label: "Additional Notes",
        description: "Notes and reports beyond the explict course scope.",
        sort: "date",
        single: false,
    },
] as const satisfies readonly {
    id: string;
    label: string;
    description: string;
    sort: "date" | "order";
    single: boolean;
}[];

export type CategoryId = (typeof CATEGORIES)[number]["id"];
