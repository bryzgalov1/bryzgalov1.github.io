const RADIUS_IN = 135;
const RADIUS_OUT = 280;
const RADIUS_CIRCLE = 13;
const SVG_WIDTH = 900;
const SVG_HEIGHT = 700;
const PI = Math.PI;
const getScaleOrdinalRing = (keys, radius, center) => {
    const keysLength = keys.length;
    const [centerX, centerY] = center;
    const range = keys.map((_, index) => {
        const item = index * Math.PI * 2 / keysLength;
        const x = centerX + radius * Math.sin(item);
        const y = centerY + radius * Math.cos(item);
        return [x, y, item];
    });
    const scaleOrdinalRing = d3.scaleOrdinal(keys, range);
    return scaleOrdinalRing;
};
const getTextAnchor = (item) => {
    let textAnchor = "middle";
    if (item > PI) {
        textAnchor = "end";
    }
    if (item > 0 && item < PI) {
        textAnchor = "start";
    }
    return {
        textAnchor,
    };
};
const getTextStyle = (item) => {
    let textAlign = "center";
    let position = "";
    let transform = "";
    let colored = "";
    if (item > PI) {
        textAlign = "right";
        position = "left: auto;top: auto;right: 0px;bottom: 0px;";
        transform = "transform: translateY(50%)";
    }
    if (item > 0 && item < PI) {
        textAlign = "left";
        position = "left: 0px;top: 0px;right: auto;bottom: auto;";
        transform = "transform: translateY(-50%)";
    }
    if (item == PI) {
        transform = "transform: translate(-50%, -50%)";
    }
    if (item == 0) {
        // colored = "color: red";
        transform = "transform: translate(-50%, -50%)";
    }
    return {
        textAlign,
        position,
        transform,
        colored,
    };
};
const getPathD = d3.line()
    .x((p) => p[0])
    .y((p) => p[1])
    .curve(d3.curveBumpX);
