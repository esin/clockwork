function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

function updateTime() {
  var currentTime = new Date();
  var hours = padWithLeadingZeros(currentTime.getHours(), 2);
  var minutes = padWithLeadingZeros(currentTime.getMinutes(), 2);
  var seconds = padWithLeadingZeros(currentTime.getSeconds(), 2);
  
  document.getElementById("time").innerHTML = hours + ':' + minutes + ':' + seconds;
}

window.setInterval(updateTime, 1000);
