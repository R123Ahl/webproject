const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")

const day = document.getElementById("day")
const date = document.getElementById("date")
const time = document.getElementById("time")

const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")


let currentDayInfo = new Date();
const getCurrDay = () => {
    let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekDay[currentDayInfo.getDay()]
    return day
}
const getCurrDate = () => {
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month = monthList[currentDayInfo.getMonth()];
    let date = currentDayInfo.getDate();
    return `${date} ${month}`
}
const getCurrTime = () => {
    let H = currentDayInfo.getHours();
    let M = currentDayInfo.getMinutes();
    let P = (H >= 12 ? "PM" : "AM")
    H = (H % 12 ? H : 12)            
    M = (M < 10 ? ("0" + M) : M)
    return `${H}:${M}${P}`
}
const getInfo = async (event) => {
    event.preventDefault();

    if (cityName.value) {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=20b8a46b2b6c1677a7b927331690119d`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;

            tempMood=arrData[0].weather[0].main;
            if (tempMood == "Sunny") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;''></i>"
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#dfe4ea;'></i>"
            }
            else if (tempMood == "Rainy") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#44c3de;'></i>"
            }
            

        } catch (error) {
            city_name.innerText = `Please Enter City Name Properly`
        }
    }
    else {
        city_name.innerText = `Please Enter City Name Properly`
    }
}
submitBtn.addEventListener('click', getInfo)  //first get the data
day.innerText=getCurrDay()
date.innerText=getCurrDate()
time.innerText=getCurrTime()