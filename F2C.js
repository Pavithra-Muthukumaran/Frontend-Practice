document.getElementById('btnChange').addEventListener('click', () =>{
    let temprature = parseFloat(document.getElementById('temp').value);
    if(isNaN(temprature)){
        document.getElementById("result").textContent="Please Enter a valid number";
        document.getElementById("result").style.color="red";
        return;
    }
    let celsius = (temprature - 32)*5/9;
    document.getElementById("result").textContent= `${temprature}°F = ${celsius.toFixed(2)}°C`;
});

const box = document.getElementById('btnChange');
box.addEventListener("mouseover", () => {
    box.style.backgroundColor="lightgreen";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor="white";
});