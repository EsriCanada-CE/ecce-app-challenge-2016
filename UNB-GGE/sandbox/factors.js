/**
Name		: Name
Shape_Leng	: Name	x
Shape_Area	: Name	x
PotableWat	: Potable Water(Health)
KM_WalkTra	: Walking Trails(Health)
Population	: Population
PopDensity	: PopDensity
WasteWater	: Waste Water(Environment)
Area_Parks	: Parks(Environment)
Area_sqKM	: Name	 x
Percent_Pa	: Name	?
KM_Rd	    : Roads(Economic)
NumBuildin	: Buildings(Economic)



 Area_Parks = area, in sq km parks.
 KM_Rd      = Length, KM of road
 KM_WalkTra = Lenght, km of walking trails
 Transit_Ar = area (sq km) of Transit coverage (400m buffer around bus stops)
 Build_sqkm = buildling footprint, sqkm
 NumBuildin = count/number of buildings
 NumResiden = count of just residential buildings
 Percent_Pa = % area of Parkland
 Perc_WaTra = % area of walking trails
 Perc_Trans =  % area covered by transportation
 Perc_Build =   % area covered by buildings
 Perc_Rds =% area covered by roads (assumed roads 6m width)
 GreenRatin = attempt ata computing 'greeen' rating.

 Pop_.. under 16, 16 to 65 and Over 65
 EnviroWeig = computed weight of environmental factors.

 value          :cat  desc

 WasteWater    :env   Age of Pipes (Sewage)
 PotableWat    :env   Age of Pipes (Drinking Water)
 KM_WalkTra    :env   Length of Walking Trails(km)
 Percent_Pa    :env   Percent Parkland
 Perc_Trans    :env   Percentage of Block Serviced By Public Transportation

 Population    :soc   Population
 PopDensity    :soc   Population Density
 Pop_O65       :soc   Population of >= 65 Years
 NumResiden    :soc   Number of Residential Buildings

 KM_Rd         :eco   Length of Roads(km)
 NumBuildin    :eco   Number of Buildings
 Perc_Build    :eco   Percentage of Builtup Area

 GreenRatin    :gs   Green Space Rating




 EnviroWeig    :
 SocialWeig    :
 EconWeigh     :
