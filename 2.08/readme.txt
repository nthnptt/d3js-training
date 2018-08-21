
Activity: Your first visualization!

You now know how to load in data from another file with D3...

    d3.csv("path/to/file.csv").then(function(data){
        // code goes here
    });

You also know how to use D3 selectAll()  with the data, enter, and append methods to add multiple SVGs to the screen at once...

    var circles = d3.selectAll("circle")
        .data(data);
     
    circles.enter().append("circle")
        .attr("cx", "100")...

Using what you learned in the last two lectures, I want you to build this simple visualization:

    Use D3 to read in the data from the buildings.json  file into your main.js  file. Log the data out to your console, and take a look at the format of your array.
    Write a forEach() loop for your data array to convert the height values from strings to numbers.
    Add an SVG to the #chart-area  div in the index.html file. Give it a width of 500px and a height of 500px.
    Use a data join to add a rectangle for each building in the dataset to your SVG.
    Stagger the rectangles by their x-coordinates, and make their heights equal to the “height” values from your JSON file.



 
