document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!email) return;
    
  });