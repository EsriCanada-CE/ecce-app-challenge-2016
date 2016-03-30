/**
 * @description get feature service
 * @param name
 * @param root
 * @returns {string}
 */
function get_feature_service_layer(name, root) {
  root = root || '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/';
  if (_.last(root) !== '/') {
    root += '/'
  }
  return root + name + '/FeatureServer/0'
}

/**
 * @description make feature layer
 * @param name
 * @param style
 * @param root
 * @returns {{name: *, lyr}}
 */
function make_feature_layer(name, style, root) {
  var url = get_feature_service_layer(name, root);
  return {
    name: name,
    lyr : L.esri.featureLayer({
      url  : url,
      style: style
    })
  };
}

/**
 * @description get parks layer
 * @returns {*}
 */
function get_parks_lyr() {
  var o = make_feature_layer('envparks', _style);
  o.lyr.addTo(map);
  o.name = 'Parks';
  return o;

  function _style(feature) {
    return {color: 'green', weight: 0.7};
  }
}

/**
 * @description get building footprint layer
 * @returns {*}
 */
function get_buildings_lyr() {
  var root = '//services1.arcgis.com/56dETZIzFXStwLka/arcgis/rest/services/';
  var url = get_feature_service_layer('BuildingPoint', root);
  var o = {
    name: 'Building',
    lyr : L.esri.Cluster.clusteredFeatureLayer({
      url  : url,
      style: _style
    })
  };
  //var o = make_feature_layer('BuildingPoint', _style, root);
  //L.esri.Cluster.clusteredFeatureLayer()
  //var layer = make_feature_layer('buildings', _style);
  o.lyr.addTo(map);
  return o;

  function _style(feature) {
    return {color: 'brown', weight: 1, fill: null};
  }
}

/**
 * @description get garden layer
 * @returns {*}
 */
function get_garden_lyr() {
  var root = '//services1.arcgis.com/56dETZIzFXStwLka/arcgis/rest/services/';
  var o = make_feature_layer('Gardens', _style, root);
  o.lyr.addTo(map);
  o.name = 'Gardens';
  return o;

  function _style(feature) {
    return {color: 'blue', weight: 1};
  }
}

/**
 * @description get community layer
 * @returns {*}
 */
get_communities_lyr.colors = [
  'blue', 'green', 'brown', 'navy', 'purple',
  'maroon', 'red', 'olive', 'teal', 'lime',
  'fuchia'
];

function get_communities_lyr() {
  var root = '//services1.arcgis.com/56dETZIzFXStwLka/arcgis/rest/services/';
  var o = make_feature_layer('Regions', _style, root);
  o.lyr.addTo(map);
  return o;

  function _style(feature) {
    //console.log(feature);
    var colors = get_communities_lyr.colors;
    var col = colors.shift();
    colors.push(col);
    return {color: col, weight: 1};
  }
}

/**
 * @description get recreational layer
 * @returns {*}
 */
function get_recreation_lyr() {
  var root = '//services1.arcgis.com/56dETZIzFXStwLka/arcgis/rest/services/';
  var url = get_feature_service_layer('Recreation', root);
  var o = {
    name: 'Recreation',
    lyr : L.esri.Cluster.clusteredFeatureLayer({
      url  : url,
      style: _style
    })
  };

  o.lyr.addTo(map);
  return o;
  //var markers = L.markerClusterGroup();
  //for (var i = 0; i < addressPoints.length; i++) {
  //	var a = addressPoints[i];
  //	var title = a[2];
  //	var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
  //	marker.bindPopup(title);
  //	markers.addLayer(marker);
  //}

  //map.addLayer(markers);

  function _style(feature) {
    //console.log(feature);
    return {color: 'blue', weight: 1};
  }
}

/**
 * @description get trails layer
 * @returns {*}
 */
function get_trails_lyr() {
  var o = make_feature_layer('trails', _style);
  o.lyr.addTo(map);
  return o;

  function _style(feature) {
    return {color: 'brown', weight: 3};
  }
}
/**
 * @description get trails layer
 * @returns {*}
 */
function get_water_sewerlines_lyr() {
  var o = make_feature_layer('water_sewerlines', _style);
  o.lyr.addTo(map);
  o.name = 'WaterSewerLines';
  return o;

  function _style(feature) {
    return {color: 'blue', weight: 0.75};
  }
}

/**
 * @description get trails layer
 * @returns {*}
 */
function get_roads_lyr() {
  var o = make_feature_layer('roads', _style);
  o.lyr.addTo(map);
  o.name = 'Roads';
  return o;

  function _style(feature) {
    return {color: '#e9b894', weight: 4};
  }
}

//var DataLayers = [
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/envparks/FeatureServer/0',  //parks
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/buildings/FeatureServer/0', //buildings
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/garden/FeatureServer/0',    //gardens
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/recreation/FeatureServer/0', //recreation
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/communities/FeatureServer/0', //communities
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/trails/FeatureServer/0', //trails
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/water_sewerlines/FeatureServer/0', //water_sewerlines
//    url: '//services5.arcgis.com/xefMCGb6BIZC6ykA/arcgis/rest/services/roads/FeatureServer/0', //roads
//]



