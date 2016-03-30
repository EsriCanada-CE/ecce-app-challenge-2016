/**
 * Created by H2T on 3/2/2016.
 */
function init_app() {
  //initialize jquery on ready
  init_dom_events_on_ready();
  var layers = load_layers();
  var overlays = {};

  _.each(layers, function (o) {
    overlays[_.upperFirst(o.name)] = o.lyr;
  });
  L.control.layers(null, overlays).addTo(map);

  //L.control.layers(base_layer, layers).addTo(map);
}

/**
 * @description initialize application on ready
 */
function init_dom_events_on_ready() {
  $(document).ready(function () {
    // Basemap changed
    $("#selectStandardBasemap").on("change", function (e) {
      var basemap = $(this).val();
      setBasemap(basemap);
    });

    // Search
    var input = $(".geocoder-control-input");
    input.focus(function () {
      $("#panelSearch .panel-body").css("height", "150px");
    });
    input.blur(function () {
      $("#panelSearch .panel-body").css("height", "auto");
    });

    // Attach search control for desktop or mobile
    function attachSearch() {
      var parentName = $(".geocoder-control").parent().attr("id"),
        geocoder = $(".geocoder-control"),
        width = $(window).width();
      if (width <= 767 && parentName !== "geocodeMobile") {
        geocoder.detach();
        $("#geocodeMobile").append(geocoder);
      } else if (width > 767 && parentName !== "geocode") {
        geocoder.detach();
        $("#geocode").append(geocoder);
      }
    }

    $(window).resize(function () {
      attachSearch();
    });

    attachSearch();
    update_ui();
  });

  function update_ui() {
    "use strict";
    set_nav_color_opacity();
    set_nav_textcolor();
    set_ui_layout();
    set_sustainability_panel();
  }
}

function load_layers() {
  "use strict";

  //var layers = [get_parks_lyr, get_buildings_lyr, get_garden_lyr];
  var layers = [
    get_water_sewerlines_lyr, get_communities_lyr,
    get_parks_lyr, get_garden_lyr, //get_recreation_lyr,
    get_trails_lyr, //get_roads_lyr,// get_buildings_lyr
  ];
  layers = _.map(layers, function (lyr) {
    return lyr()
  });
  return layers
}