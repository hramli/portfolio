import * as d3 from 'd3';
import ReactDOM from 'react-dom';

var FORCE = (function(nsp) {
    var
      width = 360,
      height = 328,
  
      initForce = (nodes, links) => {
        nsp.force = d3.forceSimulation(nodes)
          .force("charge", d3.forceManyBody().strength(-200))
          .force("link", d3.forceLink(links).distance(100))
          .force("center", d3.forceCenter().x(nsp.width / 2.5).y(nsp.height / 2))
          .force("collide", d3.forceCollide([5]).iterations([5]));
        
        setInterval(function(){nsp.force.alpha(0.6);},1000);
      },
  
      enterNode = (selection) => {
        selection.select('text')
          .style("fill", "white")
      },
  
      updateNode = (selection) => 
      {
        selection
          .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")
          .attr("cx", function(d) {
            return d.x = Math.max(30, Math.min(width - 30, d.x));
          })
          .attr("cy", function(d) {
            return d.y = Math.max(30, Math.min(height - 30, d.y));
          })
      },
  
      enterLink = (selection) => {
        selection
          .attr("stroke-width", 1)
      },
  
      updateLink = (selection) => {
        selection
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      },
  
      updateGraph = (selection) => {
        selection.selectAll('.node')
          .call(updateNode)
        selection.selectAll('.link')
          .call(updateLink);
      },
  
      dragStarted = (d) => {
        if (!d3.event.active) nsp.force.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y
      },
  
      dragging = (d) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y
      },
  
      dragEnded = (d) => {
        if (d.x < 0 || d.x > width || d.y < 0 || d.y > height)
            d.fixed = false;
        if (!d3.event.active) nsp.force.alphaTarget(0);
            d.fx = null;
            d.fy = null
        
      },
  
      drag = () => d3.selectAll('g.node')
      .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragging)
        .on("end", dragEnded)
      ),
  
      tick = (that) => {
        that.d3Graph = d3.select(ReactDOM.findDOMNode(that));
        nsp.force.on('tick', () => {
          that.d3Graph.call(updateGraph)
        });
      };
  
    nsp.width = width;
    nsp.height = height;
    nsp.enterNode = enterNode;
    nsp.updateNode = updateNode;
    nsp.enterLink = enterLink;
    nsp.updateLink = updateLink;
    nsp.updateGraph = updateGraph;
    nsp.initForce = initForce;
    nsp.dragStarted = dragStarted;
    nsp.dragging = dragging;
    nsp.dragEnded = dragEnded;
    nsp.drag = drag;
    nsp.tick = tick;
  
    return nsp
  
})(FORCE || {})

export default FORCE;