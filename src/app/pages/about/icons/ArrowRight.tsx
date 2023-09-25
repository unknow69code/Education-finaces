const ArrowRight: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-6 w-6 group-hover:text-[#79ad34]"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
        />
      </svg>
    );
  };
  
  export default ArrowRight;