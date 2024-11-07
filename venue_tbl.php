<?php
$venueName=$_POST['venueName'];
$location=$_POST['location'];
$capacity=$_POST['capacity'];

$conn = new mysqli('localhost','root','','venue_tbl');
    if($conn->connect_error){
        die('connection failed: ' . $conn->connect_error);

    }else{
        $stmt = $conn->prepare("INSERT INTO venue_tbl(venueName, location, capacity) values(?,?,?)");

        $stmt->bind_param("ssi" , $venueName,$location,$capacity);

        if($stmt->execute()){
            echo " Successfull added.....";
        }else{
            echo "Error ".$stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
?>