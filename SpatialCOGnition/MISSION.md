Mission Statement – *Building* Resilience
==================
TEAM: Spatial COGnition (NSCC COGS)
==================

**Members:** 
* Alexandra Everett 
* Jean-Yves Landry 
* Jeffrey Sutherland

**Building Resilience Demonstration Video**
* [Click here to view video on Youtube](https://www.youtube.com/watch?v=EKAS3ANjj2I&feature=youtu.be)

**App Rationale and Background**
* Under current climate change scenarios, the International Panel on Climate Change (IPCC) projects the increased frequency and intensity of major storm/precipitation events. Storm-water and runoff management already present massive challenges for hardened, urban environments - especially those with inadequate and aging sewer infrastructure. As such, modern storms of unprecedented intensity have the ability to cripple underprepared cities. 

* Such was the case on July 8, 2013 in Toronto, Canada – a massive precipitation event (126mm in a few hours) and flash flood cost the city $65 million and nearly $850 million in insured property damages. It is also estimated that over a billion litres of untreated sewage was displaced into the streets and Lake Ontario. To bolster the city’s resilience to these types of events, the City of Toronto has developed a variety of storm-water management initiatives. One such initiative seeks to promote the construction of green roofs – Toronto became the first city in North America to instate a bylaw, mandating green roofs on new, large-scale developments. Green roofs of varying scales assist in citywide storm-water retention, helping to lessen the runoff load on natural watercourses and city sewer systems. Previously in 2009, the city established the Eco-Roof Incentive program to subsidize the construction of urban green roof infrastructure. However, the limiting factors in widespread green roof implementation are costs and public knowledge… this is where our app, Building Resilience, comes in.

**Mission Statement**
* Building Resilience is an educational story map and web application that seeks to complement the City of Toronto’s Eco-Roof Incentive Program. Broadly, the app seeks to educate citizens of Toronto on the storm-water management and potential ramifications imposed by anthropogenic climate change. More specifically, it targets building developers and residents in the City of Toronto, providing cost and benefit estimates of potential green roof projects. 

**Statement of Characteristics**
* **Educational Story Map** - the overarching app uses ESRI’s Map Series Story Map interface to educate users on the link between climate change, storm-water management, and green roof construction. This story map can be utilized by the City of Toronto or the Toronto Region Conservation Authority to educate the public on green roofs and storm-water management. This story map contains a few interactive maps created using open data relevant to this theme: a map displaying rain gauges and water collected across the City of Toronto on July 8, 2013; an updateable map showing all green roof permits issued under the City of Toronto green-roof by-law.
* **Customized Green Roof Measurement App/Widget** - our green roof tool leverages and customizes the existing ESRI measurement widget. As a web app located within the Story Map, this tool/map provides the user with estimates of financial costs, Eco-roof Incentive Program contribution, and hydrological benefits (runoff reduction) pertaining to a potential green roof venture. This web app contains custom html, css, and javascript that can be hosted and placed within a slide of the overarching story map, or hosted independently.  
* **Open Data** - our educational content and web app draw upon a variety of Toronto-based open data sources. The main data elements are listed below:
    * 3D Massing shapefile provided by Toronto Open Data to display and calculate the area of building/roof footprints in city limits. The building shapefile attributes were modified in ArcMap 10.3.1 and new fields were calculated including runoff.
    * Rain Gauge Location and Water Collected shapefile provided by Toronto Open Data to display rain gauge locations and water collected as point features on July 8, 2013.
    * Toronto Watersheds shapefile provided by the Toronto Region Conservation Authority (TRCA) to display watershed area across the City of Toronto.
    * Toronto Building Permits – Green Roofs shapefile provided by Toronto Open Data to display assessed green roof permits as per the Green Roof By-law adopted by Toronto City Council May 2009 under the authority of section 108 of the City of Toronto Act.
	* Global Total Annual Precipitation Scene Layer - Accessed publically through ArcOnline.
	* Global Predicted Annual Precipitation Change 2050 Layer - Accessed publically through ArcOnline.
