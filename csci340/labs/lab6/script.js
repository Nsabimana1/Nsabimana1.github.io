$(document).ready(function() {


const getJoke = (category) =>{
  var = "https://official-joke-api.appspot.com/random_joke"
  return
}




  $('.cookie').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
      success: function(results) {
        $('.fortune').text(results["quoteText"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
