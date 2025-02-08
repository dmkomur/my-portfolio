const SvgArrowLink: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            d="M11.532 1048.341H9.536v-9h-9v-2h11z"
            style={{
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            transform="rotate(45 1254.793 524.438)"
        />
    </svg>
);
export default SvgArrowLink;
