const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

if (day == "Saturday")
{
    document.getElementById("workDate").innerHTML = "Saturday: 8:30 am to 2:00 pm";
}
else if (day == "Sunday")
{
    document.getElementById("workDate").innerHTML = "Sunday: Closed";
}