
// Function to navigate between sections
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // Select all submit buttons within forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (event) => {
            alert(`Form submitted successfully for ${form.id}`);
        });
    });
});

function navigateTo(sectionId) {
            // Hide all sections
            document.querySelectorAll("section").forEach(section => section.style.display = "none");
            
            // Display the selected section
            document.getElementById(sectionId).style.display = "block";
        }
        
        // Show the Home section by default on load
        document.addEventListener("DOMContentLoaded", () => {
            navigateTo('Home');
        });


 // Assume this role is set based on the user's session (from backend)
 const userRole = "<?php echo $_SESSION['role']; ?>"; // 'admin' or 'user'



 document.addEventListener("DOMContentLoaded", function() {
     // Loop through elements with specific roles and set visibility
     document.querySelectorAll("[data-role]").forEach(el => {
         const requiredRole = el.getAttribute("data-role");
         if (userRole !== requiredRole) {
             el.style.display = "none";  // Hide element if the user lacks permission
         }
     });
 });



{/* <script>
  function validateForm() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (username && password) {
          document.getElementById('myForm').submit();  // Submit the form if validation passes
      } else {
          alert('Please fill in all fields');
      }
  }
</script> */}


//js for nav effect
window.addEventListener('scroll' , function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle('sticky' , window.scrollY>0)
});

//js for responsive navigation sidebar
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click" , ()=>{
    menu.classList.add('active');
});

closeBtn.addEventListener("click" , ()=>{
    menu.classList.remove('active');
});








// Teams Form Submission
document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const teamName = document.getElementById('teamName').value;
    const teamLocation = document.getElementById('teamLocation').value;
    const coachName = document.getElementById('coachName').value;
    const captainName = document.getElementById('captainName').value;
    const teamLogo = document.getElementById('teamLogo').files[0]; // Handle file upload

    // Create a team entry
    const teamList = document.getElementById('teamList');
    const teamItem = document.createElement('div');
    teamItem.innerHTML = `
        <h4>${teamName}</h4>
        <p>Location: ${teamLocation}</p>
        <p>Coach: ${coachName}</p>
        <p>Captain: ${captainName}</p>
    `;
    if (teamLogo) {
        const logoImg = document.createElement('img');
        logoImg.src = URL.createObjectURL(teamLogo);
        logoImg.alt = `${teamName} Logo`;
        logoImg.style.width = '50px'; // Adjust as needed
        logoImg.style.height = '50px'; // Adjust as needed
        teamItem.appendChild(logoImg);
    }
    teamList.appendChild(teamItem);

    // Reset the form
    document.getElementById('teamForm').reset();
});

// Matches Form Submission
document.getElementById('matchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const matchDate = document.getElementById('matchDate').value;
    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const venue = document.getElementById('venue').value;

    // Create a match entry (you can also dynamically list matches here)
    const matchesSection = document.createElement('div');
    matchesSection.innerHTML = `
        <h4>Match on ${matchDate}</h4>
        <p>${teamA} vs ${teamB} at ${venue}</p>
    `;
    document.getElementById('Matches').appendChild(matchesSection);

    // Reset the form
    document.getElementById('matchForm').reset();
});

// Venue Form Submission
document.getElementById('venueForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const venueName = document.getElementById('venueName').value;
    const location = document.getElementById('location').value;
    const capacity = document.getElementById('capacity').value;

    // Create a venue entry (you can also dynamically list venues here)
    const venueSection = document.createElement('div');
    venueSection.innerHTML = `
        <h4>${venueName}</h4>
        <p>Location: ${location}</p>
        <p>Capacity: ${capacity}</p>
    `;
    document.getElementById('Venue').appendChild(venueSection);

    // Reset the form
    document.getElementById('venueForm').reset();
});









// JavaScript for Determining the Winner in result section

document.getElementById('resultsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const scoreA = parseInt(document.getElementById('scoreA').value);
    const scoreB = parseInt(document.getElementById('scoreB').value);
    
    // Determine the winner
    let resultMessage = '';
    if (scoreA > scoreB) {
        resultMessage = `${teamA} won the match!`;
    } else if (scoreB > scoreA) {
        resultMessage = `${teamB} won the match!`;
    } else {
        resultMessage = "It's a draw!";
    }

    // Display the result
    document.getElementById('matchResult').innerText = resultMessage;

    // Optional: Clear the form fields
    document.getElementById('resultsForm').reset();
});






// JavaScript for Adding Players
document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const playerName = document.getElementById('playerName').value;
    const playerTeam = document.getElementById('playerTeam').value;
    const playerPosition = document.getElementById('playerPosition').value;

    // Display a confirmation message
    const playerResult = `Player ${playerName} added successfully to team ${playerTeam} as a ${playerPosition}.`;
    
    document.getElementById('playerResult').innerText = playerResult;

    // Optional: Clear the form fields
    document.getElementById('playerForm').reset();
});










// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more complex logic here)
    if (username === "admin" && password === "password123") {
        // Simulate successful login
        document.getElementById('loginMessage').innerHTML = "<p style='color: green;'>Login successful! Welcome back.</p>";
        // Redirect or show other features after login
        // For example, you could redirect to another section or load new content
    } else {
        // Show an error message
        document.getElementById('loginMessage').innerHTML = "<p style='color: red;'>Invalid username or password. Please try again.</p>";
    }

    // Reset the form (optional)
    document.getElementById('loginForm').reset();
});
