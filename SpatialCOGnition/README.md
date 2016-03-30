Building Resilience - Team Spatial COGnition (NSCC COGS) ECCE App Challenge 2015
==================

**Team members:** 
* Alexandra Everett 
* Jean-Yves Landry 
* Jeffrey Sutherland

*__Building__* **Resilience** is a new app that allows the City of Toronto to engage the public on their recently implemented [Green-Roof By-Law](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=83520621f3161410VgnVCM10000071d60f89RCRD&vgnextchannel=3a7a036318061410VgnVCM10000071d60f89RCRD) and [Eco-Roof Incentive Programs](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=3a0b506ec20f7410VgnVCM10000071d60f89RCRD). Specifically, the app allows users to assess green roof potential (runoff volumes, costs, incentives, and enviromental savings statistics) for existing buildings within city limits. Additionally, the app allows users to estimate green roof potential for custom green roof projects through a customized measurement drawing widget. See more details - including app rationale and background - in the App Mission Statement.

**Install Instructions:** 
1. **Map Series Story Map**: Download the "BuildingResilience.zip" file in the root of this repository, and unzip it on your own personal web server (or host locally to view). The Map Series Story Map has already been shared publically and the "appID" has already been configured in the index.html code (Line 38). All data contained in the Map Series Story map is publically stored on the developer's  ArcGIS online account. 
2. **Green Roof App**: Download the "GreenRoofWidget.zip" file in the root of this repository and unzip it on your own personal web server (or host locally to view). Since the widget is not currently hosted, it is a separate entity from the Map Series Story Map. Once the widget is hosted, the developers can be contacted to embed the URL within the appicable Map Series slide. 

## Limitations and Assumptions:
* The green roof widget currently provides rudimentary estimates/calcuations of which the developers derived themselves from online resources. We are not hydrologists and these calculations should not be regarded as actual values. This being said, the app can be customized to utilize **case-specific** calculations as deemed fit by the host. (See "Assumptions" section below.)*
* The green roof widget was created as customization of ESRI's measurement widget. Ideally, the green roof widget would have been created from scratch to enable further widget javascript customization.
* The Toronto Buildings Layer includes **all** buildings within city limits (updated in 2014). Ideally, the layer would have been clipped to only include buildings with flat to near-flat roofs - all calculations were conducted under the assumption of a flat pitched roof. A high resolution Digital Surface Model (DSM) was required to derive roof slopes. Unfortunately, Toronto Open Data indicated that a DSM of this type does not currently exist as open data - although there is much advocacy from city mapping divisions.

## Data sources:

* City of Toronto Open Data Catalogue: [Contains data licensed under the Open Government Licence](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4a37e03bb8d1e310VgnVCM10000071d60f89RCRD)
	* [3D Massing (Building Polygons)](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d431d477f9a3a410VgnVCM10000071d60f89RCRD)
    * [Green Roof Permits](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=0abdfa24d5e83310VgnVCM1000003dd60f89RCRD)
	* [Rain Gauge Locations & Water Collected](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d1e36d83664bd410VgnVCM10000071d60f89RCRD)

* Toronto and Region Conservation Authority:
    * [Watershed Shapefiles](http://www.trca.on.ca/the-living-city/watersheds/)
	
* ArcOnline Scene Layers:
	* Global Total Annual Precipitation Layer - WorldClim BioClimatic Variable BIO12
	* Global Predicted Annual Precipitation Change 2050 Layer - CCAFS-Climate
	
* References:
	* Toronto Open Data
	* Toronto and Region Conservation Authority
	* City of Toronto
	* [Runoff Calculations](http://www.friendsoflittlehuntingcreek.org/description/roof.htm)
	* [Average Roof Runoff Coefficients](http://www.bae.ncsu.edu/greenroofs/GRHC2005paper.pdf)

**NOTE/DISCLAIMER:** *Spatial COGnition is not affiliated with any of the organisations or programs presented in this app. The app was made for educational purposes in conjunction with the 2016 ECCE App Challenge. In its current state, this app is a prototype and all values/calculations are purely estimates. In its current state, this app will work in all major browsers: Chrome, Firefox, and IE.*
