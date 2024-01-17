var searchInput=document.getElementById("search")
var img=document.getElementById("weather")
var Icon=document.createElement("img")
var imgTwo=document.getElementById("weatherTwo")
var IconTwo=document.createElement("img")
var imgThree=document.getElementById("weatherThree")
var IconThree=document.createElement("img")
var dateone=document.getElementById("day-date-1")
var dateTwo=document.getElementById("day-date-2")
var dateThree=document.getElementById("day-date-3")
const today = new Date();
const todayDateNumber = today.getDate();
const todayDayName = today.toLocaleDateString('en-US', { weekday: 'long' });
const todayMonthName = today.toLocaleDateString('en-US', { month: 'long' });
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const tomorrowDateNumber = tomorrow.getDate();
const tomorrowDayName = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
const tomorrowMonthName = tomorrow.toLocaleDateString('en-US', { month: 'long' });
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(today.getDate() + 2);
const dayAfterTomorrowDateNumber = dayAfterTomorrow.getDate();
const dayAfterTomorrowDayName = dayAfterTomorrow.toLocaleDateString('en-US', { weekday: 'long' });
const dayAfterTomorrowMonthName = dayAfterTomorrow.toLocaleDateString('en-US', { month: 'long' });
console.log(`${todayDayName} ${todayDateNumber} ${todayMonthName}`);
console.log(`${tomorrowDayName} ${tomorrowDateNumber} ${tomorrowMonthName}`);
console.log(` ${dayAfterTomorrowDayName} ${dayAfterTomorrowDateNumber} ${dayAfterTomorrowMonthName}`);
document.getElementById("day-date-1").innerHTML=`${todayDayName} ${todayDateNumber} ${todayMonthName} `
document.getElementById("day-date-2").innerHTML=`${tomorrowDayName} ${tomorrowDateNumber} ${tomorrowMonthName}`
document.getElementById("day-date-3").innerHTML=`${dayAfterTomorrowDayName} ${dayAfterTomorrowDateNumber} ${dayAfterTomorrowMonthName}`
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(` ${latitude},${longitude}`);
    }, function (error) {
      console.error(` ${error.message}`);
    });
  } else {
    console.error("Not Supported");
  }
  
async function getData(x){
    var data= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b2481055f6df4a20a76155400240601&q=${x}&days=3`)
    var result= await data.json()
        console.log(result)
        document.getElementById("counttry").innerHTML=result.location.name
        document.getElementById("counttry-two").innerHTML=result.location.name
        document.getElementById("counttry-three").innerHTML=result.location.name
        Icon.src=`https:${result.forecast.forecastday[0].day.condition.icon}`
        img.appendChild(Icon)
        IconTwo.src=`https:${result.forecast.forecastday[1].day.condition.icon}`
        imgTwo.appendChild(IconTwo)
        IconThree.src=`https:${result.forecast.forecastday[2].day.condition.icon}`
        imgThree.appendChild(IconThree)
        document.getElementById("degree").innerHTML =result.forecast.forecastday[0].day.avgtemp_c +"Cْ"
        document.getElementById("stat").innerHTML=result.forecast.forecastday[0].day.condition.text
        document.getElementById("degree-two").innerHTML =result.forecast.forecastday[1].day.avgtemp_c +"Cْ"
        document.getElementById("stat-two").innerHTML=result.forecast.forecastday[1].day.condition.text
        document.getElementById("degree-three").innerHTML =result.forecast.forecastday[2].day.avgtemp_c +"Cْ"
        document.getElementById("stat-three").innerHTML=result.forecast.forecastday[2].day.condition.text
        
}
searchInput.addEventListener("input",function(){
    getData(searchInput.value)
})


