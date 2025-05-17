import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-4xl font-bold">{children}</div>
    </div>
  );
};

export default layout;
