$(document).ready(function() {
  window.dancers = [];
  window.distance = [];
  console.log(window.dancers);
  console.log(window.distance);
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancer.$node.attr("id", window.dancers.length)
    window.dancers.push({top: dancer.top, left: dancer.left}); 
  });

  $('.moveDancersToLeft').on('click', function() {
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    $('.dancer').animate({left: '100px'}, 1000, 'linear');
  });

  //Collision Checker
  /*
  check to see if either top and left values collide within a 200px block
   for both 200 positive and negative from the top and left
  */
  $('.checkProximity').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var distance = Math.sqrt((window.dancers[i].top ^ 2) + (window.dancers[i].left ^ 2));
      window.distance.push(distance);
    };
    
    var firstDistance = window.distance[0];
    for (var i = 1; i < window.distance.length; i++) {
      if (Math.abs(firstDistance - window.distance[i]) <= 100) {
        $(`#${i}`).top = window.top + 10;
        $(`#${i}`).top = window.dancers[i].left + 10;        
      }
    }
  });


});
