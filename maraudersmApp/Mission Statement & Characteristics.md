#Mission Statement
----
Potential2Grow-Edmonton is a webapp that allows local Edmonton residents to visualize and inform themselves of the potential for 
Urban farming in their community. Urban Farming, which is the process of cultivation, processing and distribution of locally grown
food within an urban environment. Urban Agriculture in Canada has taken to form of a social movement to promote organic food 
production and sustainable cities. The movement is rooted in promoting commmunity holism and environmentally friendly development
of vacant land. Additionally, the ability to provide local fresh food through urban farming can be associated with improvements 
in food security.


#WebApp Characteristics
----
**Unique Functionality**

"Potential2Grow - Edmonton" is an app designed to supplement a user's interest in Urban Agriculture through an interactive web app. 
The app allows the user to identify their neighbourhood (or a neighbourhood of interest) through an interactive map. 
Once selected, a user is taken to an interactive map of their neighbourhood displaying all buildings and houses present. 
The user is then able to investigate the potential of an area in their neighbourhood as an Urban Garden by drawing out the layout 
of the garden. The app then provides the growing potentials for the area drawn including the quantity of produce that can be
recovered from the area and the basic irrigattion requirements to sustain such production. The User may then recieve the option 
to investigate the potential of nearby buildings to act as rain-water collectors by clicking on building rooftops.

**Location and Scope**

Edmonton as a city, frequently ranks among the highest in Canada for sutainable development acitivties and open data policies. 

For
this reason. In 2012, the city approved the "Fresh" intiative to promote this cause. 
"Fresh" is a high level strategy that will help guide Edmonton towards the vision of “a resilient food and agriculture system 
that contributes to the local economy and the overall cultural, financial, social and environmental sustainability of the city.”
It is through the development of this Esri WebApp, that local Edmonton residents can see the potential benefits Urban Agriculture
can provide their communities.
Edmonton's robust open data portal was utilized for this App. The portal, which consists of nearly 1000 datasets, is the largest in canada and provides a wealth of information for public usage. 

**Development & Data Creation**

The app is scratchbuilt utilizing the Esri Leaflet Api.
A rain map is required to determine estimated precipitation for catchment by rain harvesters.
To do this, rain-gauges datasets are averaged over 6 years and an interpolated rain map is generated to estimate growing season precipitation across the city.
Individual webpages for each neighbourhood are created to minimize processing power required to run the app and increase efficiency. To deal with the sheer scale of the Neighbourhood and Rooflines shapefiles, Esri ArcGIS was utilized to break down the file into individual shapefiles by neighbourhood. Indivdual catchment statistics are calculated for each building in every neighbourhood and recorded as attributes.
A custom python script was developed to convert the 383 indivual neighbourhood and 383 roofline files to json, and generate linked individual webmaps which included custom built Potential2Grow calculator (Based off the Esri Leaflet-Measure Area Tool). The script was designed to fully recreate the User Interface, architecture for each neighbourhood by linking them to the master neighbourhood map on the main page.
Custom instructional infographics and icons are created using PiktoChart and Microsoft Powerpoint.


 
