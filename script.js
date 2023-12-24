let p=document.getElementById("p");
const submitBtn=document.getElementById("searchBtn");

submitBtn.addEventListener("click",()=>
{
    let input=document.getElementById("input").value;
    if(input !=="")
    {
        let regExp=new RegExp(input, "gi");
        p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
    }
});