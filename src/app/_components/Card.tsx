import Image, { StaticImageData } from "next/image";
import ButtonHero from "./buttonHero";
import React, { ReactNode } from "react";

type CardProps = {
  src: string | StaticImageData; // para suportar string ou import direto
  type: string;
  price: string;
  children: ReactNode;
  extraClassName: string;
};

export default function Card({
  src,
  type,
  price,
  children,
  extraClassName,
}: CardProps) {
  return (
    <div
      className={`w-full shadow-xl flex flex-col text-center p-4 rouded-lg hover:scale-105 duration-300 ${extraClassName}`}
    >
      <Image
        className="mx-auto my-4 mt-[-3rem] bg-transparent"
        src={src}
        alt="Single User"
        width={100}
        height={100}
      />
      <h1 className="font-bold text-2xl py-8">{type}</h1>
      <p className="font-bold text-4xl">{price}</p>
      <div className="font-medium">{children}</div>

      <ButtonHero>Start Trial </ButtonHero>
    </div>
  );
}
