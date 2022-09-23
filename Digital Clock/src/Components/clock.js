function clock() {
  let hours = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours >= 12) {
    document.getElementById("session").innerText = "PM";
  } else {
    document.getElementById("session").innerText = "AM";
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minute < 10 ? "0" + minute : minute;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}
export default clock;