const clearPathLine = (svg) => {
    svg.selectAll("path").remove();
    svg.selectAll(".path-circle").remove();
};
const addPathLine = (svg, points, strokeColor, pathCircleColor, onEnd) => {
    const path = svg.insert("path", ":first-child")
        .attr("pointer-events", "none")
        .attr("d", getPathD(points))
        .attr("fill", "none")
        .attr("stroke", strokeColor)
        .attr("stroke-width", 2);
    const length = path.node().getTotalLength();
    path.attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .duration(500)
        .on("end", onEnd);
    const [start, end] = points;
    const [startX, startY] = start;
    const [endX, endY] = end;
    const [pathCircleColorStart, pathCircleColorEnd] = pathCircleColor;
    svg.append("circle")
        .attr("class", "path-circle")
        .attr("pointer-events", "none")
        .attr("r", RADIUS_CIRCLE + 5)
        .attr("cx", startX)
        .attr("cy", startY)
        .attr("fill", "#ffffff")
        .attr("stroke", pathCircleColorStart)
        .attr("stroke-width", 1);
    svg.append("circle")
        .attr("class", "path-circle")
        .attr("pointer-events", "none")
        .attr("r", RADIUS_CIRCLE)
        .attr("cx", startX)
        .attr("cy", startY)
        .attr("fill", pathCircleColorStart);
    svg.append("circle")
        .attr("class", "path-circle")
        .attr("pointer-events", "none")
        .attr("r", RADIUS_CIRCLE)
        .attr("cx", endX)
        .attr("cy", endY)
        .attr("fill", pathCircleColorEnd);
};
const getMultiLineText = (d, x) => {
    const item = d.split(' ');
    return item.reduce((acc, path) => {
        return acc + `<tspan x="${x}" dy="20">${path}</tspan>`;
    }, '');
};
function draw(d3, ringIn, ringOut) {
    const centerX = SVG_WIDTH / 2;
    const centerY = SVG_HEIGHT / 2;
    const domainRingIn = Object.keys(ringIn);
    const scaleDomainRingIn = getScaleOrdinalRing(domainRingIn, RADIUS_IN, [centerX, centerY]);
    const scaleDomainRingInText = getScaleOrdinalRing(domainRingIn, RADIUS_IN + 38, [centerX, centerY]);
    const domainRingOut = Object.keys(ringOut);
    const scaleDomainRingOut = getScaleOrdinalRing(domainRingOut, RADIUS_OUT, [centerX, centerY]);
    const scaleDomainRingOutText = getScaleOrdinalRing(domainRingOut, RADIUS_OUT + 30, [centerX, centerY]);
    const root = d3.create("div")
        .attr("class", "root")
        .attr("style", `width: ${SVG_WIDTH}px; height: ${SVG_HEIGHT}px;`);
    const svg = root.append("svg");
    svg.attr("width", SVG_WIDTH)
        .attr("height", SVG_HEIGHT)
        .attr("viewBox", [0, 0, SVG_WIDTH, SVG_HEIGHT]);
    root.append("div")
        .attr("class", "div-text")
        .selectAll()
        .data(domainRingIn)
        .join("div")
        .each(function (d) {
        const g = d3.select(this);
        const [cx, cy, itemText] = scaleDomainRingInText(d);
        const data = getTextStyle(itemText);
        g.attr("style", `position: absolute; left: ${cx}px; top: ${cy}px;`);
        const textDiv = g.append("div");
        textDiv.attr("style", `text-align: ${data.textAlign};${data.position};${data.transform};${data.colored}`);
        textDiv.text(d);
    });
    svg.append("circle")
        .attr("r", RADIUS_IN)
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("fill", "none")
        .attr("stroke", "#adadad")
        .attr("stroke-width", 3);
    svg.append("circle")
        .attr("r", RADIUS_OUT)
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("fill", "none")
        .attr("stroke", "#adadad")
        .attr("stroke-width", 3);
    svg.append("g")
        .selectAll()
        .data(domainRingIn)
        .join("g")
        .each(function (d) {
        const g = d3.select(this);
        const [cx, cy] = scaleDomainRingIn(d);
        g.append("circle")
            .attr("r", RADIUS_CIRCLE)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill", "#adadad")
            .on("click", (event) => {
            clearPathLine(svg);
            const ringData = ringIn[d];
            ringData.mainLinks.forEach((ddddd) => {
                const point = scaleDomainRingOut(ddddd);
                const points = [
                    [cx, cy],
                    point,
                ];
                addPathLine(svg, points, "#ff7a01", ["#00a272", "#ff7a01"]);
            });
            ringData.otherLinks.forEach((ddddd) => {
                const point = scaleDomainRingOut(ddddd);
                const points = [
                    [cx, cy],
                    point,
                ];
                addPathLine(svg, points, "#8f58b8", ["#00a272", "#ff7a01"]);
            });
        });
    });
    svg.append("g")
        .selectAll()
        .data(domainRingOut)
        .join("g")
        .each(function (d) {
        const g = d3.select(this);
        const [cx, cy] = scaleDomainRingOut(d);
        const [cxText, cyText, itemText] = scaleDomainRingOutText(d);
        const data = getTextAnchor(itemText);
        g.append("text")
            .attr("x", cxText)
            .attr("y", cyText)
            .attr("fill", "#afafaf")
            .text(d)
            .attr("text-anchor", data.textAnchor);
        g.append("circle")
            .attr("r", RADIUS_CIRCLE)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill", "#ffd4ac")
            .on("click", (event) => {
            clearPathLine(svg);
            const ringData = ringOut[d];
            ringData.mainLinks.forEach((ddddd) => {
                const point = scaleDomainRingIn(ddddd);
                const points = [
                    [cx, cy],
                    point,
                ];
                addPathLine(svg, points, "#ff7a01", ["#ff7a01", "#00a272"]);
            });
            ringData.otherLinks.forEach((ddddd) => {
                const point = scaleDomainRingIn(ddddd);
                const points = [
                    [cx, cy],
                    point,
                ];
                addPathLine(svg, points, "#8f58b8", ["#ff7a01", "#00a272"]);
            });
        });
    });
    return {
        svg: root.node(),
    };
}
