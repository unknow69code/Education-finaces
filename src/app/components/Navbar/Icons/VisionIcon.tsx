const VisionIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        viewBox="0 0 1000 1000"
        fill="currentColor"
        className="h-6 w-6 text-gray-600 group-hover:text-[#79ad34]"
        {...props}
      >
        <path d="M500 220c61.333 0 120.333 8.333 177 25s103.667 37.333 141 62 70.333 50.333 99 77 49.667 50.333 63 71c13.333 20.667 20 35.667 20 45 0 9.333-6.667 24-20 44s-34.333 43.667-63 71-61.667 53.333-99 78-84.333 45.333-141 62-115.667 25-177 25-120.333-8.333-177-25-103.667-37.333-141-62-70.333-50.667-99-78-49.667-51-63-71C6.667 524 0 509.333 0 500c0-9.333 6.667-24.333 20-45s34.333-44.333 63-71 61.667-52.333 99-77 84.333-45.333 141-62 115.667-25 177-25m0 494c61.333 0 113.667-21 157-63s65-92.333 65-151c0-60-21.667-111-65-153s-95.667-63-157-63-113.667 21-157 63-65 93-65 153c0 58.667 21.667 109 65 151s95.667 63 157 63m0-214c5.333 5.333 17.667 6 37 2s36-7.667 50-11 22.333-.333 25 9c0 29.333-11 54.333-33 75s-48.333 31-79 31-56.667-10.333-78-31-32-45.667-32-75c0-30.667 10.667-56.333 32-77s47.333-31 78-31c9.333 0 12.667 7.667 10 23s-6.667 31-12 47-4.667 28.667 2 38" />
      </svg>
    );
  };
  
  export default VisionIcon;