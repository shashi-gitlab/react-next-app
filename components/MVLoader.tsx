import { Loader2 } from "lucide-react";

type MVLoaderProps = {
  text?: string;
  fullScreen?: boolean;
};

const MVLoader = ({
  text = "Loading...",
  fullScreen = false,
}: MVLoaderProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${
        fullScreen ? "min-h-screen" : "py-10"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 text-purple bg-white px-4 py-3">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
};

export default MVLoader;