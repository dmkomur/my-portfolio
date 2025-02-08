const SvgMail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="#e6f6f6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 17h5m-2.5-2.5v5M12 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2V11m-.393-2.738-5.057 3.371c-1.283.856-1.925 1.284-2.618 1.45a4.001 4.001 0 0 1-1.864 0c-.694-.167-1.335-.594-2.618-1.45L3.147 8.1"
        />
    </svg>
);
export default SvgMail;
