const item = document.querySelector("#item")
const todoBox = document.querySelector("#todo")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addtoDo(this.value);
            this.value=""
        }
    }
)

// const saveli = () =>{
//     const lsli = document.querySelector("#todo li")
//     console.log(lsli)
//     const data = [];
//     lsli.forEach((li) => {
//     data.push(li.value)
// })
//     localStorage.setItem("lsli",JSON.stringify(data));
// }

const addtoDo = (item) => {
    const itemlist = document.createElement("li")
    itemlist.innerHTML = ` ${item}
  <i class="fa-solid fa-xmark"></i>`;

itemlist.addEventListener(
    "click",
    function(){
      this.classList.toggle("done") ; 
    }
)
itemlist.querySelector("i").addEventListener(
    "click",
    function(){
        itemlist.remove();
    }
)

todoBox.appendChild(itemlist)

}
// item.addEventListener(
//     "doubleclick",
//     function(){
//         saveli();
//     }
// )





