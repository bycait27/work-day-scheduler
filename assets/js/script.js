// the code isn't run until the browser has finished rendering all the elements in the html
$(function () {
  // variable for currentDay element
  const currentDate = document.getElementById('currentDay');

  // format the current date and display it
  let today = dayjs().format('dddd, MMMM DD');
  currentDate.textContent = today;

  // add a listener for click events on the save button
  $('.time-block').on('click', '.saveBtn', function() {
    // establish time-block id as a key to save user input in local storage
    const timeBlockId = $(this).closest('.time-block').attr('id');
    const userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // add code to apply past, present, or future class to each time block by comparing id to current hour
  function updateBlockClasses() {
    const currentHour = dayjs().format('HH');
    $('.time-block').each(function() {
      const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      $(this).removeClass('past present future');

      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour == currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      };
    });
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
