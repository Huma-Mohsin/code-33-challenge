#!/usr/bin/node env
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
//calculates the number of days left until New Year's Day through function.
function RemainingDaysleftUntilNewYear() {
    let currentDate = new Date(); //This line creates a new Date object named currentDate, which represents the current date and time.
    let currentYear = currentDate.getFullYear(); //to get current year 
    let nextNewYear = new Date(currentYear + 1, 0, 1); //This line calculates the date for the next New Year's Day. It creates a new Date object named nextNewYear with the year set to currentYear + 1 (next year), the month set to 0 (January), and the day set to 1 (first day of January).
    let time_remains_to_newyear = nextNewYear.getTime() - currentDate.getTime(); //This line calculates the time remaining until New Year's Day in milliseconds. It subtracts the current date in milliseconds (currentDate.getTime()) from the milliseconds representing the next New Year's date (nextNewYear.getTime()).
    // Convert milliseconds to days
    let daysLeft = Math.ceil(time_remains_to_newyear / (1000 * 60 * 60 * 24)); //This line converts the time remaining in milliseconds to days. It divides the time_remains_to_newyear by the number of milliseconds in a day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours) and rounds up the result using Math.ceil() to ensure that we count any remaining fraction of a day as a full day.
    return daysLeft; //returns remaining days.
}
// Log how many days are left until New Year
console.log("Days left until New Year:", RemainingDaysleftUntilNewYear());
export {};
