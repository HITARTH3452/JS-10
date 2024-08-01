const digit = document.querySelector(".num");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const value = document.querySelector("#value")

inc.addEventListener("click" ,() => {
    const val = parseInt(digit.innerHTML);
    const incrementValue = parseInt(value.value);
    digit.innerHTML = val+incrementValue
})

dec.addEventListener("click" ,() => {
    const val = parseInt(digit.innerHTML);
    const decrementValue = parseInt(value.value);
    digit.innerHTML = val-decrementValue;
})

reset.addEventListener("click" , () => {
    digit.innerHTML = 0;
})