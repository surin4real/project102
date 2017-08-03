<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once('Stripe/init.php');
\Stripe\Stripe::setApiKey('sk_test_dyvRfO7oLDaT6VA9ICuuzfZm');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
try {
  $charge = \Stripe\Charge::create(array(
  "amount" => $request->amount,
  "currency" => "usd",
  "card" => $request->token,
  "description" => "Charge for Facebook Login code."
));
//you can send the file to this email:
header("Content-type: application/json", true);
//echo $_POST['stripeEmail']; , 'email'=>$_POST['stripeEmail']
echo json_encode(array('message'=>'SUCCESS: $'.substr($request->amount, 0, -2).' has been charged from your card!'));
}
//catch the errors in any way you like

catch(Stripe_CardError $e) {
	echo json_encode(array('message'=>'Error: Card declined! Please check card details or use another card!'));
}


catch (Stripe_InvalidRequestError $e) {
// Invalid parameters were supplied to Stripe's API
echo json_encode(array('message'=>'Error: Card declined!: Authentication Error!'));

} catch (Stripe_AuthenticationError $e) {
// Authentication with Stripe's API failed
// (maybe you changed API keys recently)
echo json_encode(array('message'=>'Error: Card declined!: Authentication!'));

} catch (Stripe_ApiConnectionError $e) {
  echo json_encode(array('message'=>'Error: Card declined!: Network Problem. Try Again'));
// Network communication with Stripe failed
} catch (Stripe_Error $e) {
  echo json_encode(array('message'=>'Error: Card declined!: Check Credentials! '));
// Display a very generic error to the user, and maybe send
// yourself an email
} catch (Exception $e) {
 echo json_encode(array('message'=>'Error: Card declined!: Something is wrong! Please contact Us.'));
// Something else happened, completely unrelated to Stripe
}

?>