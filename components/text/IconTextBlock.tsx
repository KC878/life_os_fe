import React, { ElementType } from "react";
import type { LucideIcon } from "lucide-react";

interface IconTextBlockProps {
  icon: LucideIcon | ElementType;
  descOne: string;
  descTwo: string;
  className?: string;
  textSize?: "1xl" | "2xl" | "3xl" | "4xl";
  iconSize?: number;
  iconColor?: string;
  bg?: string;
}
const IconTextBlock: React.FC<IconTextBlockProps> = ({
  icon: IconComponent,
  descOne,
  descTwo,
  className,
  textSize = "1xl",
  iconSize = 30,
  iconColor = "orange",
  bg = "gray-300",
}) => {
  return (
    <div
      className={`flex items-center mt-2 justify-center gap-2 p-4 rounded-sm bg-${bg} ${className}`}
    >
      <IconComponent size={iconSize} color={iconColor} />
      <div className={`flex flex-col items-start text-${textSize}`}>
        <p>{descOne}</p>
        <p>{descTwo}</p>
      </div>
    </div>
  );
};

export default IconTextBlock;
