/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
/*const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //Check the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    //Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    //Shwo message
    contactMessage.textContent = "Write all the input fields";
  } else {
    //ServiceID - templateID - publickey
    emailjs
      .sendForm(
        "service_lkjlekw",
        "template_5bklpfz",
        "#contact-form",
        "RjM04VAN8qdozUM-5"
      )
      .then(
        () => {
          //Show message and color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message Sent";

          //Remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! Somthing has faield..", error);
        }
      );

    //clear field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);
*/

// Select the form element
const form = document.getElementById('contact-form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const name = form.elements['user_name'].value;
  const email = form.elements['user_email'].value;
  const question = form.elements['user_project'].value;

  // Send the email using EmailJS
  emailjs.send('service_qee7ukt', 'template_vjp21l8XXXXX', {
    from_name: name,
    from_email: email,
    message: question
  }).then((response) => {
    // Display a success message to the user
    const message = document.getElementById('contact-message');
    message.textContent = 'Your message was sent successfully!';
  }, (error) => {
    // Display an error message to the user
    const message = document.getElementById('contact-message');
    message.textContent = 'There was an error sending your message. Please try again later.';
  });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
const popupContainer = document.getElementById("popup-container");

// Check if there's a selected theme and icon
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get the current theme and icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Set the theme and icon on page load
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Toggle the theme and icon on button click
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Toggle the dark mode for the popup window
  popupContainer.classList.toggle("dark-popup");

  // Save the selected theme and icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

// Get all the "View Demo" links
const viewDemoLinks = document.querySelectorAll(".view-demo-link");

// Loop through each link and add a click event listener
viewDemoLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    //Get the project name from the "data-project-name" attribute
    const projectName = link.dataset.projectName;

    // Create a modal dialog box
//     const dialog = document.createElement("dialog");
//     dialog.innerHTML = `
//   <div class="dialog-header">
//     <h2>${projectName}</h2>
//     <button class="close-button">×</button>
//   </div>
//   <div class="dialog-content">
//     <img src="image.png" alt="Screenshot of ${projectName}" />
//     <p>This is a description of ${projectName}.</p>
    
//   </div>
// `;
    // Add the dialog box to the page and open it
    document.body.appendChild(dialog);
    dialog.showModal();

    // Add a click event listener to the close button
    dialog.querySelector(".close-button").addEventListener("click", () => {
      dialog.close();
    });
  });
});

// Get all the image links
const links = document.querySelectorAll('[data-dialog-target]');

// Add click event listeners to the links
links.forEach(link => {
  const target = link.dataset.dialogTarget;
  const dialog = document.getElementById(target);
  const closeButton = dialog.querySelector('.close-button');

  // Add click event listener to the link
  link.addEventListener('click', () => {
    dialog.showModal();
  });

  // Add click event listener to the close button
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  // Add click event listener to the dialog box
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});




sr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.qualification__content, .services__card `, { interval: 100 });
