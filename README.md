# List Pagination and Filtering

In this project, you'll enhance the usability of a web page that is displaying way too much information all at once. Long lists don't make for a good user experience on a web page. To make it easier for the user to find information and read the page, you'll add to this project a popular web development technique known as "pagination".


## Requirements

* No snippets, plugins or libraries, including jQuery
  * For this project, avoid using the popular JavaScript library, jQuery, as it will be covered in the following unit, and required in the upcoming project.

* Show/hide the appropriate students
  * A recommended approach is to create a function that you can call anytime you need to hide all of the students except for the ones that should show on a given page.
  * When the page first loads your program should show only the first ten students, and hide all the rest.

* Create and append the pagination links
  * Look at the HTML in the examples/example-meets.html file on lines 119-137 -- this is an example of the markup you'll need to dynamically create and add to the DOM to create the necessary pagination links. You'll need to create each part dynamically, including the container.
  * Since no more than 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page. This can be accomplished with simple division - the total number of students divided by the max number of students on each page and rounded up. So 54 students divided by ten, rounded up, equals 6 pages.
  * Your program should work for any number of students. You can test your code by checking the examples/44students.html and examples/64 students.html files.

* Add functionality to pagination links with an event listener
  * When one of the pagination links are clicked, the CSS "active" class should be updated on the buttons, meaning it is removed from the previously active button and added to the currently active button.
  * When a user clicks on “2” in the pagination links, students 11 through 20 should be displayed. When a user clicks “3”, students 21 through 30 be displayed. And so on until we get to the last page, number "6" in this project, which should display students 51 through 55. And remember that indexes start at zero, not one. So to show students 1 - 10, you'll be working with student indexes 0 - 9.
  * Since the pagination links are being generated dynamically, it's important to be mindful of when and where you add functionality to the buttons, because if the code that adds the functionality runs before the buttons are created, then the buttons won't have any of the intended functionality.
  * If you created a function to show/hide students at the beginning of this project, then you can use that function here in the event listener attached to the buttons to make each each button show/hide the correct sets of students.

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
