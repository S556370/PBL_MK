// Get the search input element
var searchInput = document.getElementById('searchInput');

// Add event listener for the 'input' event to listen for changes in the search input
searchInput.addEventListener('input', function() {
  var searchValue = searchInput.value.toLowerCase(); // Get the search value and convert it to lowercase for case-insensitive search

  // Get all the blog entries
  var blogEntries = document.getElementsByClassName('w3-card-4 w3-margin w3-white');

  // Loop through each blog entry and hide/show based on search value
  for (var i = 0; i < blogEntries.length; i++) {
    var blogEntry = blogEntries[i];
    var blogTitle = blogEntry.getElementsByTagName('h3')[0].innerText.toLowerCase(); // Get the blog title and convert it to lowercase

    // Check if the search value is present in the blog title
    if (blogTitle.includes(searchValue)) {
      blogEntry.style.display = 'block'; // Show the blog entry
    } else {
      blogEntry.style.display = 'none'; // Hide the blog entry
    }
  }
});
