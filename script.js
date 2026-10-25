// Brew & Bite — vanilla JavaScript
(function () {
  "use strict";

  // Tell CSS that JavaScript is running (the mobile menu only collapses when it is)
  document.documentElement.classList.add("js");

  // ----- 1. Mobile navigation -----
  const toggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  function setMenu(open) {
    navMenu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => setMenu(!navMenu.classList.contains("is-open")));

  // Close the menu after choosing a link
  navMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });

  // Close with the Escape key and return focus to the button
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  // ----- 2. Menu category filter -----
  const filterButtons = document.querySelectorAll("[data-filter]");
  const menuItems = document.querySelectorAll(".menu-item");

  function applyFilter(category) {
    filterButtons.forEach((btn) => {
      const active = btn.dataset.filter === category;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    menuItems.forEach((item) => {
      item.hidden = !(category === "all" || item.dataset.category === category);
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });

  // "View Menu" buttons on the category cards: filter, then scroll to the list
  document.querySelectorAll("[data-filter-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filterLink);
      const list = document.getElementById("menu-list");
      list.scrollIntoView({ behavior: "smooth" });
      list.focus({ preventScroll: true });
    });
  });

  // ----- 3. Contact form validation (demo only: nothing is sent) -----
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(input, message) {
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(message));
    field.querySelector(".error").textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  function validateField(input) {
    const value = input.value.trim();
    if (!value) return showError(input, "Please fill in this field.");
    if (input.name === "email" && !emailPattern.test(value)) {
      return showError(input, "Enter a valid email, like name@example.com.");
    }
    if (input.name === "message" && value.length < 10) {
      return showError(input, "Please write at least 10 characters.");
    }
    return showError(input, "");
  }

  const fields = form.querySelectorAll("input, textarea");

  // Re-check a field as the user leaves it, and clear errors while typing
  fields.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("invalid")) validateField(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    let firstInvalid = null;
    fields.forEach((input) => {
      if (!validateField(input) && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      status.classList.add("is-error");
      status.textContent = "Please fix the highlighted fields and try again.";
      firstInvalid.focus();
      return;
    }

    // No backend: we only confirm that validation passed
    status.textContent = "Thanks! Your message looks good. This is a demo form, so nothing was sent to a server or saved.";
    form.reset();
  });

  // ----- 4. Images: hide broken ones so the beige fallback shows -----
  // "error" events do not bubble, so we listen in the capture phase.
  document.addEventListener("error", (e) => {
    if (e.target.tagName === "IMG") e.target.classList.add("is-broken");
  }, true);

  // ----- 5. Footer year -----
  document.getElementById("year").textContent = new Date().getFullYear();
})();
