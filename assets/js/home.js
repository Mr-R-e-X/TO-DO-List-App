const datePicker = document.getElementById('date');

//Get the current date and time
const currentDate = new Date();

console.log(currentDate);
//Format the current date and time in a way that the input expects
const formattedCurrentDate = currentDate.toISOString().slice(0,10);

//set minimum value of that input.
datePicker.setAttribute('min', formattedCurrentDate);
console.log(formattedCurrentDate);



