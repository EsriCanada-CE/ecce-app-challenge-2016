var __startingCoords = [43.240, -79.848];
var __zoomLevel = 12;
var __map;
var __shapeLayers = [];
var __activatedLayers = [];
var compostMarkers = [];
var landfillMarkers = [];
var municipalMarkers = [];
var privateMarkers = [];
var geolocation = undefined;
var dirLayer = undefined;
var accessToken = "nothing";
var directionLayers = [];
var directionStr = "";
var customWaypoint;
var geoMarker;

var compostIcon = L.icon({
    iconUrl: './img/compostingMarker.png',
    iconSize: [32, 32]
});
var landfillIcon = L.icon({
    iconUrl: './img/garbageMarkers.png',
    iconSize: [32, 32]
});
var municipalIcon = L.icon({
    iconUrl: './img/municipal.png',
    iconSize: [32, 32]
});
var privateIcon = L.icon({
    iconUrl: './img/private.png',
    iconSize: [32, 32]
});

var garLegendActive = false;
var leafLegendActive = false;

var garLegend = L.control({ position: 'bottomright' });

garLegend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'legend'),
        labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    div.innerHTML += "Legend: <br>"
    for (var i = 0; i < labels.length; i++) {
        // console.log(labels[i]);
        div.innerHTML +=
            '<i style="background:' + getGarbageColor(labels[i]) + '"></i> <b>' +
            labels[i] + '</b><br>';
    }

    return div;
};

var leafLegend = L.control({ position: 'bottomright' });

leafLegend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'legend'),
        labels = ['Yes', 'No'];

    div.innerHTML += 'Do I get leaf and yard waste pickup? <br>';
    for (var i = 0; i < labels.length; i++) {
        // console.log(labels[i]);
        div.innerHTML +=
            '<i style="background:' + getYesNoColour(labels[i]) + '"></i> <b>' +
            labels[i] + '</b><br>';
    }

    return div;
};

function getYesNoColour(res) {
    if (res === 'Yes') {
        return '#4CAF50';
    } else if (res === 'No') {
        return '#f44336';
    }
}


function getGarbageColor(garDay) {
    if (garDay === "Monday") {

        return '#66c2a5'

    } else if (garDay === "Tuesday") {

        return '#fc8d62'

    } else if (garDay === "Wednesday") {

        return '#8da0cb'

    } else if (garDay === "Thursday") {

        return '#e78ac3'

    } else if (garDay === "Friday") {

        return '#a6d854'

    }
}

function loadMap() {
    __map = L.map("map").setView(__startingCoords, __zoomLevel);
    console.log('map created');
    L.esri.basemapLayer("Topographic").addTo(__map);
    console.log('topographic layer added');
}

function addPolygonShapeFile(path) { //generic function to add shapeFiles to the map, then stores the added shpfile object in an array
    console.log("attempting to load shapefile from " + path);
    var shpfile = new L.Shapefile(path, {
        onEachFeature: function(feature, layer) {
            // console.log(feature.properties);
            if (feature.properties.DAY) {
                var garDay = feature.properties.DAY;
                layer.setStyle({
                    weight: 2,
                    opacity: 1,
                    color: '#4CAF50',
                    fillOpacity: 0.7
                });
                if (garDay === "Monday") {
                    layer.setStyle({
                        fillColor: '#fc8d62',
                        // weight: 2,
                        // opacity: 1,
                        // color: '#4CAF50',
                        // fillOpacity: 0.7
                    });
                } else if (garDay === "Tuesday") {
                    layer.setStyle({
                        fillColor: '#fc8d62',
                        // weight: 2,
                        // opacity: 1,
                        // color: '#4CAF50',
                        // fillOpacity: 0.7
                    });
                } else if (garDay === "Wednesday") {
                    layer.setStyle({
                        fillColor: '#8da0cb',
                        // weight: 2,
                        // opacity: 1,
                        // color: '#4CAF50',
                        // fillOpacity: 0.7
                    });
                } else if (garDay === "Thursday") {
                    layer.setStyle({
                        fillColor: '#e78ac3',
                        // weight: 2,
                        // opacity: 1,
                        // color: '#4CAF50',
                        // fillOpacity: 0.7
                    });
                } else if (garDay === "Friday") {
                    layer.setStyle({
                        fillColor: '#a6d854',
                        // weight: 2,
                        // opacity: 1,
                        // color: '#4CAF50',
                        // fillOpacity: 0.7
                    });
                }
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight
                });
            } //end day if

            if (feature.properties.Available) {
                if (feature.properties.Available === "Yes") {
                    layer.setStyle({
                        fillColor: '#4CAF50',
                        weight: 2,
                        opacity: 1,
                        color: '#4CAF50',
                        fillOpacity: 0.7
                    });
                } else {
                    layer.setStyle({
                        fillColor: '#f44336',
                        weight: 2,
                        opacity: 1,
                        color: '#4CAF50',
                        fillOpacity: 0.7
                    });
                }
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight
                });

            } //end yard if

        }

    });
    shpfile.once("data:loaded", function() {
        console.log("finished loading from " + path);
        __map.invalidateSize(); //leaflet has a bug where you either invalidate the size or
        // the tiles don't load properly
    });
    __shapeLayers.push(shpfile);
    // console.log(shpfile.attribute('alt'));
    __activatedLayers.push(false);
}

function resetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: '#4CAF50',
        fillOpacity: 0.7
    })


}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: '#212121',
        fillOpacity: 0.8
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function addMarkerShapeFile(path, arr) { //generic function to add shapeFiles to the map, then stores the added shpfile object in an array
    console.log("attempting to load shapefile from " + path);
    var shpfile = new L.Shapefile(path, {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                if (arr === compostMarkers) {
                    layer.setIcon(compostIcon);
                } else if (arr === landfillMarkers) {
                    layer.setIcon(landfillIcon);
                } else if (arr === municipalMarkers) {
                    layer.setIcon(municipalIcon);
                } else if (arr === privateMarkers) {
                    layer.setIcon(privateIcon);
                }
                arr.push(feature);
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return "<div><span class=\"markerTitle\"><b>" + k + "</b></span>" + "<span class=\"markerText\">" + feature.properties[k] + "</span>";
                }).join("<br />"), {
                    maxHeight: 300
                });
            }

        }
    });
    shpfile.once("data:loaded", function() {
        console.log("finished loading from " + path);
        __map.invalidateSize(); //leaflet has a bug where you either invalidate the size or
        // the tiles don't load properly
    });
    __shapeLayers.push(shpfile);
    __activatedLayers.push(false);
}


function toggleLayer(index) {
    if (index === 0) {
        if (garLegendActive) {
            __map.removeControl(garLegend);
            garLegendActive = false;
        } else if (!garLegendActive) {
            garLegend.addTo(__map);
            garLegendActive = true;
        }
    }

    if (index === 1) {
        if (leafLegendActive) {
            __map.removeControl(leafLegend);
            leafLegendActive = false;
        } else if (!leafLegendActive) {
            leafLegend.addTo(__map);
            leafLegendActive = true;
        }
    }

    if (geolocation != undefined) {
        __map.removeLayer(geolocation);
    } else {
        //do nothing
    }
    if (__activatedLayers[index] === false) {
        __shapeLayers[index].addTo(__map);
        __activatedLayers[index] = true;
    } else {
        __map.removeLayer(__shapeLayers[index]);
        __activatedLayers[index] = false;
    }
}

function clearAllLayers() {
    for (var i = 0; i < __shapeLayers.length; i++) {
        __map.removeLayer(__shapeLayers[i]);
        __activatedLayers[i] = false;
    }

    if (leafLegendActive) {
        __map.removeControl(leafLegend);
        leafLegendActive = false;
    }

    if (garLegendActive) {
        __map.removeControl(garLegend);
        garLegendActive =false;
    }

    clearDirections();
}

function findMe() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            if (geolocation != undefined) {
                __map.removeLayer(geolocation);
            }
            geoMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(__map);
            geoMarker.bindPopup("<b><center>This is you!</center></b><br> The <b>nearest private</b> recycling location is " + findNearestMarker(position, privateMarkers) + "The <b>nearest municipal</b> recycling location is " + findNearestMarker(position, municipalMarkers));
            // marker.openPopup();
            geolocation = geoMarker;
            __map.setView([position.coords.latitude, position.coords.longitude], 16)
            geoMarker.openPopup();
            // geoMarker.setContent("testContent");
        });
    } else {
        //show a search bar
    }
}

function addClearDirButton() {
    L.easyButton('icon ion-android-close', function() {
        clearDirections();
    },
    "Clear directions and custom waypoint").addTo(__map);
}

