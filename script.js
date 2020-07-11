$(function () {
  let hours = new Date().getHours();
  hours = hours > 12 ? hours - 12 : hours;
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const hoursInSeconds = hours * 60 * 60;
  const minutesInSeconds = minutes * 60;

  const hourHandMovesInASecond = 1 / 120;
  const minuteHandMovesInASecond = 1 / 10;
  const secondHandMovesInASecond = 6;

  let currentHourHandPosition =
    (hoursInSeconds + minutesInSeconds + seconds) * hourHandMovesInASecond;
  let currentMinuteHandPosition =
    (minutesInSeconds + seconds) * minuteHandMovesInASecond;
  let currentSecondHandPosition = seconds * secondHandMovesInASecond;

  $("#hour").css({
    transform: `rotate(${currentHourHandPosition}deg)`,
  });
  $("#minute").css({
    transform: `rotate(${currentMinuteHandPosition}deg)`,
  });
  $("#second").css({
    transform: `rotate(${currentSecondHandPosition}deg)`,
  });

  setInterval(() => {
    currentHourHandPosition += hourHandMovesInASecond;
    currentMinuteHandPosition += minuteHandMovesInASecond;
    currentSecondHandPosition += secondHandMovesInASecond;
    $("#hour").css({
      transform: `rotate(${currentHourHandPosition}deg)`,
    });
    $("#minute").css({
      transform: `rotate(${currentMinuteHandPosition}deg)`,
    });
    $("#second").css({
      transform: `rotate(${currentSecondHandPosition}deg)`,
    });
  }, 1000);
});
