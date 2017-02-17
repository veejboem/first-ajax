$(document).ready(function () {
  $('#step12 > button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    })
  });
});
