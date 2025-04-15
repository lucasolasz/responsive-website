import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function ButtonAnalytics({ children }: ButtonProps) {
  return (
    <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto bg-black cursor-pointer md:mx-0">
      {children}
    </button>
  );
}
