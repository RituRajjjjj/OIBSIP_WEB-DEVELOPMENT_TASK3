function convertTemperature(){

    let temp =
    parseFloat(
    document.getElementById("temp").value);

    let unit =
    document.getElementById("unit").value;

    let result =
    document.getElementById("result");

    if(isNaN(temp)){
        result.innerHTML =
        "Please enter a temperature!";
        return;
    }

    let answer = "";

    switch(unit){

        case "CtoF":
            answer =
            (temp * 9/5) + 32;
            result.innerHTML =
            `${temp} °C = ${answer.toFixed(2)} °F`;
            break;

        case "FtoC":
            answer =
            (temp - 32) * 5/9;
            result.innerHTML =
            `${temp} °F = ${answer.toFixed(2)} °C`;
            break;

        case "CtoK":
            answer =
            temp + 273.15;
            result.innerHTML =
            `${temp} °C = ${answer.toFixed(2)} K`;
            break;

        case "KtoC":
            answer =
            temp - 273.15;
            result.innerHTML =
            `${temp} K = ${answer.toFixed(2)} °C`;
            break;

        case "FtoK":
            answer =
            ((temp - 32) * 5/9) + 273.15;
            result.innerHTML =
            `${temp} °F = ${answer.toFixed(2)} K`;
            break;

        case "KtoF":
            answer =
            ((temp - 273.15) * 9/5) + 32;
            result.innerHTML =
            `${temp} K = ${answer.toFixed(2)} °F`;
            break;
    }
}