#!/usr/bin/node env
// Question 99: Generate a date object representing your next birthday and log it to the console.

// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.

function getNextBirthday(){
    let nextBirthday=new Date()//generate a date object.
    
    nextBirthday.setMonth(6); // set month i.e july of the birthday (zero-based index)
    nextBirthday.setDate(21); // set date of birthday

    if(nextBirthday<new Date()){
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
        return nextBirthday;
    }
console.log("Next Birthday:",getNextBirthday());
//author-HUMA MOHSIN
