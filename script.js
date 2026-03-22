const time=document.getElementById("time");
setInterval(function(){
    var date=new Date();
    time.innerText=date.toLocaleTimeString()+"\n"+date.toLocaleDateString() ;
},1000)

const form=document.getElementById("bmiForm");
const result=document.getElementById("Result");

form.addEventListener('submit',function(e){
    e.preventDefault();
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
    console.log("weight: "+weight+"kg Height: "+height+"m");
    if(weight<=0 || height<=0){
        alert("Enter valid values");
    }else{
    const bmi= weight/(height*height);
    console.log(bmi);
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    result.innerText=`Your BMI is ${bmi.toFixed(2)} (${category})`;
    result.classList.remove("show");
    void result.offsetWidth;
    result.classList.add("show");
    }
});
