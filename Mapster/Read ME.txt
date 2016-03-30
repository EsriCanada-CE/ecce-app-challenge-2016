SolarSaver by Mapster - ECCE App Challenge 2016 
===================
-------------------------------
####  Team Members: Stephane Bowen, Sean Thibert, and Joel Jeyarajah

------------------------------------
How to use SolarSaver
======

####**To install this app:**
Download the SolarSaver.zip file in the root of this repository, and unzip it. The files can be reviewed, and the app should launch with the Index.html file. If not, add the zipped folder to Web AppBuilder for Developers, and launch from there. If the Solar Calc widget is not automatically added upon launch, then please add it before continuing. 


####**Select your House**

Upon launch, users are presented with a welcome message instructing them to find their house on the map, and select it. A popup will present them with a base estimate of their savings, and the values that were used to calculate it. 


#### **Refine your Estimate**

Should the user have more accurate numbers for their home, they will have the chance to refine the initially calculated estimate. Our custom built Solar Calculator widget is accessible through the side tab, and automatically fills in the necessary fields using data from the selected home. Upon choosing more accurate settings, the annual savings value will automatically update. 

####**Learn More**

By clicking on the 'Learn More' tab, users are presented with some information about the benefits of installing rooftop solar panels. Educational and informative links tailored to Halifax are provided, so that interested individuals can continue with their own research. 

####**Find a Dealer**
SolarSaver seeks to connect eligible homeowners with local businesses that will help them on their solar journey. Company locations can be viewed on the map, and a list containing contact information for Halifax solar installation businesses is available. 

----------

What makes SolarSaver unique is that it takes advantage of open data to provide users with an estimate that is specific to their homes. The data and processes used to create the tool are shown below:

>**Open Data**
> - A 1m LiDAR-generated Digital Surface Model (DSM) of the Halifax Regional Municipality was acquired from the [Halifax Open Data][9] portal. 
> - Building polygons were also acquired from this source, and were reprojected to match the DSM.
> - [Solar irradiation data][10] for the Halifax area was derived from Natural Resources Canada.
>- Rooftop solar potential calculations were taken from Photovoltaic-Software.com's free [Excel Spreadsheet][11]. 


>**Spatial Analysis**
> The DSM was added to ArcMap, and the *Aspect* tool was used to derive the aspect from the raster surface. A formula was applied to calculate optimal aspect direction to determine eligible rooftop area for solar panels. The raster surface was converted to polygons, so that area for each aspect direction could be calculated. The *Spatial Join* tool was used to merge these polygons to the Building polygons. Finally, the field calculator and summary statistics were used to create the final base polygon layer for the ArcGIS Online web map to be used in the SolarSaver app. The entire workflow can be visualized below.
> 
> ![Spatial Analysis Workflow](https://lh3.googleusercontent.com/-mhyqdiqsQqY/VtiUi7-hGoI/AAAAAAAABMw/aMAMSUBp9KE/s0/Model.JPG "Spatial Analysis Workflow")

>**ArcGIS API for Javascript**
>The majority of the functionality of the SolarSaver App comes from the customized Solar Calculator Widget. The layout comes from Dijit Tab Container toolkit. This lays out three different pages (Solar Calculator, Learn More, and Contact a Supplier) which are controlled by three tabs at the top of the widget container. 
>
>The Calculator can be used as a stand alone function or in sync with  layers in a Web Map. Esri's API LayerInfos facilitates the data transmission between the two elements.  The Annual Savings and Energy Generated values are linked to the five different input parameters which can be accessed through the Widget or the map itself, and the values automatically re-calculate through several set up events. The Desired Panel Area parameter can be altered through an onblur event or based on a click event which extracts attributes from the clicked feature on the map. The Panel Direction Index parameter is changed based on the same click event or through an onchange event on the Dijit/Form/Select drop-down menu. The remaining three parameters are solely based on user inputted values as location specific information was not available through open data portals.  

------
Calculations
-------------
Total annual savings are calculated by multiplying the price of power in Nova Scotia (14.8 cents per kWh) to the total energy generation capabilities of the selected rooftop. 

>**Annual Savings = Generated Energy (kWh) * $0.148 **

Energy generation capabilities are determined using the following equation:

>**E = A * r * H * PR * P**
>Where:
> - E = Energy (kWh)
> - A = Total Eligible Rooftop Surface Area (m²)
> - r = Panel Efficiency (%)
> - H = Annual average irradiation (kWh/m².an)
> - PR = Performance Ratio (%)
> - P = Pitch (%)

Total eligible surface area (A) is calculated by applying weights to the various aspect directions:

> **A = As + Ae + Aw + An**
> Where:
> - As = South-facing area (m²) * 1.00
> - Ae = East-facing area (m²) * 0.86
> -Aw = West-facing area (m²) * 0.87
> -An = North-facing area (m²) * 0.66

Performance Ratio, a measure of potential generation loss, is impacted by the following:

> **PR = I * T * Dc * Ac * S * W * C**
> Where:
> - PR = Performance Ratio (%)
> - I = Inverter Losses (1 - 0.07)
> - T = Temperature Losses (1 - 0.08)
> - Dc = DC cable losses (1 - 0.02)
> - Ac = AC cable losses (1 - 0.02)
> - S = Shading losses (1 - 0.10)
> - W = Weak Irradiation (1 - 0.03)
> - C = Snow cover (1 - 0.10)

------

Assumptions
-------------
For the calculations, a variety of assumptions and default values are included to determine a 'base estimate', which the user can further refine through the Solar Calculator widget. The assumptions and default values are as follows:

> *Annual Savings:*
> **Panel Efficiency (r)** = 15%
> **Annual Average Irradiation (H)** = 1100 kWh/m².an (based on NRCan data)
> 
> *Performance Ratio*
> **Inverter Losses (I)** = 7% annually
> **Temperature Losses (T)** = 8% annually
> **DC Cable Losses (Dc)** = 2% annually
> **AC Cable Losses (Ac)** = 2% annually
> **Shading (S)** = 10% annually (default value)
> **Weak Irradiation (W)** = 3% annually
>
>*Aspect Direction Weights*
> **South-Facing Surface Area Weight** = 100%
> **East-Facing Surface Area Weight** = 86%
> **West-Facing Surface Area Weight** = 87%
> **North-Facing Surface Area Weight** = 66%
>
>*Pitch of Roof Weights*
> **30-45 degree Pitch Weight** = 100%
> **+- 15 degrees from optimal pitch** = 80%
> **+- 15-30 degrees from optimal pitch** = 60%
> **Flat roof** = 100% (assumed the panels will be propped up to optimal angle)

  [9]: http://www.halifax.ca/opendata/
  [10]: http://pv.nrcan.gc.ca/pvmapper.php?LAYERS=2057,4240&SETS=1707,1708,1709,1710,1122&ViewRegion=-2508487%2C5404897%2C3080843%2C10464288&title_e=PV+potential+and+insolation&title_f=Potentiel+photovolta%C3%AFque+et+ensoleillement&lang=e
[11]: http://photovoltaic-software.com/files/PV-power-calculation-basic.xls