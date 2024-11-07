<?php
    $resultDate=$_POST['resultDate'];
    $teamA=$_POST['teamA'];
    $teamB=$_POST['teamB'];
    $scoreA=$_POST['scoreA'];
    $scoreB=$_POST['scoreB'];


    $conn = new mysqli('localhost','root','','results_tbl');
    if($conn->connect_error){
        die('connection failed: ' . $conn->connect_error);

    }else{
        $stmt = $conn->prepare("INSERT INTO results_tbl(resultDate, teamA, teamB, scoreA, scoreB) values(?,?,?,?,?)");

        $stmt->bind_param("sssii" , $resultDate,$teamA,$teamB,$scoreA,$scoreB);

        if($stmt->execute()){
            echo " Successfully added.....";
        }else{
            echo "Error ".$stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
?>

