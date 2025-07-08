//Task Two

function getDayName(myDate) {
  const date = new Date(myDate);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

const today = getDayName("07/08/2025");
console.log(today);