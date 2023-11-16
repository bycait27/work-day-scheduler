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

  // display time-blocks for the hours between 9am and 5pm
  function displayTimeBlocks() {
    const currentHour = dayjs().format('H');

    for (let hour = 9; hour <= 17; hour++) {
      let displayHour = hour;

      if (hour > 12) {
        displayHour -= 12;
      }

      timeBlockDiv = $('<div></div>').attr('id', 'hour-' + hour).addClass('row time-block');
      let timeBlockContents = 
      `<div class="col-2 col-md-1 hour text-center py-3">${hour >= 12 ? displayHour + ':00 PM' : displayHour + ':00 AM'}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>`;

      timeBlockDiv.append(timeBlockContents);
      $('#timeBlockContainer').append(timeBlockDiv);

      // add code to apply past, present, or future class to each time block by comparing id to current hour
      if(currentHour > hour){  
        timeBlockDiv.addClass('past');
      }else if(currentHour == hour){
        timeBlockDiv.addClass('present');
      }else{
        timeBlockDiv.addClass('future');
      }
    }
  }

  // add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  function loadSavedUserInput() {
    $('.time-block').each(function() {
      const timeBlockId = $(this).attr('id');
      const savedInput = localStorage.getItem(timeBlockId);

      if (savedInput !== null) {
        $(this).find('.description').val(savedInput);
      };
    });
  };

  displayTimeBlocks();
  loadSavedUserInput();
});
