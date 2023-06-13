// disini kita akan buat fungsi showtime() //

function ShowTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  // disini ada if statement
  if (h == 0) {
    h = 12;
  }

  // ini untuk meleewati jam 12 siang
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // disini untuk logical clock
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innertext = time;

  // ini untuk 1 detik ke 1000 milidetik
  setTimeout(ShowTime, 1000);
}

ShowTime();
