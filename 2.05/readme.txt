Activity: Adding SVGs to the screen

Recall that you can select elements on the page with D3 select...

d3.select("#css-selector")

Then you can add elements onto a selection with the D3 append method...

    d3.select("#css-selector")
        .append("circle")

And you can use the Attr method to set attributes of these elements...

    d3.select("#css-selector")
        .append("circle")
            .attr("cx", 100)

Now it’s time to try adding your own SVGs to the page. Using what you learned in the previous lecture:

     Add an SVG canvas with a width  of 500px and a height  of 400px to the screen.
     Add some SVG shapes to the canvas. Try adding a line, a rectangle, and an ellipse to the screen. Make sure that none of these shapes overlap, and that they all stay inside the canvas.
    Play around with the color, size and position of the shapes. Make sure you understand how the SVGs are working.

Use the template folder attached to this activity to get started. You'll need to unzip this file to start coding with it.