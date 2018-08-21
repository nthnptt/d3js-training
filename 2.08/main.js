d3.json("data/building.json").then(function (data) {

    // convert string to number value
    data.forEach(function (e) {
        e.height = +e.height
    });

    // Define svg canvas
    let svg = d3.select('#chart-area').append('svg')
        .attr("width", 500)
        .attr("height", 500);


    let squares = svg.selectAll("rect").data(data);

    // Creates squares
    squares.enter()
        .append('rect')
            .attr('y',0)
            .attr('x',(d, i) => {
                return i*30 + 25
            })
            .attr('width',20)
            .attr('height', (d) => {
                return d.height
            })
            .attr('fill','#585858')

}).catch(function (e) {
    console.log(e);
})