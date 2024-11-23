let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor(event) {
  mouseCursor.style.top = event.pageY + "px";
  mouseCursor.style.left = event.pageX + "px";
}

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const urlEncodedData = new URLSearchParams();
  
  formData.forEach((value, key) => {
    urlEncodedData.append(key, value);
  });
  
  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: urlEncodedData
  })
  
  .then(response => {
    if (response.status === 200) {
      form.reset();
      responseMessage.style.display = "block";
    }
    // else {
    //   alert("There was a problem with your submission. Please try again.");
    // }
  })
  
  .catch(error => {
    console.error('Error:', error);
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
  
});
