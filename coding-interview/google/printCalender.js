function printCalendar(date) {
  // Get the month and year from the given date
  const month = date.getMonth();
  const year = date.getFullYear();

  // Create a new Date object set to the first day of the month
  const firstDayOfMonth = new Date(year, month, 1);
console.log(firstDayOfMonth);
  // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday) for the first day of the month
  const firstDayOfWeek = firstDayOfMonth.getDay();
console.log(firstDayOfWeek);
  // Create an array to represent the names of the days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create an array to represent the names of the months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the number of days in the current month
  const numDaysInMonth = new Date(year, month + 1, 0).getDate();
console.log(numDaysInMonth);
  // Create a header for the calendar
  console.log(months[month] + " " + year);
  console.log(daysOfWeek.join(" "));

  // Print the calendar
  let currentDay = 1;
  for (let week = 0; week < 6; week++) {
    let weekStr = "";
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (
        (week === 0 && dayOfWeek < firstDayOfWeek) ||
        currentDay > numDaysInMonth
      ) {
        weekStr += "   ";
        console.log(weekStr);
      } else {
        weekStr += currentDay.toString().padStart(3, " ");
        console.log(currentDay.toString().padStart(3, " "));
        currentDay++;
      }
    }
    console.log(weekStr);
    // Break the loop if we have printed all the days of the month
    if (currentDay > numDaysInMonth) {
      break;
    }
  }
}

// Example usage:
const date = new Date("2023-07-01"); // Replace '2023-07-01' with any other date in 'YYYY-MM-DD' format
printCalendar(date);
