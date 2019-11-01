$(document).ready(function() {
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

const getJoke = () =>{
  $.ajax({
    dataType: "json",
    headers: {"x-requested-with":"xhr"},
    //crossOrigin: true,
    method: 'GET',
    jsonpCallback: "parseQuote",
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
    //headers: { "Access-Control-Allow-Origin":"*"},
    //crossOrigin: true,
    jsonpCallback: "parseQuote",
    url: "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
    success: function(results) {
      $('#picture').css("background-image", "url("+results[0]+")");
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}
  console.log("loaded")
  getJoke();
  getPicture();
$('#gen_joke').click(function () {
  console.log("Yessss")
  getJoke();
});

$('#gen_image').click(function () {
  console.log("surreee")
  getPicture();
});



  // $('#joke').click(function() {
  //   $.ajax({
  //     dataType: "jsonp",
  //     jsonpCallback: "parseQuote",
  //     url: "https://official-joke-api.appspot.com/random_joke",
  //     success: function(results) {
  //       $('.jockholder').text(results["quoteText"]);
  //     },
  //     error: function(xhr,status,error) {
  //       console.log(error);
  //     }
  //   });
  // });
});
