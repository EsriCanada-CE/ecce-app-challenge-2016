// JavaScript Document

	  
var map;
var contribute_map;




require([
      "dojo/dom",
      "dojo/dom-construct",
      "esri/map", 
      "esri/dijit/InfoWindow",
      "esri/layers/FeatureLayer",
      "esri/InfoTemplate",
      "dojo/string",
      "dojo/domReady!"
    ], function(
       dom,
       domConstruct,
       Map,
       InfoWindow,
       FeatureLayer,
       InfoTemplate,
       string
    ) {
      //create the custom info window specifying any input options
       var infoWindow = new  InfoWindow({
          domNode: domConstruct.create("div", null, dom.byId("Az"))
       });

      //create the map and specify the custom info window as the info window that will
      //be used by the map 

	 contribute_map = new Map("CONTmap", {
      basemap: "gray",
      center: [-73.57941804326065,45.50589273223628],
      zoom: 13,
	  sliderStyle: "small"
    });
	

     map = new Map("AMmap", {
        center: [-73.57941804326065,45.50589273223628],
        zoom: 12,
        basemap: "topo",
        infoWindow: infoWindow
      });

      //define the info template that is used to display the popup content. 
      var template = new InfoTemplate();
      template.setTitle("<b>${qAddress}</b>");
      template.setContent("hello");
      template.setContent(getTextContent);

      //create the feature layer (street trees of San Francisco)
      var featureLayer = new FeatureLayer("http://services5.arcgis.com/5R55vsKfq7f14num/arcgis/rest/services/cultural/FeatureServer/0",{
        infoTemplate: template,
        outFields: ["*"]
      });
      map.addLayer(featureLayer);

      //resize the info window 
      map.infoWindow.resize(180, 75);

      
      function getTextContent(graphic){
        var attr = graphic.attributes.Province;
        return "<b>" + attr + "</b><br /><a target='_blank' href=http://en.wikipedia.org/wiki/>Wikipedia Entry</a>";
      }

	
	// this function returns a date in the specified format
	function findDate () {
          var inputDate = new Date();
          return locale.format(inputDate, {
            selector: 'date',
            datePattern: 'MMMM d, y'
          });
        }
	
	
	// this function provides a radius around which a click is associated with a specific point
	 function pointToExtent (map, point, toleranceInPixel) {
          var pixelWidth = map.extent.getWidth() / map.width;
          var toleranceInMapCoords = toleranceInPixel * pixelWidth;
          return new Extent(point.x - toleranceInMapCoords,
                            point.y - toleranceInMapCoords,
                            point.x + toleranceInMapCoords,
                            point.y + toleranceInMapCoords,
                            map.spatialReference);
        }

  });