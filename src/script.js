function updateTime() {
  let mississaugaElement = document.querySelector("#mississauga");
  let mississaugaDateElement = mississaugaElement.querySelector(".date");
  let mississaugaTimeElement = mississaugaElement.querySelector(".time");
  let mississaugaTime = moment().tz("America/Toronto");

  mississaugaDateElement.innerHTML = mississaugaTime.format(
    "dddd, MMMM Do, YYYY"
  );
  mississaugaTimeElement.innerHTML = mississaugaTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