function addFindMeButton() {
    L.easyButton('icon ion-pin larger', function() {
            findMe();
        },
        "Find my location").addTo(__map);
}

function addMunicipalRecyclingButton() {
    //icon icon-refresh larger
    L.easyButton('icon ion-cube larger', function() {
            toggleLayer(2);
        },
        "Display municipal recycling locations").addTo(__map);
}

function addPrivateRecyclingButton() {
    L.easyButton('icon ion-loop larger', function() {
            toggleLayer(3);
        },
        "Display private recycling locations").addTo(__map);
}

function addCompostButton() {
    L.easyButton("icon ion-leaf larger", function() {
            toggleLayer(4);
        },
        "Display composting facility locations").addTo(__map);
}

function addLandFillButton() {
    L.easyButton("icon ion-android-delete larger", function() {
            toggleLayer(5);
        },
        "Display landfill locations").addTo(__map);
}

function addHomeButton() {
    L.easyButton("icon ion-home larger", function() {
        __map.setView(__startingCoords, __zoomLevel);
    },
    "Reset to initial view").addTo(__map);
}

function toRad(value) {
    return value * Math.PI / 180;
}

function getDistance(pos1, pos2) { //using the haversine formula!
    //it might not be the closest to drive to, but whatever
    var R = 6371000; // metres, earth's distance
    var p1 = toRad(pos1[0]);
    var p2 = toRad(pos2[0]);
    var deltaP = toRad(pos2[0] - pos1[0]);
    var deltaL = toRad(pos2[1] - pos1[1]);

    var a = Math.sin(deltaP / 2) * Math.sin(deltaP / 2) +
        Math.cos(p1) * Math.cos(p2) *
        Math.sin(deltaL / 2) * Math.sin(deltaL / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d;
}

function findNearestMarker(position, featureArr) {
    var lowestIndex = 0;
    var lowestDistance = Infinity; //good luck being greater than that!
    for (var i = 0; i < featureArr.length; i++) {
        featureCoords = [featureArr[i].geometry.coordinates[1], featureArr[i].geometry.coordinates[0]]; //for some reason it stores them backwards, beats me im just a code monkey
        var distance = getDistance([position.coords.latitude, position.coords.longitude], featureCoords);
        if (distance < lowestDistance) {
            lowestDistance = distance;
            lowestIndex = i;
        }
    }
    var nearestName = "";
    if (featureArr[lowestIndex].properties.Name) {
        nearestName = featureArr[lowestIndex].properties.Name;
    } else {
        nearestName = "Nameless";
    }

    var nearestAddress = featureArr[lowestIndex].properties.Address;
    var htmlAddressBeginning = "<a onclick=\"addressGeocode([" + position.coords.latitude + ", " + position.coords.longitude + "],&#34;" + nearestAddress + "&#34;)\"" + " href=\"javascript:void(0)\">";
    // console.log(htmlAddressBeginning);
    var htmlAddressEnding = "</a>";
    // console.log(nearestName + " at " + htmlAddressBeginning + nearestAddress + htmlAddressEnding + "<br>");
    return nearestName + " at " + htmlAddressBeginning + nearestAddress + htmlAddressEnding + "<br>";
}

function requestToken() {
    var jQueryPromise = $.post("https://www.arcgis.com/sharing/rest/oauth2/token/", {
        "client_id": "4zKEN5BilxUnVaqy",
        "client_secret": "804e33b62c6247e4b2465d6cbc929e43",
        "grant_type": "client_credentials"
    })
    var realPromise = Promise.resolve(jQueryPromise);
    realPromise.then(function(val) {
        valObj = JSON.parse(val);
        accessToken = valObj.access_token;
    });
}

function addressGeocode(startCoords, endAddress) {
    L.esri.Geocoding.geocode().text(endAddress).run(function(err, results, response) {
        showDirections(startCoords, [results.results[0].latlng.lat, results.results[0].latlng.lng]);
    })
}

function showDirections(startCoords, endCoords) {
    console.log("routing from: " + startCoords + "to: " + endCoords);
    // openSpecPopup(endCoords);
    var stops = startCoords[1] + ", " + startCoords[0] + "; " + endCoords[1] + ", " + endCoords[0];
    var getPromise = $.get("http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve", {
        "token": accessToken,
        "stops": stops,
        "f": "json"
    })
    var realPromise = Promise.resolve(getPromise);
    realPromise.then(function(val) {
        valObj = JSON.parse(val);
        // console.log(valObj);
        directionPoints = valObj.routes.features[0].geometry.paths[0];
        directionStr = valObj.directions[0].features;
        // console.log(directionStr);
        drawDirections(directionPoints);
        changeWaypointText(directionStr);
    });
}

function changeWaypointText(directions) {
    // console.log(Object.keys(directions));
    customString = "";
    for (var i = 0; i < Object.keys(directions).length; i++) {
        directions[i].attributes.text.replace(/Location 2/i, "diestination");
        customString += "<b>" + i + "</b>: " + directions[i].attributes.text + "<br>";
        console.log(directions[i].attributes.text);
    }

    if (customWaypoint != undefined) {
        customWaypoint.getPopup().setContent(customString);
    } else if (geoMarker.getPopup() != undefined) {
        geoMarker.getPopup().setContent(customString);
    }
    // console.log(geoMarker.getPopup());
}

function clearDirections() {
    for (var i = 0; i < directionLayers.length; i++) {
        __map.removeLayer(directionLayers[i]);
    }
    if (customWaypoint != undefined) {
        __map.removeLayer(customWaypoint);
        customWaypoint = undefined;    
    }
}

function drawDirections(points) {
    // clearDirections();
    // console.log(points);
    for (var i = 0; i < points.length - 1; i++) {
        var pointA = new L.LatLng(points[i][1], points[i][0]);
        var pointB = new L.LatLng(points[i + 1][1], points[i + 1][0]);
        var pointsList = [pointA, pointB];
        var myPolyline = L.polyline(pointsList, {
            color: 'red',
            weight: 5,
            opacity: 0.5,
            smoothFactor: 1
        });
        directionLayers.push(myPolyline);
        myPolyline.addTo(__map);
    }
}

function fetchDirections(startCoords, endAddress) { //helper function since this is asynchronous and that still blows my mind
    addressGeocode(endAddress);
}

function onMapClick(e) {
    if (customWaypoint != undefined) { //we've made one before
        console.log(customWaypoint);
        if (typeof(customWaypoint._latlng)!='undefined') { 
            //popup is open
            showDirections([customWaypoint._latlng.lat,customWaypoint._latlng.lng], [e.latlng.lat, e.latlng.lng]);
        }
        else {
            //popup is closed
            // so we can make a new one
            makeCustomWaypointPopup(e);
        }
    } else {
        //it's never existed so we can make a new one
        makeCustomWaypointPopup(e);
    }

    
}

function makeCustomWaypointPopup(e) {
    customWaypoint = L.marker([e.latlng.lat, e.latlng.lng]).addTo(__map);
    var position = { //this is hideous oh my god but i didn't want to rewrite code so whatever it works
            coords: {
                latitude: e.latlng.lat,
                longitude: e.latlng.lng
            }
        }
    customWaypoint.bindPopup("<b><center>This is your custom waypoint at " + e.latlng.lat + "," + e.latlng.lng + "</center></b><br> The <b>nearest private</b> recycling location is " + findNearestMarker(position, privateMarkers) + "The <b>nearest municipal</b> recycling location is " + findNearestMarker(position, municipalMarkers));
    customWaypoint.openPopup();
}


function mapSetup() {
    requestToken();
    loadMap(); //loads map and adds it to div

    //load out shapefiles, having to keep track of the layers here is probably the dumbest thing I've done
    addPolygonShapeFile("../data/wasteday.zip"); //layer 0
    addPolygonShapeFile("../data/LeafYardServices.zip"); //layer 1
    addMarkerShapeFile("../data/municipalnew.zip", municipalMarkers); //layer 2
    addMarkerShapeFile("../data/privatenew.zip", privateMarkers); //layer 3
    addMarkerShapeFile("../data/composting_facilities.zip", compostMarkers); //layer 4
    addMarkerShapeFile("../data/landfills.zip", landfillMarkers); //layer 5

    __map.invalidateSize(); //just in case that bug rears it's ugly head
    //load our buttons
    addHomeButton();
    addFindMeButton();
    addPrivateRecyclingButton();
    addMunicipalRecyclingButton();
    addCompostButton();
    addLandFillButton();
    addClearDirButton();

}


//console.dir(privateMarkers);

mapSetup();
__map.on('click', onMapClick);
//default opened layers
for (var i = 2; i <= 5; i++) {
    toggleLayer(i);
}
