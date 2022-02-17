let addbtn = document.querySelector('.add-btn');
let modalbox = document.querySelector(".modal-cont");
let maincont = document.querySelector(".main-cont");
let textArea = document.querySelector(".textarea-cont");

let addflag = false;

addbtn.addEventListener("click", ()=>{
    //Display modal
    //generate ticket;

    //addflag -> true :=> display modal;
    // addflag -> false :=> modal none

    addflag = !addflag;
    if(addflag){
        modalbox.style.display = "flex";
        
    }else{
        modalbox.style.display = 'none';
        textArea.value = "";
        
    }

})

modalbox.addEventListener("keydown", (e)=>{
    let key = e.key; // event's object;
    if(key === "Shift"){
        createticket();
        modalbox.style.display = 'none';
        addflag = false;
        textArea.value = "";
    }
})

function createticket(){
    let createticketcont = document.createElement("div");
    createticketcont.setAttribute("class", "ticket-cont");
    createticketcont.innerHTML = `
                    <div class="ticket-color"></div>
                    <div class="ticket-id">#simple_02</div>
                    <div class="task-area">
                        I am software developer here, and I work in a MNC company that is a billioanire revenue compnay.
                    </div>`;
    maincont.appendChild(createticketcont);

}