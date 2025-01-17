<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Resiroom New User</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400..800&display=swap" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="common.css">
    </head>
    <body>
        <?php

        // Set connection params
        $servername = "localhost"; // server name
        $username = "root"; // XAMPP uses 'root' by default
        $password = ""; // No password by default
        $dbname = "resiroom"; // Database name
        $tablename = "users"; // Table name

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error)
        {
            die("Failed connection: " . $conn->connect_error);
        }

        // Taking values from the form
        $name =  $_REQUEST['name'];
        $surname = $_REQUEST['surname'];
        $mail =  $_REQUEST['mail'];
        $phone = $_REQUEST['phone'];
        $message = $_REQUEST['message'];

        // Inserting values to the table
        $sql = "INSERT INTO $tablename (name, surname, mail, phone, message) VALUES ('$name','$surname','$mail','$phone','$message')";
        
        // Validation control
        if ($conn->query($sql))
        {
            echo "<h3>data stored in [$dbname]->[$tablename] successfully."; 
        }
        else
        {
            echo "ERROR: Hush! Sorry $sql. " . mysqli_error($conn);
        }
        
        // Close connection
        $conn->close();
        ?>
    </body>
</html>