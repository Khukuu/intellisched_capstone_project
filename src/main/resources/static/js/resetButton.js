console.log("resetButton.js loaded");
const form = document.querySelector("form");
const button = document.getElementById("resetButton");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting and navigating away

  let countdown = 30; // Countdown duration in seconds
  button.disabled = true; // Disable the button
  button.style.backgroundColor = "grey"; // Change background to grey
  button.innerText = `Resend in ${countdown}s`;

  const interval = setInterval(() => {
    countdown--;
    button.innerText = `Resend in ${countdown}s`;

    if (countdown <= 0) {
      clearInterval(interval);
      button.disabled = false; // Re-enable the button
      button.style.backgroundColor = ""; // Reset background color to default
      button.innerText = "Send Reset Link";
    }
  }, 1000); // Update every second
});