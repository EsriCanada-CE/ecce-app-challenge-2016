<?php

$csv = array_map('str_getcsv', file('uas_db.csv'));

$lengthArray = sizeof($csv);


$level = $_GET['level'];


// Top of KML File ========================================================================================================================================================
$kml = array('<?xml version="1.0" encoding="UTF-8"?>');
$kml[] = '<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">';
$kml[] = ' <Document id="arts" xsi:schemaLocation="http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd http://www.google.com/kml/ext/2.2 http://code.google.com/apis/kml/schema/kml22gx.xsd">';
$kml[] = ' <name>Montreal_UAS</name>';

$kml[] = ' 	<Style id="high">';
$kml[] = ' 	<IconStyle>';
$kml[] = ' 		<color>ffffffff</color>  ';
$kml[] = ' 		<colorMode>normal</colorMode> ';
$kml[] = ' 		<scale>1</scale>';
$kml[] = '      <heading>0</heading>';
$kml[] = ' 		<Icon>';
$kml[] = ' 			<href>http://www.accessmtl.ca/images/icons/high.png</href>';
$kml[] = ' 		</Icon>';
$kml[] = ' 	</IconStyle>';
$kml[] = ' 	</Style>';

$kml[] = ' 	<Style id="med">';
$kml[] = ' 	<IconStyle>';
$kml[] = ' 		<color>ffffffff</color>  ';
$kml[] = ' 		<colorMode>normal</colorMode> ';
$kml[] = ' 		<scale>1</scale>';
$kml[] = '      <heading>0</heading>';
$kml[] = ' 		<Icon>';
$kml[] = ' 			<href>http://www.accessmtl.ca/images/icons/med.png</href>';
$kml[] = ' 		</Icon>';
$kml[] = ' 	</IconStyle>';
$kml[] = ' 	</Style>';

