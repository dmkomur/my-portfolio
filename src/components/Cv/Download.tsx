const SvgDownload: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h4m1.5-18L19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19m0 0v3.188M17.5 15v6m0 0L15 18.5m2.5 2.5 2.5-2.5"
        />
    </svg>
);
export default SvgDownload;
