// Current Day Banner
var currentDay = moment().format("MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// Save tasks to calendar
var scheduleTableEl = $('#schedule-table');
var dailyTaskList = [];


function handleFormSubmit(event) {

    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    console.log($("#" + event.target.dataset.hour).val());
}

scheduleTableEl.on('click', handleFormSubmit);


console.log(dailyTaskList);

// Save input text and print to page


// Change color of rows depending on current hour

var currentHour = moment().format("h");
var allHourOptions = "array of all hour rows"

for (i = 0; i < hourOptions.length; i++) {
    var hourRow = allHourOptions[i];

    if (hourRow === currentHour) {

        // set class to .present

    } else if (hourRow > currentHour) {

        // set class to .future

    } else {

        // set class to .past

    }

}








