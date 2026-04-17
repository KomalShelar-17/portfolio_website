function scrollToSection() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});