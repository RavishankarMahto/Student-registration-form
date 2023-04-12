// Get the form element
const form = document.querySelector('form');

// Listen for the form submission event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the form fields
  const name = document.querySelector('input[type="text"]:nth-of-type(1)').value;
  const fatherName = document.querySelector('input[type="text"]:nth-of-type(2)').value;
  const motherName = document.querySelector('input[type="text"]:nth-of-type(3)').value;
  const phone = document.querySelector('input[type="text"]:nth-of-type(4)').value;
  const email = document.querySelector('input[type="email"]').value;
  const gender = document.querySelector('input[type="radio"]:checked').value;
  const dob = document.querySelector('input[type="date"]').value;
  const address = document.querySelector('input[type="text"]:nth-of-type(5)').value;
  const bloodGroup = document.querySelector('select[name="drop-down"]').value;
  const department = document.querySelector('input[type="radio"]:checked').value;

  const courses = [];

  // Loop through the checkboxes to get the selected courses
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      courses.push(checkboxes[i].value);
    }
  }

  // Get the file name of the selected photo
  const photo = document.querySelector('input[type="file"]').files[0].name;

  // Log the form data to the console
  console.log({
    name,
    fatherName,
    motherName,
    phone,
    email,
    gender,
    dob,
    address,
    bloodGroup,
    department,
    courses,
    photo,
  });
});