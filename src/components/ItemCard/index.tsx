"use client";

import { motion } from "motion/react";
import Image from "next/image";

type ItemCardProps = {
  children: React.ReactNode;
};

const ItemCard = ({ children }: ItemCardProps) => {
  return (
    <motion.div
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="bg-[#a6a6a623] rounded-lg overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

ItemCard.ImageHeader = function ImageHeader({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={[className, "w-full h-[250px] object-cover"].join(" ")}
    />
  );
};

ItemCard.Title = function Title({ children }: ItemCardProps) {
  return (
    <h3 className="text-white text-lg font-poppins font-semibold mb-2.5">
      {children}
    </h3>
  );
};

ItemCard.Body = function Body({ children }: ItemCardProps) {
  return <div className="p-3">{children}</div>;
};

ItemCard.Footer = function Footer({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2.5 flex-wrap mt-5">{children}</div>;
};

export default ItemCard;
