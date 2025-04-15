import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function ButtonHero({ children }: ButtonProps) {
  return (
    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black cursor-pointer">
      {children}
    </button>
  );
}
