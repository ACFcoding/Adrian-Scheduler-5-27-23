// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

//Grabbed updating current day
var date = dayjs();
$('#currentDay').text(date.format('dddd, MMM D'));

//var hour = dayjs().hour();
console.log(hour);
if (hour) {
  setItem('.present')
}


var savedData = localStorage.getItem('hour-9', 'hour-10', 'hour-11', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17');
console.log(savedData);



//Adjusted to fit jQuery format
$(document).ready(function () {



//Added event listener for a 'click,' and the set to local storage. Get function comes later
var saveUserData = document.querySelector('.saveBtn')
saveUserData.addEventListener('click', function(event) {

  var textInput = $(this).siblings('.description').val();
  var timeBlock = $(this).parent().attr('id');

  localStorage.setItem(timeBlock, textInput);



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});




//for DOM
});


  //var currentTime = dayjs();
  //$('.container-fluid px-5').text(currentTime.format('A'));
  //console.log(currentTime);


});

