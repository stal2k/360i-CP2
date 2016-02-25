<?php
// set up the connection variables
$db_name  = 'URL';
// $servername = 'ATL02ADHD02.searchignite.local\ANALYTICSPROD';
$servername = '10.120.103.11\ANALYTICSPROD';
$username = 'APIUrl';
$password = '$c0ringURL';

// connect to the database
$dbh = new PDO("dblib:host=$servername;dbname=$db_name;charset=ISO-8859-1", $username, $password);
$dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );

// the SQL query
$sql = "SELECT CAST(one.JobID AS varchar(5)) AS JobID, one.FileName AS FileName, CAST(one.Submitter AS text) AS Submitter, CAST(one.Company AS text) AS Company, CAST(one.Description AS text) AS Description, one.Status, two.RequestDate, two.ScheduleType FROM SocialAPIResultPageSpeedInsightsJobs AS one LEFT OUTER JOIN SocialAPIRequestPagespeedInsights AS two ON one.jobID=two.jobID GROUP BY one.JobID, one.FileName, one.Submitter, one.Company, one.Description, one.Status, two.RequestDate, two.ScheduleType ORDER BY one.JobID DESC";

// use prepared statements
$stmt = $dbh->prepare( $sql);

// execute the query
$stmt->execute();

// fetch the results into an array
$result = $stmt->fetchAll( PDO::FETCH_ASSOC );

// convert to json
$json = json_encode( $result );

// echo the json string
echo $json;
?>