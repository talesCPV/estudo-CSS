<!DOCTYPE html>
<html>
<head>
	<title>teste JSON</title>
</head>
<body>
	<?php

		$json_file = file_get_contents("menu.json");

		echo($json_file ."<br>");

//		var_dump(json_decode($json_file));

//		var_dump(json_decode($json_file, true));

		$json_str = json_decode($json_file, true);

//		echo($json_str['sessoes'][0]['modulo']);


		foreach ( $json_str['sessoes'] as $e ) 
    		{ echo ($e['modulo']."<br>"); } 



	?>

</body>
</html>