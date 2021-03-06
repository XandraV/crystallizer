import React, { FC } from "react";

type SmallCircleProps = {
  colors: Array<string>;
  label: string;
  svgHeight: number;
};
export const SystemText: FC<SmallCircleProps> = ({
  colors,
  label,
  svgHeight,
}) => {
  const dark = colors[0];
  const light = colors[1];
  return (
    <g transform={`translate(120,${svgHeight / 2 + 190})`}>
      <line y2="20" stroke={light} strokeWidth={3}></line>
      <circle
        cx={0}
        cy={20}
        r={5}
        fill={dark}
        style={{ stroke: light, strokeWidth: 3 }}
      ></circle>
      <text
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          textAnchor: "middle",
          fill: "#ac99cc",
          transform: "translateY(2.5rem)",
        }}
      >
        {label}
      </text>
      <text
        style={{
          fontSize: "0.7rem",
          textAnchor: "middle",
          fill: "#ac99cc",
          fontWeight: "bold",
          transform: "translateY(3.5rem)",
        }}
      >
        crystal structure
      </text>
    </g>
  );
};

export const HardnessText: FC<SmallCircleProps> = ({
  colors,
  label,
  svgHeight,
}) => {
  const dark = colors[0];
  const light = colors[1];
  return (
    <g transform={`translate(100,${svgHeight / 2})`}>
      <line x2="20" stroke={dark} strokeWidth={3}></line>
      <circle
        cx={20}
        cy={0}
        r={5}
        fill={light}
        style={{ stroke: dark, strokeWidth: 3 }}
      ></circle>
      <text
        style={{
          fontSize: "0.7rem",
          textAnchor: "middle",
          fill: "#ac99cc",
          fontWeight: "bold",
          transform: "translate(4rem, 0)",
        }}
      >
        Hardness
      </text>
      <text
        style={{
          fontSize: "0.7rem",
          textAnchor: "middle",
          fill: "#ac99cc",
          fontWeight: "bold",
          transform: "translate(3.5rem, 1rem)",
        }}
      >
        {label}
      </text>
    </g>
  );
};

export const ColorText: FC<SmallCircleProps> = ({
  colors,
  label,
  svgHeight,
}) => {
  const dark = colors[0];
  const light = colors[1];
  return (
    <g transform={`translate(0,${svgHeight / 2 - 100})`}>
      <line y2="-30" stroke={light} strokeWidth={3}></line>
      <circle
        cx={0}
        cy={-30}
        r={5}
        fill={dark}
        style={{ stroke: light, strokeWidth: 3 }}
      ></circle>
      <text
        style={{
          fontSize: "0.8rem",
          textAnchor: "middle",
          fill: "#ac99cc",
          fontWeight: "bold",
          transform: "translateY(-3rem)",
        }}
      >
        {label}
      </text>
    </g>
  );
};
