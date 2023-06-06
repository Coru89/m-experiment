// Get all elements with class .rte
const rteElements = document.querySelectorAll('.rte');

// Create a navigation container element
const navContainer = document.createElement('nav');
const navList = document.createElement('ul');

// Loop through each .rte element
rteElements.forEach(function(element) {
  // Find all h2 elements within the .rte element
  const h2Elements = element.querySelectorAll('h2');

  // Loop through each h2 element
  h2Elements.forEach(function(h2) {
    // Get the text content of the h2 element
    const h2Content = h2.textContent;

    // Remove any special characters and spaces from the h2 content
    const id = h2Content.replace(/[^\w]+/g, '-');

    // Set the id attribute of the h2 element to the modified content
    h2.setAttribute('id', id);

    // Create a new list item for the h2 element
    const listItem = document.createElement('li');

    // Create a new anchor element and set its href attribute to the id
    const anchor = document.createElement('a');
    anchor.href = '#' + id;
    anchor.textContent = h2Content;

    // Append the anchor to the list item
    listItem.appendChild(anchor);

    // Append the list item to the navigation list
    navList.appendChild(listItem);
  });
});

// Append the navigation list to the navigation container
navContainer.appendChild(navList);

// Append the navigation container to the document body
document.body.appendChild(navContainer);
