# ReadMe

## Team members:

* Zhuojun (Zoe) Wang
* Zhiwei (Iris) Yan
* Weiya (Victoria) Ye

## Introduction:

¡°Where is Water¡± aims at helping people find tap water sources in Waterloo Region. In most cases, people would prefer bottle water rather than fountain just because they do not know the nearest fountain. Under this circumstance, many plastic bottles are produced. With the help of our web app, people can use potable water to meet their needs; therefore, we can reduce the amount of used bottle, which will relieve environmental stress.
This web app has three main functions: find the service area of a specific tap water, find the directions to users¡¯ desired water source, locate future tap water. For the first function, we use network analysis to calculate service area. User can first specify the exact water source and then choose 200, 500, or 1000 meters as the desired distance. For the second function, users can choose points by clicking on map to find the direction between their location and desired water source. For the third function, we use spatial join to find tap-water-clustered area for future investment¡¯s reference. 

## To install this app:

Download the "____.zip" file from GitHub, unzip it, and deploy it on your webserver. 

## Limitations and Known Issues:
*	The data obtained from Region of Waterloo is not up-to-date. There might be some inconsistency between our data and the data displayed on http://www.bluew.org/.
*	Due to time limitation and technical difficulties, our app only serves the basic functions without providing a user-friendly interface. For example, if user wants to route to the nearest tap water location, he/she has to acquire current location first by clicking ¡°Current Location¡±, then use ¡°Direction¡± to route.
*	The Waterloo server on which we published our routing service can not be accessed through network outside University of Waterloo. Therefore, we still use the ArcGIS REST API for routing service. 

## Data sources:
* Points of interest: Blue W location dataset in waterloo region from Region of Waterloo (http://www.regionofwaterloo.ca/en/index.asp)
* Road network: Road network files of 2015 in shapefile from Statistics Canada (http://www.statcan.gc.ca/start-debut-eng.html)
* Regional boundary: Regional municipal boundaries in shapefile from Region of Waterloo (http://www.regionofwaterloo.ca/en/index.asp)


