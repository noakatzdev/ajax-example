$("#search").click(function() {
  //alert("clicked");
  // save the input data entered by the client
  var country = $("#country_name").val();
  var confirmd, recoverd , deaths;
  $.ajax({
    url: "https://covid19-api.com/country?name=" + country + "&format=json",
    type: "GET",

    success: function(response) {
      if (response.length > 0) {
        console.log(response);
        confirmd = response[0].confirmed;
        recoverd = response[0].recovered;
        deaths = response[0].deaths;

        $("#corona_data").append('<tr><td>'+country+'</td><td>'+ confirmd+'</td><td>'+recoverd+'</td><td>'+deaths+'</td></tr>');

      } else
        alert("Coronavirus data for the country you entered has not found. Please try by typing country name correctly ");
    }

  })

});
