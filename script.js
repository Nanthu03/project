// SPA Navigation Script
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href").substring(1);

    // Remove active from all
    sections.forEach(section => section.classList.remove("active"));
    links.forEach(nav => nav.classList.remove("active"));

    // Add active to clicked
    document.getElementById(target).classList.add("active");
    link.classList.add("active");

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
