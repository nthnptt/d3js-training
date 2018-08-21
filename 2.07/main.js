d3.csv("data/ages.csv").then(function (data) {
    console.log(data)
    data.forEach(function (d) {
        d.age = +d.age;
    })

    const svg = d3.select("#chart-area").append("svg")
        .attr("width",400)
        .attr("height",400);

    const circles = svg.selectAll("circle")
        .data(data)

    circles.enter()
        .append("circle")
            .attr("cx",  (d, i) => {
                return (i*50)+25
            })
            .attr("cy", 25)
            .attr("r",  (d) => {
                return d.age * 2
            })
            .attr('fill',(d) => {
                if (d.name === "Tony") {
                    return 'blue'
                }else{
                    return 'red'
                }
            })
}).catch(function (e) {
    console.log(e);
})