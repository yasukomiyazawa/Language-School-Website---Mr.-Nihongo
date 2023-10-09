import { PageHeaderProps } from "@/types";
import React from "react";

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="bg-red-800 flex justify-center items-center h-20">
      <h1 className="text-white font-semibold text-5xl">{title}</h1>
    </div>
  );
};

export default PageHeader;
