const LogInIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        viewBox="0 0 900 1000"
        fill="currentColor"
        className="h-6 w-6 group-hover:text-[#79ad34]"
        {...props}
      >
        <path d="M800 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H350c-26.667 0-49.667-10-69-30s-29-43.333-29-70V750h98v100h450V150H350v150h-98V150c0-28 9.667-51.667 29-71s42.333-29 69-29h450M450 720V600H0V450h450V330l200 194-200 196" />
      </svg>
    );
  };
  
  export default LogInIcon;