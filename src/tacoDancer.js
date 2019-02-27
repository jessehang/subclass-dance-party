var makeTacoDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('dancer3');
    this.$node.append($('<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/48/taco_1f32e.png">'));
    //this.$node.addClass('dancer3');
    this.$node.on("mouseover",function() {
      // $('.dancer3').animate({left: '100px'}, 1000, 'linear');
      $('.dancer3').addClass('jump');
    });
  };
  
makeTacoDancer.prototype = Object.create(makeDancer.prototype);
makeTacoDancer.prototype.constructor = makeTacoDancer;

makeTacoDancer.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  this.$node.toggle();
};