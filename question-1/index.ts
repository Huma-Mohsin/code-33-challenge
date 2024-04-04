#!/usr/bin/node env
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.

function toGetCurrentDate(){
    let currentDate=new Date();//Get the current date

    // Get day, month, and year components
    let day=String(currentDate.getDate());
    let month=String(currentDate.getMonth()+1);//Months are zero-based in JavaScript, so we add 1
    let year=String(currentDate.getFullYear());
    
//define format
    let formattedDate=`${day}/${month}/${year}`;
    return formattedDate
    


}
console.log("today's Current Date :",toGetCurrentDate());
//Author-HUMA MOHSIN