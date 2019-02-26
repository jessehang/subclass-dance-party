var makeTacoDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    // this.$node = $('<span class="dancer"></span>');
    this.$node.addClass('dancer3');
  };
  
makeTacoDancer.prototype = Object.create(makeDancer.prototype);
makeTacoDancer.prototype.constructor = makeTacoDancer;

makeTacoDancer.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  this.$node.toggle();
};