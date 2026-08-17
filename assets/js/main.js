// main.js — Padmapur village site

// Footer copyright year
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Business directory category filter (businesses.html)
const filterBar = document.getElementById("filterBar");
if (filterBar) {
  const buttons = filterBar.querySelectorAll(".filter-btn");
  const blocks = document.querySelectorAll(".category-block");
  const headings = document.querySelectorAll("[data-category-heading]");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    blocks.forEach((block) => {
      const show = filter === "all" || block.dataset.category === filter;
      block.style.display = show ? "" : "none";
    });

    headings.forEach((heading) => {
      const show =
        filter === "all" || heading.dataset.categoryHeading === filter;
      heading.style.display = show ? "" : "none";
    });
  });
}
