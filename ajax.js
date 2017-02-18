$(document).ready(function () {
  $('button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData) {
      $('#step3456').append('Wow what a ride! I came all the way from the server!')
      console.log('Ajax is done loading the page!');
    }).fail(function () {
      $('#step3456').append("Sorry, the /pong page isn't loading now. Try again soon!")
      console.log('Hey! The request to load this page has failed');
    }).always(function () {
      console.log('Hey! The request is finished');
    })
  });
});
