const addBtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) =>
    {
        data.push(note.value)
    })
    //console.log(data);
if(data.length === 0){
    localStorage.removeItem("notes");
}else{
    localStorage.setItem("notes",JSON.stringify(data))
}

    
}


addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

{/* <div class="note">
<div id="head">
    <i class="fa-solid fa-floppy-disk"></i>
    <i class="fa-solid fa-trash"></i>
</div>
<textarea></textarea>
</div> */}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div id="head">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea>`;
    
note.querySelector(".trash").addEventListener(
    "click",
    function(){
        note.remove();
        saveNotes();
    }
)


note.querySelector(".save").addEventListener(
    "click",
    function(){
        saveNotes();
    }
)
note.querySelector("textarea").addEventListener(
    "focusout",
    function(){
        saveNotes();
    }
)
main.appendChild(note);
saveNotes();
}

(
    function(){
        const lsnotes = JSON.parse (localStorage.getItem("notes"));
        if(lsnotes === null){
            addNote()
        }else{
            lsnotes.forEach(
                (lsnote)=>{
                    addNote(lsnote)
                }
            )
        }
       
    }
)()



