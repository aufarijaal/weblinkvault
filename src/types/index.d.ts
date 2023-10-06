export interface Bookmark {
    name: string;
    type: "folder" | "link";
    children?: Bookmark[]; // Recursive type for nested bookmarks
    url?: string; // Only for link type
}