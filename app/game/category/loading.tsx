import GhostLoadingAnimation from "@/app/components/ghost-loading-animation";

const loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <GhostLoadingAnimation />
    </div>
  );
};

export default loading;
