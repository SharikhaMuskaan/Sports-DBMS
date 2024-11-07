<?php
    $playerName=$_POST['playerName'];
    $playerdob=$_POST['playerdob'];
    $playermob=$_POST['playermob'];
    $playermail=$_POST['playermail'];
    $playerTeam=$_POST['playerTeam'];
    $playerPosition=$_POST['playerPosition'];

    $conn = new mysqli('localhost','root','','player_tbl');
    if($conn->connect_error){
        die('connection failed: ' . $conn->connect_error);

    }else{
        $stmt = $conn->prepare("INSERT INTO player_tbl(playerName, playerdob, playermob, playermail, playerTeam, playerPosition) values(?,?,?,?,?,?)");

        $stmt->bind_param("ssisss" , $playerName,$playerdob,$playermob,$playermail,$playerTeam,$playerPosition);

        if($stmt->execute()){
            echo " Successfully added.....";
        }else{
            echo "Error ".$stmt->error;
        }

        $stmt->close();
        $conn->close();
    }

?>
