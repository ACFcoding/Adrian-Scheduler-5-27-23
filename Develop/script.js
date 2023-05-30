
$(document).ready(function() {

//Grabbed updating current day
var date = dayjs();
$('#currentDay').text(date.format('dddd, MMM D'));

//grabs current hour and applies styling to time blocks accordingly
var hour = dayjs().hour();
var timeSpace = $('.time-block');
var textSpace = $('.col-8');

for (var i = 0; i < timeSpace.length; i++) {
  var listTime = Number(timeSpace[i].id);

if (listTime < hour) {
  textSpace[i].classList.add('past');
} else if (listTime === hour) {
textSpace[i].classList.add('present');
} else {
textSpace[i].classList.add('future');
}
}

//Adjusted to fit jQuery format
$(document).ready(function () {

renderUserData()
//Keeps track in local storage of which hour will get saved
var saveUserData = $(".saveBtn");
saveUserData.on('click', function() {
  var textArea = this.parentElement.id;
  //easier way to do this? 
  var userInput = this.previousElementSibling.value;
  // var userInput = $('.descrition').value;
    window.localStorage.setItem(textArea, userInput);
})
function renderUserData() {
  for (var i = 0; i < timeSpace.length; i++) {
    var listTime = Number(timeSpace[i].id);
      timeSpace[i].children[1].value = window.localStorage.getItem(listTime);
  }
}
});
});

