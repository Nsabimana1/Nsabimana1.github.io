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

            //$('#size_controller').removeAttr("height");
            //$('#size_controller').removeAttr("width");
            $('#size_controller').attr("src",results[0]);
            /*
            let h = $('#size_controller').height();
            console.log('h=',h);
            if (h/500.0 > 1) {
              console.log("Scaled the image for you!");
              let r = h/500.0;
              console.log(r);
              $('#size_controller').attr("height","500px");
              //let w = $('#size_controller').width();
              //$('#size_controller').attr("width",w/r+"px");
            }*/
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
