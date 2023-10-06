import React from "react";
import { Bookmark } from "../types";
import FolderIcon from "./icons/FolderIcon";
import DeleteIcon from "./icons/DeleteIcon";

interface BookmarkProps {
    bookmark: Bookmark;
    onClick: () => void;
}

const BookmarkItemBar: React.FC<BookmarkProps> = ({ bookmark, onClick }) => {
    const url =
        bookmark.type === "folder"
            ? ""
            : `https://favicone.com/${bookmark.url
                  ?.replace("http://", "")
                  .replace("https://", "")
                  .replace("www.", "")}?s=18`;
    return (
        <div
            className="bookmark w-full h-10 rounded-lg bg-base-100 cursor-pointer px-2 flex justify-between items-center"
            onClick={onClick}
        >
            <div>
                {bookmark.type === "folder" ? (
                    <div className="bookmark-folder w-full h-full flex items-center gap-2">
                        <FolderIcon className="text-accent w-6 h-6" />
                        <div className="text-sm font-medium select-none flex-grow">
                            {bookmark.name}
                        </div>
                    </div>
                ) : (
                    <a
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bookmark-link w-full h-full flex items-center gap-2"
                    >
                        {/* <div className="text-7xl font-bold">{bookmark.name[0]}</div> */}
                        <img src={url} />
                        <div className="text-sm font-medium select-none">{bookmark.name}</div>
                    </a>
                )}
            </div>

            <div>
                <div className="tooltip" data-tip="Hello">
                    <button className="btn btn-sm btn-ghost text-error" onClick={() => alert("Hello")}>
                        <DeleteIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookmarkItemBar;
