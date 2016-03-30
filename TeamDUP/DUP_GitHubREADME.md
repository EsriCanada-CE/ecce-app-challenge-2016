Providing public access to GIS technologies: Modelling 5 metre predicted sea level rise impacts in HRM, by
Dalhousie Team DUP (Dal Urban Planning)

ECCE App Challenge 2015
=======================

**Team members**

Steve Collyer

Amy Greenberg

##  Mission Statement 
This app is intended to display various items found within the 5-metre contour of a user-specified coastal
community in Halifax Regional Municipality, Nova Scotia. The app is meant to provide an inventory list of 
anything that might be affected by the 2100 projected sea level rise of 5 metres.
Importance of the App

##  App Importance
In theory, users of the app would determine what will possibly be affected by sea level rise. For example,
bus routes may need to be rerouted; civic addresses can indicate who may need to relocate inland in the future;
buildings that may be partially submerged, etc. The user would gather this inventory to proactively plan for 
climate change and associated sea level rise in his or her community. For example, if a major bus route is to
be underwater in 2100, an urban planner can use this app to see which portion of the route would need to be
modified and rerouted. The use of this app would also enable a member of the chosen community to determine whether
his or her house will be impacted, upon which he or she would start looking for a new home further inland. 

## App download an installation
Unnecessary for this app - can be used on any web browser with internet access.

## How to use the app
* click around the map to see what coastal communities might be affected by sea level rise.
* click the geoprocessing service widget (top icon, top left corner)
* an input box will pop up - enter "GSA_NAME" = 'COMMUNITY' and click ok
* wait patiently
* map will automatically zoom in to the selected community, displaying all possible items that might be affected
* at the bottom of the map extent, you can click the white little arrow that will bring up the attribute table
  (contains all attribute information regarding anything that has been clipped to the selected community)
* the Options tab in this attribute table will give you opportunity to download the entire attribute table in
  CSV format.

##  Limitations and Known Issues
* since we performed a clip using the chosen study area as the clipping feature, any building that falls slightly
out of or on the boundary will be "cut in half"--however, it would still indicate that a portion of the building 
will be affected, resulting in a need to consider that selected building, regardless of the building being fully
displayed. 
* we were mapping elevations that are 5 metres or lower. However, this requirement may result in a selection of
areas found inland that are at an elevation of 5 metres, which should not be considered in a sea level rise
analysis.
* Other areas that may be found at a different elevation but are directly connected to the ocean
were not included in this analysis, because this information is not accessible as open data.
* Data are older than 2016

##  Assumptions
* Sea level rise in 2100 will be 5 metres
* all coastal communities will be affected by sea level rise to some degree
* all data is complete and accurate (or of minimal error)

## Data sources
* GeoNOVA
* Halifax Open Data
