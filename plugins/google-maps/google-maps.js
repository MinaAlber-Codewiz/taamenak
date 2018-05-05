function initMap() {

    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#ebebeb"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#f9f9f9"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ], {
            name: 'Styled Map'
        });

    var marker;
    var latitude = 24.698731;
    var longitude = 46.722362;
    var address_text = '<p style="overflow:hidden;max-width:190px;font-size:14px;font-family:Cairo;line-height:18px;">PO BOX 10951 Riyadh 1143 AL-Bait Project Abo Bakr AL Seddiq Road Malaz Area – Building No. 2 - 2nd floor Office 18 Riyadh, Kingdom of Saudi Arab<br/><a style="font-size:14px;font-family:Cairo;color:#1876D2;font-weight:bold;" href="https://www.google.com.eg/maps/place/@24.6987234,46.7212667,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.6987234!4d46.7218139?hl=en" target="_blank">Get Directions</a></p>';
    var custom_marker = {
                            url: "img/googlemap-location-pointer.png",
                            scaledSize: new google.maps.Size(70, 95),
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(0,0)
                        }

    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 16,
        center: {
            lat: latitude,
            lng: longitude
        },
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map']
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {
            lat: latitude,
            lng: longitude
        },
        title: 'Prime Taamenak',
        icon: custom_marker
    });

    var infowindow = new google.maps.InfoWindow({
        content: address_text
    });
    infowindow.open(map, marker);

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

window.google = {};
