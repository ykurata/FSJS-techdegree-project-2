# List Pagination and Filtering

In this project, you'll enhance the usability of a web page that is displaying way too much information all at once. Long lists don't make for a good user experience on a web page. To make it easier for the user to find information and read the page, you'll add to this project a popular web development technique known as "pagination".


## Requirements

* No snippets, plugins or libraries, including jQuery
  * For this project, avoid using the popular JavaScript library, jQuery, as it will be covered in the following unit, and required in the upcoming project.

* Show/hide the appropriate students
  * A recommended approach is to create a function that you can call anytime you need to hide all of the students except for the ones that should show on a given page.
  * When the page first loads your program should show only the first ten students, and hide all the rest.

* Create and append the pagination links

* Add functionality to pagination links with an event listener

* Add code comments.

* Cross-Browser consistency


## Extra Credit

* Add search component
  * Dynamically create and append a search component. You can reference the examples/example-exceeds.html file, lines 16-19, to see an example of the markup you'll need.

* Add functionality to the search component
  * When the "Search" button is clicked, the list of students is filtered to match the search value. For example if the name Phillip is typed into the box, list all students whose name or email includes Phillip.

* Paginate search results
  * Display pagination links based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

* Handle no results returned
  * If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
