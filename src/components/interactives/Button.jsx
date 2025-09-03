import React from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Button({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  size,
  color = "bg-primary",
  animation = true,
}) {
  // Definindo tamanhos e estilos
  const sizeFeatures =
    size === "small"
      ? "rounded-[4px] px-[18px] py-[10px]"
      : "rounded-[8px] px-[30px] py-[16px]";

  const textClass =
    size === "small"
      ? "text-paragraph3 font-secondFont"
      : "text-paragraph4 font-secondFont";

  const gap = size === "small" ? "gap-[10px]" : "gap-[20px]";

  const Animation = animation ? MotionDivDownToUp : React.Fragment;

  // Se tiver buttonLink, renderiza <a>, senão <button>
  if (buttonLink) {
    return (
      <Animation>
        <a
          href={buttonLink}
          target="_blank"
          className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-darker hover:scale-110`}
        >
          <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
            {icon && <div>{icon}</div>}
            <p className={`flex items-center ${textClass}`}>{label}</p>
          </div>
        </a>
      </Animation>
    );
  }

  return (
    <Animation>
      <button
        onClick={onClick}
        className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-darker hover:scale-110`}
      >
        <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
          {icon && <div>{icon}</div>}
          <p className={`flex items-center ${textClass}`}>{label}</p>
        </div>
      </button>
    </Animation>
  );
}
