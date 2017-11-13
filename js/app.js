
  var bar = new ProgressBar.Circle(container, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Design');

  /*    var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  */

    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '1rem';
  bar.text.style.fontWeight = 'bolder';
  bar.text.style.color= 'black';

  bar.animate(1.0);  // Number from 0.0 to 1.0


  var bar2 = new ProgressBar.Circle(container2, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Concepts');

    }
  });

  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar2.text.style.fontSize = '1rem';
  bar2.text.style.fontWeight = 'bolder';
  bar2.text.style.color= 'black';

  bar2.animate(0.9);


  var bar3 = new ProgressBar.Circle(container3, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Art Direction');

    }
  });

  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar3.text.style.fontSize = '1rem';
  bar3.text.style.fontWeight = 'bolder';
  bar3.text.style.color= 'black';
  bar3.text.style.textAlign = 'center';

  bar3.animate(0.8);


  var bar4 = new ProgressBar.Circle(container4, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Teamwork');

    }
  });

  bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar4.text.style.fontSize = '1rem';
  bar4.text.style.fontWeight = 'bolder';
  bar4.text.style.color= 'black';

  bar4.animate(0.7);


  var bar5 = new ProgressBar.Circle(container5, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Management');
    }
  });

  bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar5.text.style.fontSize = '1rem';
  bar5.text.style.fontWeight = 'bolder';
  bar5.text.style.color= 'black';

  bar5.animate(0.6);





  //********************************************************************************


  var bar = new ProgressBar.Line(line, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#0AA1DA',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#0AA1DA'},
    to: {color: '#0AA1DA'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });

  var bar2 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar3 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar4 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar5 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar6 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});


bar.animate(1.0);
bar2.animate(0.9);
bar3.animate(0.8);
bar4.animate(0.7);
bar5.animate(0.6);
bar6.animate(0.5);
