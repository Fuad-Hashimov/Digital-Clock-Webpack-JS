import "./styles/main.scss";
import clock from "./Components/clock";
import weekDays from "./Components/weekDays";

function getDay() {
  const listDays = document.getElementById("list-days").children;
  for (let i = 0; i < listDays.length; i++) {
    if (listDays[i].textContent == weekDays())
      listDays[i].className = "weekdays";
  }
}
getDay();

setInterval(() => clock(), 1000);
