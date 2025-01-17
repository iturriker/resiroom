<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Resiroom User Info</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400..800&display=swap" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="common.css">
        <link rel="stylesheet" type="text/css" href="extract.css">
    </head>
    <body>
        <?php

        // Set connection params
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "resiroom";
        $tablename = "users";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error)
        {
            die("Failed connection: " . $conn->connect_error);
        }

        // SQL query -> Select all from table
        $query = "SELECT * FROM $tablename;";

        // Fetching data from database
        $result = $conn->query($query);

            if ($result->num_rows > 0)
            {
                ?>
                    <table>
                        <caption><?php echo $tablename ?></caption>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>first name</th>
                                <th>last name</th>
                                <th>gender</th>
                                <th>address</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                while($row = $result->fetch_assoc()) // Output data from each row
                                {
                                ?>
                                    <tr>
                                        <td><?php echo $row['id']?></td>
                                        <td><?php echo $row['name']?></td>
                                        <td><?php echo $row['surname']?></td>
                                        <td><?php echo $row['mail']?></td>
                                        <td><?php echo $row['phone']?></td>
                                        <td><?php echo $row['message']?></td>
                                    </tr>
                                <?php
                                }
                            ?>
                        </tbody>
                    </table>
                <?php
            }
            else
            {
                echo "0 results";
            }

        // Close connection
        $conn->close();
        ?>
    </body>
</html>