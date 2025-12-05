import React, { ElementType } from "react";
import type { LucideIcon } from "lucide-react";

interface TextIconProps {
  // Use ElementType or LucideIcon for component props
  icon?: LucideIcon | ElementType;
  text: string;
  className?: string;
  handleClick?: () => void;
}

const TextIcon: React.FC<TextIconProps> = ({
  icon: IconComponent, // Renaming prop to "IconComponent" (capitalized)
  text,
  className,
  handleClick,
}) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      onClick={handleClick}
    >
      {/* 
        1. Check if IconComponent exists.
        2. Render it using JSX: <IconComponent /> 
           This is crucial for React to treat it as a component, not a string/element.
      */}
      {IconComponent && (
        <IconComponent className="h-4 w-4" /> // Added default size/style for Lucide icons
      )}

      <span>{text}</span>
    </div>
  );
};

export default TextIcon;
