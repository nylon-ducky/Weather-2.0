document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);

        lat = position.coords.latitude;
        lon = position.coords.longitude;

        const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4a2cbd92319bbd0aa9d9a86480652394&units=imperial`;

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                let day0 = document.querySelector("#day0");
                let day1 = document.querySelector("#day1");
                let day2 = document.querySelector("#day2");
                let day3 = document.querySelector("#day3");
                let day4 = document.querySelector("#day4");
                let day5 = document.querySelector("#day5");
                let day6 = document.querySelector("#day6");
                let day7 = document.querySelector("#day7");

                let days = [day0, day1, day2, day3, day4, day5, day6];
                let x;
                for (x in days) {


                    let E = document.createElement("div");
                    E.classList.add("carousel");
                    let img = document.createElement("img");


                    let date = new Date(data.daily[x].dt * 1000).toLocaleDateString("en-us");
                    let weekDay = new Array(7);
                    weekDay[0] = "Sunday";
                    weekDay[1] = "Monday";
                    weekDay[2] = "Tuesday";
                    weekDay[3] = "Wednesday";
                    weekDay[4] = "Thursday";
                    weekDay[5] = "Friday";
                    weekDay[6] = "Saturday";
                    let d = new Date(data.daily[x].dt * 1000)
                    let wd = weekDay[d.getDay()];



                    let { day } = data.daily[x].temp;
                    let { description, icon } = data.daily[x].weather[0];
                    img.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";





                    let node1 = document.createTextNode(wd + " " + date);
                    let node2 = document.createTextNode(day + "°F");
                    let node3 = document.createTextNode(description);


                    // allDays.appendChild(E);
                    days[x].appendChild(E);
                    E.appendChild(node1);
                    E.appendChild(document.createElement('br'));
                    E.appendChild(node2);
                    E.appendChild(document.createElement('br'));
                    E.appendChild(node3);
                    E.appendChild(document.createElement('br'));
                    E.appendChild(img);

                }
            });

    });

});

let degree = 0;
function rotate() {
    degree = degree - 60;
    document.querySelector(".card").style.transform = "rotateY(" + degree + "deg)";
}