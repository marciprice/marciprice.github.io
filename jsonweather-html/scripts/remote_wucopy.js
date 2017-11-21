// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
      $.ajax({
        url : "http://api.wunderground.com/api/dc0015cc85d66a95/geolookup/conditions/q/" + lat + "," + long +".json",
        dataType: "jsonp",
        success :function(data){
            var locationC = data['location']['city'];
            var locationS = data['location']['state'];
            var temp_f = data['current_observation']['temp_f'];
            var overview = data['current_observation']['weather'];
            var wind = data['current_observation']['wind_mph'];
            var humidity = data['current_observation']['relative_humidity'];
            var feel = data['current_observation']['feelslike_f'];
            var image = data['current_observation']['icon_url'];
            
            console.log(data);
            
            $("#title-display").prepend(locationC + ','+locationS +" | ");
            $("#city-state").html(locationC + ', ' + locationS);
            let round = Math.round(temp_f);
            $("#tempf").html(round + '&deg;F');
            $("#summary").html('<img src='+ image + '>'+ overview);
            $("#add1").html('Wind: ' + wind + 'mph');
            $("#add2").html('Humidity: ' + humidity);
            $("#add3").html('Feels likee: ' + feel + '&deg;F'
            $("#cover").fadeOut(250);

        }






     
    });
           };

  

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
