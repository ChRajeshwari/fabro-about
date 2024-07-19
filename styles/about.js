let input1=document.getElementsByTagName("input").value;
let on=document.querySelector(".on");
let stat=document.querySelector(".stat");


on.addEventListener("click",function(){
     if(input1==""){
        stat.innerText="Please enter your email id";
     }
})

