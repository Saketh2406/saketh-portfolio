document.addEventListener("DOMContentLoaded", () => {
    const words = ["AWS Architect", "Python Developer", "DevOps Engineer", "Automation Specialist"];
    let i = 0, j = 0, isDeleting = false;
    const el = document.querySelector(".typed-text");
  
    function type() {
      const word = words[i];
      if (isDeleting) {
        el.textContent = word.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      } else {
        el.textContent = word.substring(0, j++);
        if (j === word.length + 1) isDeleting = true;
      }
      setTimeout(type, isDeleting ? 60 : 120);
    }
  
    type();
  });
  