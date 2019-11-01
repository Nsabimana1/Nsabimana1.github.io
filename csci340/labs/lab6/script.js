$(document).ready(function() {
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

const getJoke = () =>{
  $.ajax({
    dataType: "json",
    method: 'GET',
    url: "https://official-joke-api.appspot.com/random_joke",
    success: function(results) {
      $('#setup').text(results["setup"]);
      $('#punchline').text(results["punchline"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}

const getPicture = () =>{
  $.ajax({
    dataType: "json",
    method: 'GET',
    Header: {"X-Requested-With":"XMLHttpRequest"},
    url: "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
    success: function(results) {
            $('#size_controller').attr("src",results[0]);

      $('#picture').css("background-image", "url("+results[0]+")");

    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}
  getJoke();
  getPicture();
$('#gen_joke').click(function () {
  getJoke();
});

$('#gen_image').click(function () {
  getPicture();
});

$('#generate').click(function () {
  getJoke();
  getPicture();
});
});
