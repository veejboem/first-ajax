$(document).ready(function () {
  $('#step12 > button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    })
  });
  $('#step3456 > button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData) {
      $('#step3456').append('Wow what a ride! I came all the way from the server!');
    });
  });
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).fail(function () {
      $('#step3456').append("Sorry, the /pong page isn't loading now. Try again soon!");
    });
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'
  }).always(function () {
    console.log('Hey the request is finished');
  });
});
