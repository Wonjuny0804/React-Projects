import { useEffect, useRef } from 'react'
import * as d3 from 'd3';

const index = [
  "2020-01-01",
  "2020-02-01",
  "2020-03-01",
  "2020-04-01",
  "2020-05-01",
  "2020-06-01",
  "2020-07-01",
  "2020-08-01",
  "2020-09-01",
  "2020-10-01",
  "2020-11-01",
  "2020-12-01",
  "2021-01-01",
  "2021-02-01"
];
const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const HeatMap = () => {

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current); 

    // Lables of row and columns
    let years = index;
    for (let i = 1; i <= 14; i++) 
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default HeatMap;
