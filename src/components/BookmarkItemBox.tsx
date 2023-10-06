import React from "react";
import { Bookmark } from "../types";
import FolderIcon from "./icons/FolderIcon";

interface BookmarkProps {
    bookmark: Bookmark;
    onClick: () => void;
}

const BookmarkItemBox: React.FC<BookmarkProps> = ({ bookmark, onClick }) => {
    const url =
        bookmark.type === "folder"
            ? ""
            : `https://favicone.com/${bookmark.url
                  ?.replace("http://", "")
                  .replace("https://", "")
                  .replace("www.", "")}?s=32`;
    return (
        <div className="bookmark w-40 h-40 rounded-lg bg-base-100 active:scale-95 transition-transform cursor-pointer shadow-lg" onClick={onClick}>
            {bookmark.type === "folder" ? (
                <div className="bookmark-folder w-full h-full flex justify-center items-center flex-col gap-2">
                    <FolderIcon className="text-accent w-1/2 h-1/2" />
                    <div className="text-sm font-medium select-none">{bookmark.name}</div>
                </div>
            ) : (
                <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bookmark-link w-full h-full flex justify-center items-center flex-col gap-2"
                >
                    {/* <div className="text-7xl font-bold">{bookmark.name[0]}</div> */}
                    <img src={url} />
                    <div className="text-sm font-medium select-none">{bookmark.name}</div>
                </a>
            )}
        </div>
    );
};

export default BookmarkItemBox;
