'use strict';


$('.courses-anchor').click(function(event) {
  $(event.currentTarget).siblings('.courses-nav').toggleClass('hidden')
  console.log(event.currentTarget)
})
