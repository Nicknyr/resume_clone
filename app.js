
  var bar = new ProgressBar.Circle(container, {
    color: '#0088CC',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0088CC', width: 1 },
    to: { color: '#0088CC', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';

  bar.animate(1.0);  // Number from 0.0 to 1.0

  //********************************************************************************


  var bar = new ProgressBar.Line(line, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#0088CC',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#0088CC'},
    to: {color: '#0088CC'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });

  var bar2 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0088CC',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0088CC'},
  to: {color: '#0088CC'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar3 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0088CC',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0088CC'},
  to: {color: '#0088CC'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar4 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0088CC',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0088CC'},
  to: {color: '#0088CC'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar5 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0088CC',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0088CC'},
  to: {color: '#0088CC'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var bar6 = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0088CC',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0088CC'},
  to: {color: '#0088CC'},
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
