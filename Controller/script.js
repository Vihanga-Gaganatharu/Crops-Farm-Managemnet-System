const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function loadPage(page) {
  const frame = document.getElementById("main-frame");
  frame.src = `./page/${page}.html`;
  document
    .querySelectorAll(".sidebar-link")
    .forEach((nav) => nav.classList.remove("active"));
  const activeLink = document.getElementById(`${page}-btn`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

document
  .getElementById("dashboard-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("homePage");
  });

document
  .getElementById("field-data-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("fieldForm");
  });

document
  .getElementById("equipment-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("equipmentForm");
  });

document
  .getElementById("vehicle-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("vehicleForm");
  });

document
  .getElementById("staff-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("staffForm");
  });

document
  .getElementById("crops-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadPage("cropsForm");
  });
