document.addEventListener("DOMContentLoaded", function () {
    const placeholders = document.querySelectorAll('.tableauPlaceholder object');
    placeholders.forEach(obj => {
      obj.style.display = 'block';
      obj.style.width = '100%';
      obj.style.height = '420px';
    });
  });
  