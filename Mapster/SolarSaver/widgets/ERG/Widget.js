define([
  "dojo/_base/declare",
  "dijit/_WidgetsInTemplateMixin",
  "jimu/BaseWidget",
  "jimu/dijit/TabContainer",
  "jimu/utils",
  "esri/config",
  "esri/urlUtils",
  "esri/tasks/query",
  "esri/tasks/QueryTask",
  "esri/tasks/FeatureSet",
  "esri/layers/GraphicsLayer",
  "esri/layers/FeatureLayer",
  "esri/graphic",
  "esri/geometry/webMercatorUtils",
  "dojo/_base/Color",
  "dijit/Dialog",
  "dijit/ProgressBar",
  "dojo/_base/lang",
  "dojo/on",
  "dojo/dom",
  "dojo/dom-style",
  "dijit/form/Select",
  "dijit/form/TextBox",
  "esri/geometry/jsonUtils",
  "dojo/_base/array",
  "dojo/_base/html",
  "esri/tasks/RelationParameters",
  "esri/layers/FeatureLayer",
  "dojo/query",
  "dojo/dom-construct",
  "dojox/json/ref",
  "jimu/LayerInfos/LayerInfos",
  "dojo/domReady!"
],
  function (declare, _WidgetsInTemplateMixin, BaseWidget, TabContainer, utils, esriConfig, urlUtils, Query, QueryTask, FeatureSet, GraphicsLayer, FeatureLayer, Graphic, webMercatorUtils, Color, Dialog, ProgressBar, lang, on, dom, domStyle, Select, TextBox, jsonUtils, array, html, RelationParameters, FeatureLayer, query, domConstruct, ref, LayerInfos) {
	return declare([BaseWidget, _WidgetsInTemplateMixin], {
      baseClass: 'jimu-widget-erg',
      name: 'Solar Calc',
// calculate the estimate annual savings and power generated
	doCalculation: function (estimate, area, directionV) {
		estimate = estimate * directionV * area * 0.797 * 0.15 * 1100 * 0.148;
		estimate = estimate.toFixed(2);
		area = parseFloat(area);
		area = area.toFixed(1);
		document.getElementById("default").innerHTML = area;
		document.getElementById("generate").innerHTML = (estimate/0.148).toFixed(2);////////////
		directionV = parseFloat(directionV);
		document.getElementById("defaultDir").innerHTML = directionV.toFixed(2);
		if (estimate == "NaN") {
			document.getElementById("totalEstimate").innerHTML = 0.00;
		} else {
		document.getElementById("totalEstimate").innerHTML = estimate;
		};
	},

// based on the event, determine the appropriate input parameters	
	calculateEstimate: function (event, text) {
		var sun, area, snow, pitch, estimate, directionL, directionV;
		estimate = 0;
		var calc = this.doCalculation;
		var x;
		x = this.xxx;
		var dir = this.hoursShaded;
		directionV = document.getElementById("defaultDir").innerHTML;
		area = document.getElementById("default").innerHTML;
		// loop through three lists to extract selected values and determine product of three values
		for (var i = 0; i < 4; i++) {
			if (this.dailySun.getOptions(i).selected == true) {
				sun = this.dailySun.getOptions(i).value;
			};
		};	
		for (var i = 0; i < 3; i++) {
			if (this.snowCover.getOptions(i).selected == true) {
				snow = this.snowCover.getOptions(i).value;
			};
		};		
		for (var i = 0; i < 4; i++) {
			if (this.roofPitch.getOptions(i).selected == true) {
				pitch = this.roofPitch.getOptions(i).value;
			};
		};
		estimate = sun * snow * pitch;
		
// if text was inputted, check data type and run calculation based on changed value and existing parameters
		if (event == "changeArea") {
			area = x.value;
			if (String(area).length > 0) {
				if (!this.isFloat(area)) {
					window.alert("Invalid Number, Please enter an integer or decimal value.");
				} else {
				area = parseFloat(area);
				calc(estimate, area, directionV);
				};	
			};
// if direction dropdown was changed, run calculation based on changed value and existing parameters
		} else if (event == "changeDirection") {
			for (var i = 0; i < 9; i++) {
				if (this.hoursShaded.getOptions(i).selected == true) {
					directionV = this.hoursShaded.getOptions(i).value;
					directionL = this.hoursShaded.getOptions(i).label;
				};};
			calc(estimate, area, directionV);
// on map click, determine if appropriate attributes exist in selected feature and 
// run calculation based on changed value and existing parameters
		} else if (event == "click") { 
			LayerInfos.getInstance(this.map, this.map.itemInfo).then(
			function(layerInfosObject){
				layerInfosObject.getLayerInfoArray().forEach(
				function(layerInfo) {
					try {
						area = layerInfo.map.infoWindow.features[0].attributes.RoofArea;
						document.getElementById("default2").innerHTML = area.toFixed(1);
						directionV = layerInfo.map.infoWindow.features[0].attributes.RI;
						directionV = directionV.toFixed(2);
						dir.getOptions(0).value = directionV;
						area = area *.35;
						area = area.toFixed(1);
						calc(estimate, area, directionV);
						console.log("area");
					} catch(err) {
						directionV = document.getElementById("defaultDir").innerHTML;
						console.log(area);
						console.log(directionV);
					calc(estimate, area, directionV);
					};
				});
			});
		} else {
			this.doCalculation(estimate, area, directionV);
		};
	},

// pass change event into the calculateEstimate function
	onChangeSurfaceArea: function () {
		this.calculateEstimate("changeArea");		
    },
    onChangeDailySun: function () {
		this.calculateEstimate("changeSun");
    },
    onChangeSnowCover: function () {
		this.calculateEstimate("changeSnow");
    },
    onChangeRoofPitch: function () {
		this.calculateEstimate("changePitch");
    },	  
	onChangeHoursShaded: function () {
		this.calculateEstimate("changeDirection");
    },
	onMapClick: function () {
	  this.calculateEstimate("click");
	},
	
// validate the input string as a floating point number
    isFloat: function (sIn) {
    var fIn;
    fIn = parseFloat(sIn);
    if (isNaN(fIn)) {
        return false;
    }
    else {
        return true;
    }
},

    startup: function () {
		this.inherited(arguments);
// create tab container wiht three tabs
        this.tabContainer = new TabContainer({
          tabs: [
            {
              title: this.nls.tabERG,
              content: this.tabNode1
            },
            {
              title: this.nls.tabDemo,
              content: this.tabNode2
            },
            {
              title: this.nls.tabFacilities,
              content: this.tabNode3
            }
          ],
          selected: this.nls.conditions
        }, this.tabERG);
        this.tabContainer.startup();
        utils.setVerticalCenter(this.tabContainer.domNode);

// create drop-down menus and set the on change events
        var sunOption = [
			{label: "0 Hours", value: 1},
			{label: "1-2 Hours", value: .9, selected: true},
			{label: "3-4 Hours", value: .7},
			{label: "5-6 Hours", value: .5}
		];
        this.dailySun.addOption(sunOption);
        this.own(on(this.dailySun, "change", lang.hitch(this, this.onChangeDailySun)));

        var snowOption = [
			{label: "0 Month", value: 1},
			{label: "1-2 Months", value: .9, selected: true},
			{label: "2-4 Months", value: .75}
        ];	
        this.snowCover.addOption(snowOption);
        this.own(on(this.snowCover, "change", lang.hitch(this, this.onChangeSnowCover)));

        var pitchOption = [
			{label: "76 - 90 Degrees", value: .4},
			{label: "61 - 75 Degrees", value: .6},
			{label: "46 - 60 Degrees", value: .8},
			{label: "45 Degrees - Flat", value: 1, selected: true}
		];
		this.roofPitch.addOption(pitchOption);
        this.own(on(this.roofPitch, "change", lang.hitch(this, this.onChangeRoofPitch)));
		
		var hourOption = [
			{label: "Selected House Default", value:.999999},
			{label: "South, Index = 1", value:1, selected:true},
			{label: "South-East, Index = .95", value:.96},
			{label: "South-West, Index = .95", value:.95},
			{label: "East, Index = .86", value:.86},
			{label: "West, Index = .87", value:.87},
			{label: "North-East, Index = .76", value:.76},
			{label: "North-West, Index = .77", value:.77},
			{label: "North, Index = .66", value:.66},
		];
		this.hoursShaded.addOption(hourOption);
        this.own(on(this.hoursShaded, "change", lang.hitch(this, this.onChangeHoursShaded)));
		
// set on click event to execute calculaiton based on the selected polygon
		this.own(on(this.map, "click", lang.hitch(this, this.onMapClick)));
 
// set onblur event to execute calculation based on a change in the area textbox
		var x;
		x = this.xxx;
		this.own(on(x, "blur", lang.hitch(this, function() {this.onChangeSurfaceArea();})));
		document.getElementById("totalEstimate").innerHTML = "0.00";
		document.getElementById("generate").innerHTML = "0.00";
      },

    });
  });
