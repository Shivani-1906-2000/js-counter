(()=>{
var counter=document.getElementById("counter");
count=0;
var container=document.getElementById("main-div");
var button=document.querySelectorAll(".counterBtn");
if(count==0)
{
    container.style.backgroundColor="yellow";
}
button.forEach(function(btn){
    
btn.addEventListener("click",function(e){

if (e.target.classList.contains("prevBtn")){
    if(count<=0){
        container.style.backgroundColor="red";
        count=count-1;
        counter.innerHTML=count;
        if(count==0)
{
    container.style.backgroundColor="yellow";
}
    }
    if(count>=0){
        container.style.backgroundColor="green";
        count=count-1;
        counter.innerHTML=count;
        if(count==0)
{
    container.style.backgroundColor="yellow";
}
    }

}

else if (e.target.classList.contains("nextBtn")){
    if(count>=0){
        container.style.backgroundColor="green";
        count=count+1;
        counter.innerHTML=count;
        if(count==0)
{
    container.style.backgroundColor="yellow";
}
    }
    if(count<=0){
        container.style.backgroundColor="red";
        count=count+1;
        counter.innerHTML=count;
        if(count==0)
{
    container.style.backgroundColor="yellow";
}
    }
}

})
       


})
})();