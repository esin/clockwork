window.setInterval(ut, 1000);

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

function ut() {
  document.getElementById("time").innerHTML = padWithLeadingZeros(Math.floor(Math.random() * 23), 2) + ':' 
    + padWithLeadingZeros(Math.floor(Math.random() * 59), 2) + ':' + padWithLeadingZeros(Math.floor(Math.random() * 59), 2);

}