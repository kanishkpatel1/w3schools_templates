function createSlideshow(selector, milliseconds) {
  var elements = document.querySelectorAll(selector);
  var currentIndex = 0;

  function showImage(index) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
    elements[index].style.display = 'block';
  }

  function next() {
    currentIndex = (currentIndex + 1) % elements.length;
    showImage(currentIndex);
    setTimeout(next, milliseconds);
  }

  // Initialize the slideshow
  showImage(currentIndex);
  setTimeout(next, milliseconds);
}

// Usage example:
createSlideshow('.slideshow', 2000); // Change '.slideshow' to your selector and 2000 to your desired interval in milliseconds
