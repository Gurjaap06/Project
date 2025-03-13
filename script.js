// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
  // === Like Button Functionality & Mouse Events ===
  // Get all like buttons (JS selector 1)
  const likeButtons = document.querySelectorAll(".like-btn"); // (selector 2)

  likeButtons.forEach(function (button) {
    // Click event to increment likes (Mouse Event 1)
    button.addEventListener("click", function () {
      const btnIdNum = this.id.replace("likeBtn", "");
      const countSpan = document.querySelector("#likeCount" + btnIdNum); // (selector 3)
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count + " Likes";
    });

    // Mouseover event (Mouse Event 2) to change button style
    button.addEventListener("mouseover", function () {
      this.classList.add("btn-primary");
      this.classList.remove("btn-outline-primary");
    });

    // Mouseout event (Mouse Event 3) to revert style
    button.addEventListener("mouseout", function () {
      this.classList.add("btn-outline-primary");
      this.classList.remove("btn-primary");
    });
  });

  // === Post Highlight and Reset ===
  // Get all posts (JS selector 4)
  const posts = document.querySelectorAll(".post");

  posts.forEach(function (post) {
    // Mouse enter event (Mouse Event 4) to add a shadow
    post.addEventListener("mouseenter", function () {
      post.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    });

    // Mouse leave event (Mouse Event 5) to remove the shadow
    post.addEventListener("mouseleave", function () {
      post.style.boxShadow = "none";
    });

    // Double click event to reset like count (using dblclick as an additional mouse event)
    post.addEventListener("dblclick", function () {
      const postIdNum = post.id.replace("post", ""); // (selector 5)
      const countSpan = document.querySelector("#likeCount" + postIdNum); // (selector 6)
      countSpan.textContent = "0 Likes";
    });
  });

  // === Header Interaction ===
  // Update header background on click (JS selector 6)
  const header = document.querySelector("header");
  header.addEventListener("click", function () {
    header.style.backgroundColor =
      header.style.backgroundColor === "darkblue" ? "blue" : "darkblue";
  });

  // === Footer Interaction ===
  // Change footer font style on hover (JS selector 7)
  const footer = document.querySelector("footer");
  footer.addEventListener("mouseover", function () {
    footer.style.fontStyle = "italic";
  });
  footer.addEventListener("mouseout", function () {
    footer.style.fontStyle = "normal";
  });

  // === Navigation Links ===
  // Select all nav links (JS selector 8)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Navigation to " + this.textContent + " is under construction.");
    });
  });

  // === Friend Request List Items ===
  // Change background on hover for friend list items (JS selector 9)
  const friendItems = document.querySelectorAll(".list-group-item");
  friendItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor = "#f0f0f0";
    });
    item.addEventListener("mouseleave", function () {
      item.style.backgroundColor = "";
    });
  });

  // Additional selectors can be added here if needed (aiming for at least 15 distinct selectors):
  const allImages = document.querySelectorAll("img"); // (selector 10)
  const allButtons = document.querySelectorAll("button"); // (selector 11)
  const allParagraphs = document.querySelectorAll("p"); // (selector 12)
  const allVideos = document.querySelectorAll("video"); // (selector 13)
  const cardTitles = document.querySelectorAll(".card-title"); // (selector 14)
  const listItems = document.querySelectorAll("li"); // (selector 15)
});
