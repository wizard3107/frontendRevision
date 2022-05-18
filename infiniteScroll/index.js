let container = document.getElementById("container")
function getData(set) {
    for (let i = set; i < set+25; i++) {
        let name = document.createElement("h3");
        name.setAttribute("id","name");
        name.innerText= `Masai Student ${i}`
        container.append(name);
    }
}
getData(1);


// setting infinite scrolling
let s = 1
container.addEventListener('scroll',()=>{
    // var scrollY = container.scrollHeight - container.scrollTop;
    // var height = container.offsetHeight;
    // var offset = height - scrollY;
    console.log(container.scrollTop, container.clientHeight, container.scrollHeight )
    // console.log(container.offsetHeight)

    if (container.scrollHeight - Math.abs(container.scrollTop)<= container.clientHeight
)
    {
        getData((s++)*25 + 1);
    }
})


