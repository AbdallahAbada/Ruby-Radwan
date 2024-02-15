<?php
// Check if the form was submitted using POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize form inputs
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Invalid email address
        echo "Invalid email address.";
        exit;
    }

    // Your email address where you want to receive inquiries
    $to = "rubyradwantherapy@gmail.com";
    // $to = "abdallah.abada.1993@gmail.com";

    // Email subject
    $subject = "New Inquiry from Website";

    // Email headers
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Email message
    $message_body = "Name: $name<br>";
    $message_body .= "Email: $email<br><br>";
    $message_body .= "Phone: $phone<br><br>";
    $message_body .= "Message:<br>$message";

    // Send the email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent. Please try again later.";
    }
} else {
    // Display a message or take other appropriate action
    echo "This page should not be accessed directly.";
}
?>
