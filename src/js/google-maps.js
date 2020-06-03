var map;

function initMap() {

    var uluru = {lat: 49.824850, lng: 24.075303};
    map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 17,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    var marker = new google.maps.Marker({
        position: uluru,
        title: 'ComeBack',
        icon: '../img/header/header-logo.png',
        map: map
    });
}
