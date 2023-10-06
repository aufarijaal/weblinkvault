import { useState } from "react";
import Navbar from "../components/Navbar";
import ExportIcon from "../components/icons/ExportIcon";
import ImportIcon from "../components/icons/ImportIcon";
import BookmarkItem from "../components/BookmarkItemBox";
import { Bookmark } from "../types";
import BackIcon from "../components/icons/BackIcon";
import FolderIcon from "../components/icons/FolderIcon";
import BookmarkItemBar from "../components/BookmarkItemBar";
import BookmarkItemBox from "../components/BookmarkItemBox";
import GridIcon from "../components/icons/GridIcon";
import ListIcon from "../components/icons/ListIcon";
import SortIcon from "../components/icons/SortIcon";
import LinkIcon from "../components/icons/LinkIcon";
// import ReactJson from "react-json-view";

const Dashboard = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([
        {
            name: "Favorites",
            type: "folder",
            children: [
                {
                    name: "Work",
                    type: "folder",
                    children: [
                        {
                            name: "Projects",
                            type: "folder",
                            children: [
                                {
                                    name: "Project A",
                                    type: "link",
                                    url: "https://www.example.com/projectA",
                                },
                                {
                                    name: "Project B",
                                    type: "link",
                                    url: "https://www.example.com/projectB",
                                },
                            ],
                        },
                        {
                            name: "Reports",
                            type: "link",
                            url: "https://www.example.com/reports",
                        },
                    ],
                },
                {
                    name: "Entertainment",
                    type: "folder",
                    children: [
                        {
                            name: "Videos",
                            type: "link",
                            url: "https://www.example.com/videos",
                        },
                        {
                            name: "Games",
                            type: "link",
                            url: "https://www.example.com/games",
                        },
                    ],
                },
                {
                    name: "News",
                    type: "link",
                    url: "https://www.example.com/news",
                },
            ],
        },
        {
            name: "Social",
            type: "folder",
            children: [
                {
                    name: "Facebook",
                    type: "link",
                    url: "https://www.facebook.com",
                },
                {
                    name: "Twitter",
                    type: "link",
                    url: "https://www.twitter.com",
                },
            ],
        },
        {
            name: "Search Engines",
            type: "folder",
            children: [
                {
                    name: "Google",
                    type: "link",
                    url: "https://www.google.com",
                },
                {
                    name: "Bing",
                    type: "link",
                    url: "https://www.bing.com",
                },
            ],
        },
        {
            name: "Facebook",
            type: "link",
            url: "https://www.facebook.com",
        },
        {
            name: "Twitter",
            type: "link",
            url: "https://www.twitter.com",
        },
    ]);

    const [historyStack, setHistoryStack] = useState<any[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const handleBookmarkItemClick = (item: any) => {
        if(item.type === "folder") {
            setHistoryStack([...historyStack, bookmarks]);
            setBookmarks(item.children);
        } else if(item.type === "link") {
            
        }
    }

    const handleGoBack = () => {
        if(historyStack.length > 0) {
            const previousFolder = historyStack.pop();
            setHistoryStack([...historyStack]);
            setBookmarks(previousFolder);
        }
    }

    return (
        <div id="dashboard-page" className="min-h-screen w-full">
            <Navbar />

            <section id="import-or-export" className="flex justify-center gap-10 py-10 px-5">
                <div className="import-action flex flex-col items-center gap-4">
                    <button className="btn btn-square btn-lg btn-info">
                        <ImportIcon />
                    </button>
                    Import
                </div>

                <div className="flex items-center font-bold text-lg">OR</div>

                <div className="export-action flex flex-col items-center gap-4">
                    <button className="btn btn-square btn-lg btn-success">
                        <ExportIcon />
                    </button>
                    Export
                </div>
            </section>

            <section id="bookmarks-display" className="px-5 max-w-7xl mx-auto">
                <div
                    id="bookmark-list-actions"
                    className="mb-2 flex items-center justify-between flex-wrap gap-2"
                >
                    <button id="bookmark-back" className="btn btn-sm btn-accent" onClick={handleGoBack} disabled={historyStack.length === 0}>
                        <BackIcon className="text-content" />
                        Back
                    </button>

                    <div className="flex gap-2">
                        <button
                            id="btn-view-mode"
                            className="btn btn-sm"
                            onClick={() =>
                                setViewMode((mode) => (mode = mode === "grid" ? "list" : "grid"))
                            }
                        >
                            {viewMode === "grid" ? (
                                <GridIcon className="text-warning" />
                            ) : (
                                <ListIcon className="text-success" />
                            )}
                            {viewMode === "grid" ? "Grid" : "List"}
                        </button>
                        <button className="btn btn-sm">
                            <SortIcon className="text-error" />
                            Asc
                        </button>
                        <button
                            className="btn btn-sm"
                            onClick={() =>
                                (document.getElementById(
                                    "add-link-modal",
                                ) as HTMLDialogElement)!.showModal()
                            }
                        >
                            <LinkIcon className="text-accent" />
                            Add Link
                        </button>
                        <button
                            className="btn btn-sm"
                            onClick={() =>
                                (document.getElementById(
                                    "add-folder-modal",
                                ) as HTMLDialogElement)!.showModal()
                            }
                        >
                            <FolderIcon className="text-info" />
                            Add Folder
                        </button>
                    </div>
                </div>
                <div
                    className={`card w-full bg-base-200 shadow-xl ${
                        viewMode === "list" ? "card-compact" : ""
                    }`}
                >
                    <div className="card-body">
                        <div
                            id="bookmark-list"
                            className={`flex flex-wrap justify-center ${
                                viewMode === "grid" ? "gap-5" : "gap-1"
                            }`}
                        >
                            {viewMode === "list"
                                ? bookmarks.map((bookmark) => {
                                      return <BookmarkItemBar bookmark={bookmark} onClick={() => handleBookmarkItemClick(bookmark)}/>;
                                  })
                                : bookmarks.map((bookmark) => {
                                      return <BookmarkItemBox bookmark={bookmark} onClick={() => handleBookmarkItemClick(bookmark)}/>;
                                  })}
                        </div>
                    </div>
                </div>
            </section>
            <AddFolderModal />
            <AddLinkModal />
        </div>
    );
};

const AddFolderModal: React.FC = () => {
    return (
        <dialog id="add-folder-modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add Folder</h3>

                <div className="modal-content mt-4">
                    <form method="post">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Folder name"
                            className="input input-bordered w-full"
                        />
                    </form>
                </div>

                <div className="modal-action">
                    <form method="dialog" className="flex gap-4">
                        <button className="btn btn-ghost btn-sm">Cancel</button>
                        <button className="btn btn-success btn-sm" type="button">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

const AddLinkModal: React.FC = () => {
    return (
        <dialog id="add-link-modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add Link</h3>

                <div className="modal-content mt-4">
                    <form method="post" className="flex flex-col gap-4">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Link name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="url"
                            placeholder="URL"
                            className="input input-bordered w-full"
                        />
                    </form>
                </div>

                <div className="modal-action">
                    <form method="dialog" className="flex gap-4">
                        <button className="btn btn-ghost btn-sm">Cancel</button>
                        <button className="btn btn-success btn-sm" type="button">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Dashboard;
