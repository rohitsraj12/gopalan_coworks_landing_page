<?php
if(isset($_POST['email'])){
    // message from
    $user_name = $_POST['name'];
    $user_phone = $_POST['phone'];
    $user_email = $_POST['email'];
    $user_location = $_POST['location'];
    $user_company = $_POST['company'];
    $num_of_seats = $_POST['seats'];

    // $to = "degitalmarketing@gopalanenterprises.com";
    $to = "marketing@gopalancoworks.com";
    $subject = "Search Ads - Coworks";
    $message = "<p>Enquiry</p></br>";
    $message .= "<p> name: <strong>". $user_name ."</strong></p></br>";
    $message .= "<p> phone number: <strong>". $user_phone ."</strong></p></br>";
    $message .= "<p> email: <strong>". $user_email ."</strong></p></br>";
    $message .= "<p> Selected project: <strong>". $user_location ."</strong></p></br>";
    $message .= "<p> Our company name: <strong>". $user_company ."</strong></p></br>";
    $message .= "<p> Number of seats required: <strong>". $num_of_seats ."</strong></p></br>";
    $message .= "<p>Thank you,</p>";
    $message .= "<p>". $user_name ."</p>";
    $message .= "<p>" . $user_email . " | " . $user_phone . "</p>";
    
    $headers = "From:" . $user_name . " <" . $user_email . ">\r\n";
    $headers .= "Reply-To: " . $user_email . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    mail($to, $subject, $message, $headers);

    header("location:thank-you.html");
}
?>