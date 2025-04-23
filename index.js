//selecting id's

var bar=document.getElementById("bar")
var sidenav=document.getElementById("sidenav")

var closenav=document.getElementById("close-nav")

bar.addEventListener("click",function()

{

    sidenav.style.right=0;
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%";
}
)