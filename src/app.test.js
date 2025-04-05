const { dayOfTheWeek, monthOfTheYear } = require("./app");

describe("Date format functions", () => {
  test("dayOfTheWeek returns correct day", () => {
    const result = dayOfTheWeek(new Date("2020-03-11")); // Wednesday
    expect(result).toBe("Wednesday");
  });

  test("monthOfTheYear returns correct month", () => {
    const result = monthOfTheYear(new Date("2020-03-11")); // March
    expect(result).toBe("March");
  });

  test("dayOfTheWeek returns today's day if no param passed", () => {
    const today = new Date();
    const expected = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][today.getDay()];
    expect(dayOfTheWeek()).toBe(expected);
  });

  test("monthOfTheYear returns this month if no param passed", () => {
    const today = new Date();
    const expected = [
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
    ][today.getMonth()];
    expect(monthOfTheYear()).toBe(expected);
  });
});
