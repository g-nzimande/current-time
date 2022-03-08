// DisplayTime function will keep executing after every 1000 milliseconds
setInterval(displayTime, 1000);

//Function declaration for our date and time display
function displayTime() {

    //Variable for current time
    const timeNow = new Date();

    // Declaring variables for the hour of day, minutes, seconds, days of the week, months, year, and period of the day
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    // Contains an array of the days of the week
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let today = weekDay[timeNow.getDay()];
    // The "short" string in the parenthesis means the short spelling of the months will be printed
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "AM";

    // Condition to set the period to AM or PM
    if (hoursOfDay > 12) {
        hoursOfDay -= 12;
        period = "PM";
        /*Checks whether the hour is greater than 12 and if that is true, 12 is subtracted from the hour. 
        The result is then assigned back to --hour-- and the --period is set to PM.-- 
        12 is subtracted as this is a 12-hour clock*/
    }

    if (hoursOfDay == 0) {
        hoursOfDay = 12;
        period = "AM";
        /*Checks whether the hour is equal to 0. If that is true, assign 12 to the hourOfDay variable and the period is set to AM.*/
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    // If hourOfDay is less than 10, set hour position to 0 plus hourOfDay else set position to hourOfDay
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // If minutes are less than 10, set minutes position to 0 plus minutes else set position to minutes
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // If seconds are less than 10, set seconds position to 0 plus seconds else set position to seconds

    //Set current time using variable declared below
    let currentTime = hoursOfDay + ":" + minutes + ":" + seconds + period;

    //Display clock on the web page
    document.getElementById('clock').innerHTML = currentTime + " " + today + ", " + months + " " + year;

}

displayTime();