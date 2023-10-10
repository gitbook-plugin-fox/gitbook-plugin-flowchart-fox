require(["gitbook", "jquery"], function(gitbook, $) {
  gitbook.events.bind("page.change", function(e,config) {
    $('code.lang-flow').each(function(index, element) {
      var $element = $(element),
          code = $element.text(),
          chart;
	  var options = gitbook.state.config.pluginsConfig['flowchart'];  

      var wrapper = $("<div id='canvas"+index+"'></div>");
      $element.parent().replaceWith(wrapper);

      chart = flowchart.parse(code);
      chart.drawSVG('canvas'+index, options)
    });
  });
});
