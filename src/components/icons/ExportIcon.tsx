const ExportIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
        >
            <path fill="currentColor" d="M11 16h2V7h3l-4-5l-4 5h3z" />
            <path
                fill="currentColor"
                d="M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"
            />
        </svg>
    );
};

export default ExportIcon;
