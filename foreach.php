<?php

// $array1=array("B00OKL4P0O","B00OKL4P0R","B00OKL4P0S","B00OKL4P0T","B00MIASDA","B00MIASDT");
// $array2=array("B00OKL4P0S","B00MIASDA","B00OKL4P0O");
// foreach( $array1 as $value ){
//      if(array_search($value, $array2, true)){
//         array_push( $array2, $value );

//     }
// 	echo "<BR>";
// 	print_r($value);
// 	else{
	
// 	print_r($value);
// 	}
// }

$arr1 = ['1','2','3'];

foreach($arr1 as $value) {

	if (strpos($value,'1') > 0){
		echo " OK";
	}else {
		echo "Not";
	}
	print_r($value);
	echo "<br>";
}
?>