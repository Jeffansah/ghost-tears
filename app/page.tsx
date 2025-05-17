import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <UserButton />
      </div>
    </div>
  );
};

export default page;
