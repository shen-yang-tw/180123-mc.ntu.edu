$(document).ready(function() {
  //font resize
  $('.large>a').click(function() {
    $('.font_resize').removeClass('font_medium').addClass('font_large');
  });
  $('.medium>a').click(function() {
    $('.font_resize').removeClass('font_large').addClass('font_medium');
  });
  $('.small>a').click(function() {
    $('.font_resize').removeClass('font_large').removeClass('font_medium');
  });

  //#dropMenuR
  $('#dropMenuR .uk-button-dropdown[data-uk-dropdown]:not(:last-child)').on('show.uk.dropdown', function() {
    $("#dropMenuR").addClass("borderRadiusLRT");
  });
  $('#dropMenuR .uk-button-dropdown[data-uk-dropdown]').on('hide.uk.dropdown', function() {
    $("#dropMenuR").removeClass("borderRadiusLRT");
  });

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(".uk-overlay-panel").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

});

//load active tab from url - CANNOT placed in $(document).ready
UIkit.on('beforeready.uk.dom', function() {
  var hash = document.location.hash;
  if (hash) {
    UIkit.$(hash).addClass('uk-active');
  }
});

//c3.chart
var chart1 = c3.generate({
  bindto: '#chart1',
  data: {
    columns: [
      ['data1', 1030, 1200, 1100, 1400, 1150, 1250],
      ['data2', 2130, 2100, 2140, 2200, 2150, 1850]
      //['data1', 30, 200, 100, 400, 150, 250],
      //['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});
var chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});
var chart3 = c3.generate({
  bindto: '#chart3',
  data: {
    columns: [
      ['data1', 1030, 1200, 1100, 1400, 1150, 1250],
      ['data2', 2130, 2100, 2140, 2200, 2150, 1850]
      //['data1', 30, 200, 100, 400, 150, 250],
      //['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});
var chart4 = c3.generate({
  bindto: '#chart4',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});
var chart5 = c3.generate({
  bindto: '#chart5',
  data: {
    columns: [
      ['data1', 1030, 1200, 1100, 1400, 1150, 1250],
      ['data2', 2130, 2100, 2140, 2200, 2150, 1850]
      //['data1', 30, 200, 100, 400, 150, 250],
      //['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});
var chart6 = c3.generate({
  bindto: '#chart6',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function(d, element) { console.log("onclick", d, element); },
    onmouseover: function(d) { console.log("onmouseover", d); },
    onmouseout: function(d) { console.log("onmouseout", d); }
  },
  axis: {
    x: {
      type: 'categorized'
    }
  },
  bar: {
    width: {
      ratio: 0.3,
      //max: 30
    },
  },
  color: {
    pattern: ['#7aac2e', '#ff952f']
  }
});