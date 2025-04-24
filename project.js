document.addEventListener("DOMContentLoaded", function () {
    const placeholders = document.querySelectorAll('.tableauPlaceholder');
    placeholders.forEach(placeholder => {
      const object = placeholder.querySelector('object');
      if (object) {
        object.style.width = '100%';
        object.style.height = '100%';
        object.style.display = 'block';
      }
    });
  });
  