// Current Day Banner
var currentDay = moment().format("MMMM Do, YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on('click', function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log(value, time)
    localStorage.setItem(time, value)
})

function checkHour() {
    var currentHour = moment().hours();
    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id').split('-')[1])
        if(hourBlock<currentHour) {
            $(this).addClass('past')
        } else if(currentHour === hourBlock) {
            $(this).addClass('present')
            $(this).removeClass('past')

        } else {
            $(this).addClass('future')
            $(this).removeClass('past')
            $(this).removeClass('present')
        }
    })
}

// moment(data.date, 'X').format('L')
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}&units=imperial

checkHour()

setInterval(checkHour, 15000)

for(i = 9; i < 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
}

// Save tasks to calendar
// var scheduleTableEl = $('#schedule-table');
// var dailyTaskList = [];


// function handleFormSubmit(event) {

//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }

//     console.log($("#" + event.target.dataset.hour).val());
// }

// scheduleTableEl.on('click', handleFormSubmit);


// console.log(dailyTaskList);

// // Save input text and print to page


// // Change color of rows depending on current hour

// var currentHour = moment().format("h");
// var allHourOptions = "array of all hour rows"

// for (i = 0; i < hourOptions.length; i++) {
//     var hourRow = allHourOptions[i];

//     if (hourRow === currentHour) {

//         // set class to .present

//     } else if (hourRow > currentHour) {

//         // set class to .future

//     } else {

//         // set class to .past

//     }

// }








