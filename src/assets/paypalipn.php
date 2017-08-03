<?php
//use overint\PaypalIPN;
require_once('PaypalIPN.Class.php');
$ipn = new PaypalIPN();
$ipn->useSandbox();
$verified = $ipn->verifyIPN();
if ($verified){
	//process IPN
  $txn = $_POST['txn_id'];
  $filename = $txn.".txt";
  $myfile = fopen($filename, "w") or die("Unable to open file!");
  $txn_w = "Transaction ID: ".$txn."\n";
  fwrite($myfile, $txn_w);
  $cost = 'Cost: '.$_POST['mc_gross']."\n";
  fwrite($myfile, $cost);
  $title = 'Title: '.$_POST['item_name']."\n";
  fwrite($myfile, $title);
  $id_num = 'Item Number: '.$_POST['item_number']."\n";
  fwrite($myfile, $id_num);
  fclose($myfile);
}

?>