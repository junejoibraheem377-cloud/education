 
document.querySelector(".hero button").addEventListener("click", () => {
  alert("Welcome! Courses coming soon.");
});
function toggleDetails(id) {
  const desc = document.getElementById(id);
  desc.classList.toggle("show");
}
