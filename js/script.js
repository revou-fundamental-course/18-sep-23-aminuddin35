let slideIndex = 0;
let show = new showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("auto-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

var tips = document.getElementById("warning");

function updateTips(t = null) {
  if (t == null) {
    tips.innerText = "";
  }
  tips.innerText = t;
}

function checkLength(field, n, min, max) {
  if (field.value.length > max || field.value.length < min) {
    field.classList.add("highlight");
    setTimeout(function () {
      field.classList.remove("highlight");
    }, 2000);
    updateTips(
      "Length of " + n + " must be between " + min + " and " + max + "."
    );
    return false;
  } else {
    return true;
  }
}

function checkRegexp(field, regexp, t) {
  if (!regexp.test(field.value)) {
    field.classList.add("highlight");
    setTimeout(function () {
      field.classList.remove("highlight");
    }, 2000);
    updateTips(t);
    return false;
  } else {
    return true;
  }
}

function validate() {
  var valid = true,
    name = document.forms["form-1"]["your-name"],
    email = document.forms["form-1"]["email"],
    interest = document.forms["form-1"]["interest"],
    emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  valid = valid && checkLength(name, "name", 3, 16);
  valid = valid && checkLength(email, "email", 6, 80);
  valid = valid && checkLength(interest, "interest", 1, 16);

  valid =
    valid &&
    checkRegexp(
      name,
      /^[a-z]([0-9a-z_\s])+$/i,
      "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter."
    );
  valid = valid && checkRegexp(email, emailRegex, "eg. address@email.com");

  if (valid) {
    tips.innerText = "success";
    tips.classList.add("success");
    setTimeout(function () {
      tips.classList.remove("success");
      tips.innerText = "";
    }, 5000);
  }
  return false;
}