$kml[] = ' 	<Style id="low">';
$kml[] = ' 	<IconStyle>';
$kml[] = ' 		<color>ffffffff</color>  ';
$kml[] = ' 		<colorMode>normal</colorMode> ';
$kml[] = ' 		<scale>1</scale>';
$kml[] = '      <heading>0</heading>';
$kml[] = ' 		<Icon>';
$kml[] = ' 			<href>http://www.accessmtl.ca/images/icons/low.png</href>';
$kml[] = ' 		</Icon>';
$kml[] = ' 	</IconStyle>';
$kml[] = ' 	</Style>';
//  ************************** Buildings that are monitored ******************************
for ($i=1;$i<$lengthArray;$i++) {
	
$metaScore[$i] =  $csv[$i][7] +  $csv[$i][8] +  $csv[$i][9] +  $csv[$i][11] +  $csv[$i][12] +  $csv[$i][13] +  $csv[$i][4] +  $csv[$i][16] +  $csv[$i][17] +  $csv[$i][19] +  $csv[$i][20] +  $csv[$i][21];

// if  there are no stairs add a point to metaScore
if ($csv[$i][10] == "0")
{
	$metaScore[$i]++;	
}
//if there is a large washroom add two points to metaScore
if ($csv[$i][15] == "l")
{
	$metaScore[$i]++;
	$metaScore[$i]++;	
}
//if there is a medium washroom add one point to metaScore
if ($csv[$i][10] == "m")
{
	$metaScore[$i]++;	
}
//if there is a bilingual service add one point to metaScore
if ($csv[$i][18] == "b")
{
	$metaScore[$i]++;	
}

if ((($level == "high") && ($metaScore[$i] > 11)) || (($level == "med") && (($metaScore[$i] <= 11) &&($metaScore[$i] > 6))) || (($level == "low") && ($metaScore[$i] <= 6)) || ($level == "all"))
{

$kml[] = ' 	<Placemark id="' . $csv[$i][2] .'">';
$kml[] = ' 		<name>' . $csv[$i][2] . '</name>';
// description balloon info here
$kml[] = '			<description><![CDATA[<html xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:msxsl="urn:schemas-microsoft-com:xslt"> ';
$kml[] = ' 	<body> ';
$kml[] = '	<h1>' . $csv[$i][2] .'</h1>';
$kml[] = '	<i>' . $csv[$i][1] .'</i><br><br>';
$kml[] = '    <b>Description:</b> <br>';
$kml[] = '    ' . $csv[$i][28] .'';
$kml[] = '    <br><br>';
$kml[] = '    <b>Telephone:</b>' . $csv[$i][24] .'<br>';
$kml[] = '    <b>Address:</b> <br>';
$kml[] = '    ' . $csv[$i][3] .'<br>';
$kml[] = '    ' . $csv[$i][5] .', ' . $cs[$i][6] .'<br>';
$kml[] = '    ' . $csv[$i][4] .'';
$kml[] = '    <br><br>';
$kml[] = '    <img width="200" src="http://www.accessmtl.ca/images/accessMTLbanner400x50.png">';

//Accessibility values
$kml[] = '<table>';
$kml[] = '  <tr>';
$kml[] = '    <th bgcolor="#D2D200">Category</th>';
$kml[] = '    <th bgcolor="#D2D200">Rating</th>';
$kml[] = '    <th bgcolor="#D2D200">Category</th>';
$kml[] = '    <th bgcolor="#D2D200">Rating</th>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#F9FEBC">Automatic Door</td>';
$kml[] = '    <td>' . $csv[$i][7] .'</td>';
$kml[] = '    <td bgcolor="#F9FEBC">Steps to Door</td>';
$kml[] = '    <td>' . $csv[$i][10] .'</td>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="##F9FEBC">Entrance Ramp</td>';
$kml[] = '    <td>' . $csv[$i][8] .'</td>';
$kml[] = '    <td bgcolor="#F9FEBC">Elevator</td>';
$kml[] = '    <td>' . $csv[$i][11] .'</td>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#F9FEBC">Street Entrance</td>';
$kml[] = '    <td>' . $csv[$i][9] .'</td>';
$kml[] = '    <td bgcolor="#F9FEBC"></td>';
$kml[] = '    <td></td>';
$kml[] = '  </tr>';
$kml[] = '</table>';


//Washroom values
$kml[] = '<table>';
$kml[] = '  <tr>';
$kml[] = '    <th bgcolor="#11B1EE">Category</th>';
$kml[] = '    <th bgcolor="#11B1EE">Rating</th>';
$kml[] = '    <th bgcolor="#11B1EE">Category</th>';
$kml[] = '    <th bgcolor="#11B1EE">Rating</th>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#B5F8FB">Street Level</td>';
$kml[] = '    <td>' . $csv[$i][12] .'</td>';
$kml[] = '    <td bgcolor="#B5F8FB">Size</td>';
$kml[] = '    <td>' . $csv[$i][15] .'</td>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#B5F8FB">Safety Rails</td>';
$kml[] = '    <td>' . $csv[$i][13] .'</td>';
$kml[] = '    <td bgcolor="#B5F8FB">Family Room</td>';
$kml[] = '    <td>' . $csv[$i][17] .'</td>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#B5F8FB">Gender Neutral</td>';
$kml[] = '    <td>' . $csv[$i][14] .'</td>';
$kml[] = '    <td bgcolor="#B5F8FB">Change Table</td>';
$kml[] = '    <td>' . $csv[$i][16] .'</td>';
$kml[] = '  </tr>';
$kml[] = '</table>';

//Inclusivity Values
$kml[] = '<table>';
$kml[] = '  <tr>';
$kml[] = '    <th bgcolor="#6BCB32">Category</th>';
$kml[] = '    <th bgcolor="#6BCB32">Rating</th>';
$kml[] = '    <th bgcolor="#6BCB32">Category</th>';
$kml[] = '    <th bgcolor="#6BCB32">Rating</th>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#D7F0A2">Language</td>';
$kml[] = '    <td>' . $csv[$i][18] .'</td>';
$kml[] = '    <td bgcolor="#D7F0A2">Helpful Staff</td>';
$kml[] = '    <td>' . $csv[$i][19] .'</td>';
$kml[] = '  </tr>';
$kml[] = '  <tr>';
$kml[] = '    <td bgcolor="#D7F0A2">Braille</td>';
$kml[] = '    <td>' . $csv[$i][20] .'</td>';
$kml[] = '    <td bgcolor="#D7F0A2">Family Friendly</td>';
$kml[] = '    <td>' . $csv[$i][21] .'</td>';
$kml[] = '  </tr>';
$kml[] = '</table>';
$kml[] = '    <br><br><b>Meta Score:</b>' . $metaScore[$i] .'<br>';

$kml[] = ' 		</body> ';
$kml[] = ' 		</html>]]> ';
$kml[] = '		</description>';

// assign to the green high icon
if ($metaScore[$i] > 11)
{
	$kml[] = '<styleUrl>#high</styleUrl>';;	
}
// assign to the yellowish med iconre
if (($metaScore[$i] <= 11) &&($metaScore[$i] > 6))
{
	$kml[] = '<styleUrl>#med</styleUrl>';
}
// assign to the red low icon
if ($metaScore[$i] <= 6)
{
	$kml[] = '<styleUrl>#low</styleUrl>';;	
}
$kml[] = ' <Point>';
$kml[] = '     <coordinates>' . $csv[$i][26] . ',' . $csv[$i][27] . ',0 </coordinates>';
$kml[] = ' </Point>';
$kml[] = '</Placemark>';
$kml[] = ' ';
}}

$kml[] = ' </Document>';
$kml[] = ' </kml>';
// close .kml document
$kmlOutput = join("\n", $kml);
header('Content-Disposition: attachment; filename="Montreal_UAS.kml"');
echo $kmlOutput;

?>