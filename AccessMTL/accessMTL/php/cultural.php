<?php
	$today = getdate();
	
//Connect to mySQL info =============================================================
$hostname = "geog506.db.10804641.hostedresource.com";
$username = "geog506";
$dbname = "geog506";
$password = "R3!lly11";
$usertable = "culture";
$yourfield = "name";

//Connect to database
mysql_connect($hostname, $username, $password) OR DIE ("Unable to 
connect to database! Please try again later.");
mysql_select_db($dbname);

//Fetching from your database table.
$query = "SELECT * FROM $usertable";
$result = mysql_query($query);

$i=0;

if ($result) {
	while($row = mysql_fetch_array($result)) {
			$borough[$i] = $row["borough"];
			$type[$i] = $row["type"];
			$name[$i] = $row["name"];
			$address[$i] = $row["address"];
			$postal[$i] = $row["postal"];
			$city[$i] = $row["city"];
			$province[$i] = $row["province"];
			$telephone[$i] = $row["telephone"];
			$internet[$i] = $row["internet"];
			$lat[$i] = $row["lat"];
			$lng[$i] = $row["lng"];
			$desc[$i] = $row["desc"];
			
			

			
			$i++;
			$j++;	
	}
}

// Top of KML File ========================================================================================================================================================
$kml = array('<?xml version="1.0" encoding="UTF-8"?>');
$kml[] = '<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">';
$kml[] = ' <Document id="arts" xsi:schemaLocation="http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd http://www.google.com/kml/ext/2.2 http://code.google.com/apis/kml/schema/kml22gx.xsd">';
$kml[] = ' <name>Montreal_Cultural_Sites</name>';

$kml[] = ' 	<Style id="pinred">';
$kml[] = ' 	<IconStyle>';
$kml[] = ' 		<color>ffffffff</color>  ';
$kml[] = ' 		<colorMode>normal</colorMode> ';
$kml[] = ' 		<scale>1</scale>';
$kml[] = '      <heading>0</heading>';
$kml[] = ' 		<Icon>';
$kml[] = ' 			<href>http://maps.google.com/mapfiles/kml/pushpin/pink-pushpin.png</href>';
$kml[] = ' 		</Icon>';
$kml[] = ' 	</IconStyle>';
$kml[] = ' 	</Style>';

//  ************************** Buildings that are monitored ******************************
for ($i=1;$i<$j;$i++) {
$kml[] = ' 	<Placemark id="' . $name[$i] .'">';
$kml[] = ' 		<name>' . $name[$i] . '</name>';
// description balloon info here
$kml[] = '			<description><![CDATA[<html xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:msxsl="urn:schemas-microsoft-com:xslt"> ';
$kml[] = ' 	<body> ';
$kml[] = '	<h1>' . $name[$i] .'</h1>';
$kml[] = '	<i>' . $type[$i] .'</i><br><br>';
$kml[] = '    <b>Description:</b> <br>';
$kml[] = '    ' . $desc[$i] .'';
$kml[] = '    <br><br>';
$kml[] = '    <a href="' . $internet[$i] .'">Visit the website</a><br>';
$kml[] = '    <b>Telephone:</b>' . $telephone[$i] .'';
$kml[] = '    <br><br>';
$kml[] = '    <b>Borough:</b>' . $borough[$i] .'<br>';
$kml[] = '    <b>Address:</b> <br>';
$kml[] = '    ' . $address[$i] .'<br>';
$kml[] = '    ' . $city[$i] .', ' . $province[$i] .'<br>';
$kml[] = '    ' . $postal[$i] .'';
$kml[] = '    <br><br>';
$kml[] = '    <img width="200" src="http://www.accessmtl.ca/images/accessMTLbanner400x50.png">';
$kml[] = ' 		</body> ';
$kml[] = ' 		</html>]]> ';
$kml[] = '		</description>';
$kml[] = '<styleUrl>#pinred</styleUrl>';
$kml[] = ' <Point>';
$kml[] = '     <coordinates>' . $lat[$i] . ',' . $lng[$i] . ',0 </coordinates>';
$kml[] = ' </Point>';
$kml[] = '</Placemark>';
$kml[] = ' ';
}

$kml[] = ' </Document>';
$kml[] = ' </kml>';
// close .kml document
$kmlOutput = join("\n", $kml);
header('Content-Disposition: attachment; filename="Montreal_Cultural_Site.kml"');
echo $kmlOutput;

?>