
$(document).ready(function() {

//Grabbed updating current day
var date = dayjs();
$('#currentDay').text(date.format('dddd, MMM D'));

var hour = dayjs().hour();
console.log(hour);
var timeOfDay = ['.time-block'];
if (timeOfDay = hour - 9) {
  setItem('.present')
} else if (timeOfDay < hour - 9) {
  setItem('.past')
}
else (timeOfDay > hour - 9) {
  setItem('.future')
}


//call saved data to display what the user saved
var savedData = localStorage.getItem('hour-9');
$('#hour-9 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-10');
$('#hour-10 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-11');
$('#hour-11 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-12');
$('#hour-12 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-13');
$('#hour-13 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-14');
$('#hour-14 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-15');
$('#hour-15 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-16');
$('#hour-16 textarea.description').text(savedData);
var savedData = localStorage.getItem('hour-17');
$('#hour-17 textarea.description').text(savedData);





//Adjusted to fit jQuery format
$(document).ready(function () {



//Added event listener for a 'click,' and the set to local storage. Get function comes later
var saveUserData = document.querySelector('.saveBtn')
saveUserData.addEventListener('click', function(event) {

  var textInput = $(this).siblings('.description').val();
  var timeBlock = $(this).parent().attr('id');

  localStorage.setItem(timeBlock, textInput);

});





});


});

