$(document).ready(function () {
  $('#step12 button').on('click', function (){
   $.ajax({
    method: 'GET',
    url: 'http://first-ajax-api.herokuapp.com/',
    dataType:''
    });
  });
  $('#step3456 button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (data) {
      console.log(data);
      console.log('Ajax is done loading the page');
      $('#step3456').append(data);
    }).fail(function (data) {
      $('#step345').append(data);
      console.log('Hey! The request to load this page has failed');
    }).always(function (data) {
      console.log('The request is finished');
    })
  });
  $('#step7 button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function (data) {
      console.log(data);
      $('#step7').append(data)
    });
  });
  $('#step8 button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Pacific/Honolulu' },
    }).done(function (data) {
      console.log(data);
      $('#step8').append(data);
    });
  });
  $('#step9 button').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function (data) {
      console.log(data);
      $('#thislist').append(data)
    });
  });
});
