const checkButton = document.getElementById("check-button");
const message = document.getElementById("message");
const status = document.getElementById("status");

checkButton.addEventListener("click", () => {
status.textContent = "Healthy";
message.textContent = "Application is responding successfully!";
});
