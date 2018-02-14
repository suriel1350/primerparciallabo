$('.linkfix_LogIn a').on('click',function() {           
        window.location.href = "/ingresar";  // Change This
});

 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop,.explore").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });

var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();

var infowindow;
        (function () 
            {
                google.maps.Map.prototype.markers = new Array();
                google.maps.Map.prototype.getMarkers = function ()
                {
                return this.markers
                };
            
                google.maps.Map.prototype.clearMarkers = function () 
                {
                    for (var i = 0; i < this.markers.length; i++) {
                        this.markers[i].setMap(null);
                    }
                this.markers = new Array();
                };
            
                google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;
                google.maps.Marker.prototype.setMap = function (map) 
                {
                    if (map) {
                        map.markers[map.markers.length] = this;
                    }
                    this._setMap(map);
                }
        }
            )();

google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {

        lat= 19.01826447750003;
        lng = -98.24133396148682;

        $("#lat").val(lat);
        $("#lng").val(lng);

        mapOptions = {
                center: new google.maps.LatLng(lat, lng),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        mapElement = document.getElementById('map');
        map = new google.maps.Map(mapElement, mapOptions);

        google.maps.event.addListener(map, 'click', function (event) {
                
                lat =event.latLng.lat();
                lng=event.latLng.lng();

                document.getElementById('lat').value=lat;
                document.getElementById('lng').value=lng;
                
                map.clearMarkers();
                drawMarker();
            });
        
        drawMarker();     
    }

    function drawMarker() 
        {
            var infowindow = new google.maps.InfoWindow();
            var marker, i; 
            
            var message = "Tec de Mty";
          
                var pinColor = "AB2567";
                var charColor = "14AB74";
                var mensajeColor = "14AB74";
                charColor = "#"+charColor;
                mensColor = "#"+mensajeColor;
                
                $(".colorTitulo").css({"color": mensColor});

                var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|" + pinColor,
                        new google.maps.Size(21, 34),
                        new google.maps.Point(0, 0),
                        new google.maps.Point(10, 34));

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    icon: pinImage,
                    title: '' + message,
                    map: map,
                    label: {
                        text: " *",
                        color: charColor
                    }
                });


                var contentMessage = '<div class="colorTitulo">SURIEL</div>';



                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(contentMessage);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
           
        }

    function obtenerDireccion()
    {
        //alert("obteniendo direccion ...");

        var geocoder = new google.maps.Geocoder;
        
        var mylat = document.getElementById('lat').value;
        var mylng = document.getElementById('lng').value;

        var latlng = {lat: parseFloat(mylat), lng: parseFloat(mylng)};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
          var texto = results[0].formatted_address;
          $("#direccion").text(texto);
          //window.alert(JSON.stringify(results[0]));
        
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
    }


    function obtenerClima()
    {
        //alert("obteniendo clima ...");

        var mylat = document.getElementById('lat').value;
        var mylng = document.getElementById('lng').value; 

        var apiKey =  "be8d7908731ba4e186e5a9befa87cc8b" //"2af72ef62258728d72777bef612f2a3e";

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + 
        mylat + "&lon=" + mylng + "&appid=" + apiKey, function(data) 
        {

            //var texto = (JSON.stringify(data.coord));
            var temperatura = (JSON.stringify(data.main.temp));
            var presion = (JSON.stringify(data.main.pressure));
            var humedad = (JSON.stringify(data.main.humidity));
            var tempMin = (JSON.stringify(data.main.temp_min));
            var tempMax = (JSON.stringify(data.main.temp_max));

            var clima = "temperatura: " + temperatura + ", presion: " + presion + ", humedad: " + humedad
                        + ", tempMinima: " + tempMin + ", tempMaxima: " + tempMax;

            $("#clima").text(clima);            
        })
    }
