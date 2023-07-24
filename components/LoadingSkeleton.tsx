import { IconSpinner } from "./icons";

const LoadingSkeleton = () => {
  return (
    <div className="h-96 flex items-center justify-center">
      <IconSpinner className="w-16 animate-spin" />
    </div>
  );
};
export default LoadingSkeleton;
