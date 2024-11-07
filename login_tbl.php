<?php
session_start();

$username = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'login_tbl');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    // Prepare a statement to check for the user
    $stmt = $conn->prepare("SELECT password, role FROM login_tbl WHERE email = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Bind result variables
        $stmt->bind_result($hashed_password, $role);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $hashed_password)) {
            // Set session variables for role and username
            $_SESSION['role'] = $role;
            $_SESSION['username'] = $username;

            echo "Login Successful!";
            // Redirect to the dashboard or any protected page
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No such user found.";
    }

    $stmt->close();
    $conn->close();
}
?>
