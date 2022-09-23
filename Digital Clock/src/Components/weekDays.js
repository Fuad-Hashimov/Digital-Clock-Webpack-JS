function weekDays() {
  const weeks = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const date = new Date();
  let day = date.getDay();
  for (let i = 0; i < weeks.length; i++) {
    if (day - 1 == i) {
      return weeks[i];
    }
  }
}
export default weekDays;
