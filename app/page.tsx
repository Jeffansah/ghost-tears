import prisma from "@/lib/prisma";
import { UserButton } from "@clerk/nextjs";
import GhostLoadingAnimation from "./components/ghost-loading-animation";

const page = async () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <GhostLoadingAnimation />
      </div>
    </div>
  );
};

export default page;
