import React from "react";

const FolderIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="currentColor"
                d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
            />
        </svg>
    );
};

export default FolderIcon;
