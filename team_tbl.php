<?php
    $teamName = $_POST['teamName'];
    $teamLocation = $_POST['teamLocation'];
    $coachName = $_POST['coachName'];
    $teamLogo = $_POST['teamLogo'];

    $conn = new mysqli('127.0.0.1','root','','team_tbl');
    
    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    } else {
        echo "<script>console.log('Database connected successfully');</script>";
        
        $stmt = $conn->prepare("INSERT INTO team_tbl(teamName, teamLocation, coachName, teamLogo) values(?,?,?,?)");

        $stmt->bind_param("ssss", $teamName, $teamLocation, $coachName, $teamLogo);

        if ($stmt->execute()) {
            echo "Successfully added.....";
            echo "<script>console.log('Data inserted successfully');</script>";
        } else {
            echo "Error: " . $stmt->error;
            echo "<script>console.log('Error inserting data: " . $stmt->error . "');</script>";
        }

        $stmt->close();
        $conn->close();
    }
?>