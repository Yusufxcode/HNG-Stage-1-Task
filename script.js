const day = document.querySelector('.currentDay');
const UTCTime = document.querySelector('.UTCTime');

//To extract current day from the DATE object
const date = new Date()
const currentDay = date.getDay()

//To display current day accordingly 
if(currentDay == 0) {
    day.innerHTML = 'Today is: Sunday'
}else if (currentDay == 1) {
    day.innerHTML = 'Today is: Monday'
}else if (currentDay == 2) {
    day.innerHTML = 'Today is: Tuesday'
}else if (currentDay === 3) {
    day.innerHTML = 'Today is: Wednesday'
}else if (currentDay == 4) {
    day.innerHTML = 'Today is: Thursday'
}else if (currentDay == 5) {
    day.innerHTML = 'Today is: Friday'
}else{
    day.innerHTML = 'Today is: Saturday'
}

function timer() {
    const date = new Date();
    let z = date.getTime();
    UTCTime.innerHTML = z;

}setTimeout(timer(), 1000)
