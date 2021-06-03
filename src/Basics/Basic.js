import React from 'react';
import * as d3 from 'd3';
import './Basic.css';


const Basic = () => {

  const width = "960";
  const height = "500";
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeOffsetX = 90;
  const eyeOffsetY = 90;
  const mouthRadius = 140;
  const mouthWidth = 20;

  
const mouthArc = d3.arc()
.innerRadius(mouthRadius)
.outerRadius(mouthRadius + mouthWidth)
.startAngle(Math.PI / 2)
.endAngle(Math.PI * 3 / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        r="245"
        fill="yellow"
        stroke="black"
        stroke-width="10"
      />
      <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r="50"
      />
      <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r="50"
      />
      <path d={mouthArc()} />
      </g>
    </svg>
  )
};

export default Basic;
