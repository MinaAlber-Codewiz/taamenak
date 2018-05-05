// GOOGLE MAPS VALUES
var latitude = 22.8136345;
var longtitude = 44.0107377;
var map;
var marker;

// DOM ELEMENTS
var buildingNumber = document.getElementById('building-number');
var streetName = document.getElementById('street-name');
var districtName = document.getElementById('district-name');
var cityName = document.getElementById('city-name');
var zipCode = document.getElementById('zip-code');
var additionalNumber = document.getElementById('additional-number');

// INITATE GOOGLE MAP
function initMap() {

    // GOOGLE MAP STYLING
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

    // DEFAULT LATITUDE AND LONGTITUDE FOR KSA
    latitude = 22.8136345;
    longtitude = 44.0107377;

    // THE MAP
    map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 5,
        center: {
            lat: latitude,
            lng: longtitude
        },
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map']
        }
    });

    // SET MAP STYLING
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // THE MARKER
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: {
            lat: latitude,
            lng: longtitude
        }
    });

    // FUNCTIONS FOR THE MAP AND THE MARKER TO SET POSITIONING
    google.maps.event.addListener(marker, 'dragend', getLatLng);
    google.maps.event.addListener(map, 'click', getLatLng);

    // FUNCTION TO GET LATITUDE AND LONGTITUDE WHEN MARKER OR MAP IS SET BY THE USER
    function getLatLng(event){
        var processingDataFetch = document.getElementById('processing-data-fetching');
        marker.setPosition(event.latLng);
        map.setCenter(event.latLng);
        processingDataFetch.style.display = "block";

        // CLEAR DOM ELEMENTS
        buildingNumber.value = '';
        streetName.value = '';
        districtName.value = '';
        cityName.value = '';
        zipCode.value = '';
        additionalNumber.value = '';

        // FIRE AJAX REQUEST AFTER 5 SECONDS
        setTimeout(function(){
            filLFields(marker.getPosition().lat(),marker.getPosition().lng());
            processingDataFetch.style.display = "none";
        }, 5000);
    }

    // FUNCTION TO FILL THE INPUT FIELDS WHEN USER SELECTS BY MAP OR MARKER
    function filLFields(lat,lng){

        // AJAX REQUEST
        axios.get("https://apina.address.gov.sa/NationalAddress/v3.1/address/address-geocode",{
            params:{
                language: "E",
                format: JSON,
                lat: lat,
                long: lng,
                api_key: 'ffca6e8dcab9414982774da06bbf5c92'
            }
        })

        // RESPONSCE
        .then(function(response){

            console.log(response);

            // DATA RESPONSE FROM AJAX CALL
            var address_data = response.data.Addresses;
            var address_postCode = response.data.PostCode;

            // VALIDATE IF ADDRESS IS VALID OR NOT
            if(address_data !== null){
                buildingNumber.value = address_data[0].BuildingNumber;
                streetName.value = address_data[0].Street;
                districtName.value = address_data[0].District;
                cityName.value = address_data[0].RegionName;
                zipCode.value = address_data[0].PostCode;
                additionalNumber.value = address_data[0].AdditionalNumber;
            } else{
                cityName.value = address_postCode[0].regionName;
                zipCode.value = address_postCode[0].postCode;
            }

        })

        // ERROR
        .catch(function(error){
            console.log(error);
        });

    }

}

window.google = {};
