function myMap() {
    var location = {lat: 44.9364212, lng: -84.3996779};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}