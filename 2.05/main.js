const svg = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",400);

const circle = svg.append('circle')
    .attr("cx",100)
    .attr("cy",100)
    .attr("r",100)
    .attr("fill","red");

const rect = svg.append('rect')
    .attr("x",230)
    .attr("y",75)
    .attr("width",50)
    .attr("height",50)
    .attr("fill","#fffc4f")
    .attr("stroke",'#ffcd4f')
    .attr("stroke-width",5)
    .attr('class','animate-coin');

const polygon = svg.append('polygon')
    .attr("points","100,100 200,50 200,150")
    .attr("fill","white")
    .attr('class','animate-mouth');


const elipse = svg.append('ellipse')
    .attr("cx",100)
    .attr("cy",50)
    .attr("rx",10)
    .attr("ry",20)
    .attr("fill","yellow")
    .attr('class','animate-coin');
