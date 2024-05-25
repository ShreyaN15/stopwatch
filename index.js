let secondselapsed=0
let interval=null
const time=document.getElementById("time")
function setTime(){
  const hours=Math.floor(secondselapsed/3600)
  const minutes=Math.floor((secondselapsed%3600)/60)
  const seconds=secondselapsed%60
  time.innerHTML=`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function timer(){
  secondselapsed++;
  setTime()
}
function pad(value){
  return String(value).padStart(2,"0")
}
function startclock(){
  if (interval) stopclock()
  interval=setInterval(timer,1000)
}
function stopclock(){
  clearInterval(interval)
  
}
function resetclock(){
  stopclock()
  secondselapsed=0
  setTime()
}
