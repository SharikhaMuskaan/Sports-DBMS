<?php
    $matchDate=$_POST['matchDate'];
    $teamA=$_POST['teamA'];
    $teamB=$_POST['teamB'];
    $venue=$_POST['venue'];

    $conn = new mysqli('localhost','root','','match_tbl');
    if($conn->connect_error){
        die('connection failed: ' . $conn->connect_error);

    }else{
        $stmt = $conn->prepare("INSERT INTO match_tbl(matchDate, teamA, teamB, venue) values(?,?,?,?)");

        $stmt->bind_param("ssss" , $matchDate,$teamA,$teamB,$venue);

        if($stmt->execute()){
            echo " Successfull added.....";
        }else{
            echo "Error ".$stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
?>