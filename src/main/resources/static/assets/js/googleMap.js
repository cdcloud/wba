function myMap() {
    var location = {lat: 33.104277, lng: -96.6508143};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}