//http://api.weatherapi.com/v1/current.json?key=9ee04721a86b4927be1123529241110&q=${targetlocation}&aqi=no
const tempField = document.getElementById("weathericon");
const tempTime = document.getElementById("time");
const C = document.getElementById("c");
const tempLoc = document.getElementById("date");
const weathericon = document.getElementById("num");
const searchfield = document.getElementById("Location");
const submitbut = document.getElementById("mySubmit");
const border = document.getElementsByClassName("border");
let target = searchfield;


const fetchResult = async (targetlocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=9ee04721a86b4927be1123529241110&q=${targetlocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    tempLoc.textContent = data.location.name;
    tempTime.textContent = data.location.localtime;
    tempField.textContent = data.current.temp_c;
    weathericon.textContent = data.current.condition.text;
    C.textContent = `'C`;
}
submitbut.onclick = function(e){
    e.preventDefault();
    target = searchfield.value;
    setTimeout(fetchResult(target),3000);
}
