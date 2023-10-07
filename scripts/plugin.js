require(["gitbook", "jquery"], function(gitbook, $) {
  gitbook.events.bind("start", function(e,config) {
    $('code.lang-flow').each(function(index, element) {
      var $element = $(element),
          code = $element.text(),
          chart;
	  var options = config["flowchart"];	  

      var wrapper = $("<div id='canvas"+index+"'></div>");
      $element.parent().replaceWith(wrapper);

      chart = flowchart.parse(code);
      chart.drawSVG('canvas'+index, options)
    });
  });
});
