/* Purpose: This script is used for the ESRI Canada App Challenge. This script calculates statistics for green roof run 
            off for each building. This measurement widget code was manipulated for our app use.
            There is a measurement tool that allows the user to create their own polygons to find statistics
   Author: Alexandra Everett, Jeffery Sutherland, Jean-Yves Landry
   Date: Feb 26 - March 4 2016
*/

var map;
require([
    "dojo/dom",
    "esri/Color",
    "dojo/keys",
    "dojo/parser",

    "esri/arcgis/utils",
    "esri/config",
    "esri/sniff",
    "esri/map",
    "esri/dijit/Search",
    "esri/dijit/Measurement",
    
    "esri/dijit/LayerList",
    "esri/layers/FeatureLayer",
    "esri/renderers/SimpleRenderer",
    "esri/tasks/GeometryService",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",

    "esri/dijit/Scalebar",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/TitlePane",
    "dijit/form/CheckBox",
    "dojo/domReady!"
], function (
    dom, Color, keys, parser,
    arcgisUtils, esriConfig, has, Map, Search, Measurement, LayerList, Scalebar,  FeatureLayer, SimpleRenderer, GeometryService, SimpleLineSymbol, SimpleFillSymbol
  ) {
    parser.parse();
    //This sample may require a proxy page to handle communications with the ArcGIS Server services. You will need to  
    //replace the url below with the location of a proxy on your machine. See the 'Using the proxy page' help topic 
    //for details on setting up a proxy page.
    //esriConfig.defaults.io.proxyUrl = "/proxy/";
    //esriConfig.defaults.io.alwaysUseProxy = false;

    //This service is for development and testing purposes only by ESRI. 
   esriConfig.defaults.geometryService = new GeometryService("http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

    var sfs = new SimpleFillSymbol(
      "solid",
      new SimpleLineSymbol("solid", new Color([195, 176, 23]), 2),
      null
    );

    // Link to the web app page
    arcgisUtils.createMap("782ca399ed3f4651850f056101e38ba6", "map").then(function (response) {

        //pop up alert
        alert("Welcome to the Building Resilience App! This map is a tool to find out how you can help your city with storm water retention through green roof construction. The statistics provide estimates for the amount of storm water runoff, construction costs, and Eco Roof Incentive Program Savings. ");


        //To add building layer to measurement tool box
        this.layer = new LayerList({
            map: response.map,
            layers: arcgisUtils.getLayerList(response),
        }, "layerList");
        this.layer.startup();

        //To add search bar to find address
        this.search = new Search({
            map: response.map,
        }, "search");
        this.search.startup();


        //Scalebar with metric units
        this.scalebar = new esri.dijit.Scalebar({
            map: response.map,
            attachTo: "bottom-left",
            scalebarUnit: "metric"
        
        });

        // Measurement tool
        this.measurement = new Measurement({
            map: response.map,
            defaultAreaUnit: "esriSquareMeters",
        }, dom.byId("measurementDiv"));
        this.measurement.startup();

        //Hide location and distance tool
        measurement.hideTool("distance");
        measurement.hideTool("location");
       
        // Extract measure-end value for use and calculations
        this.measurement.on('measure-end', function (evt) {
            console.log(evt);

            var area = evt.values.toFixed(2);
            // Calculation for Storm Runoff during severe storm (126mm) for a normal roof ()
            var runoffwo = (area * 126 * 0.9).toFixed(2);               //run off without green roof (126 = rainfall amount, 0.9 = runoff coefficient)
            var runoffwlow = (area * 126 * 0.6).toFixed(2);             //run off with low cost green roof (126 = rainfall amount, 0.6 = runoff coefficient)
            var runoffwhigh = (area * 126 * 0.1).toFixed(2);            // run off with high cost green roof (126 = rainfall amount, 0.1 = runoff coefficient)
            var TOcont;                                                 // Contribution costs for Eco Roof Incentive Program
                if (area >= 1333.333333)                                // Accounts for maximum incentive contribution
                    TOcont = 100000.00
                else TOcont = (area * 75).toFixed(2);                   // $75/Sq Metre
            var lowcost = (area * 10.8 * 20).toFixed(2);                // Low cost construction (10.8=ft sq to m sq, 20=low end cost)
            var highcost = (area * 10.8 * 30).toFixed(2);               // High cost construction (10.8=ft sq to m sq, 20=high end cost)
            var perlow = ((TOcont / lowcost) * 100).toFixed(0);         // Percentage of savings through the program , low cost - used for range in Eco-Roof Incentive
            var perhigh = ((TOcont / highcost) * 100).toFixed(0);       // Percentage of savings through the program , high cost - used for range in Eco-Roof Incentive
            var pollsave = (0.5 * 5460 *(area / 10000)).toFixed(0);     // Pollution Savings for city over 50 years
            var erosave = (5055 * (area / 10000)).toFixed(0);           // Erosion Savings for city over 50 years

            // All information that is processed through the measurement tool
            document.getElementById("measurementCalc").innerHTML = "Area = " + area + " sq. metres";
            document.getElementById("runoffCalc1").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Normal Roof = " + runoffwo + " litres";
            document.getElementById("runoffCalc2").innerHTML = "&nbsp;&nbsp; Low End Green Roof = " + runoffwlow + " litres (33% reduction)";
            document.getElementById("runoffCalc3").innerHTML = "&nbsp; High End Green Roof = " + runoffwhigh + " litres (89% reduction)";
            document.getElementById("lowendcost").innerHTML = "&nbsp;&nbsp;&nbsp;Low End Cost&nbsp;&nbsp;= &nbsp; $" + lowcost + " ($216/sq metre)";
            document.getElementById("highendcost").innerHTML = "<br>&nbsp;High End Cost&nbsp;&nbsp; = &nbsp; $" + highcost + " ($324/sq metre)";
            document.getElementById("TOcontribution").innerHTML = "<br>Eco-Roof Incentive = $" + TOcont + "<br><br><b>The Eco-Roof Incentive Program will provide<br> " + perhigh + " - " + perlow + "% of total construction costs.";
            document.getElementById("Pollution").innerHTML = "Pollution Savings = $" + pollsave + "($/50 years)";
            document.getElementById("Erosion").innerHTML = "&nbsp;&nbsp;Erosion Savings&nbsp; = $" + erosave + "($/50 years)";
        });
        });
    });



