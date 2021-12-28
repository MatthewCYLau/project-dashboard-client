import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = (props) => {
  const ref = useRef(null);
  const cache = useRef(props.data);
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeOranges[4]);
  const format = d3.format(".2f");

  useEffect(() => {
    const data = createPie(props.data);
    const prevData = createPie(cache.current);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    const arcTween = (d, i) => {
      const interpolator = d3.interpolate(prevData[i], d);

      return (t) => createArc(interpolator(t));
    };

    path
      .attr("class", "arc")
      .attr("fill", (d, i) => colors(i))
      .transition()
      .attrTween("d", arcTween);

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("fill", "black")
      .style("font-size", 10)
      .transition()
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .tween("text", (d, i, nodes) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return (t) => d3.select(nodes[i]).text(format(interpolator(t).value));
      });

    groupWithUpdate
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.label)
      .style("fill", "black")
      .style("font-size", 12)
      .attr("transform", (d) => {
        const [x, y] = createArc.centroid(d);
        return `translate(${x + 10}, ${y + 10})`;
      });

    cache.current = props.data;
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};

export default PieChart;
