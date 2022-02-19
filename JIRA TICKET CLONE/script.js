let addbtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');

let modalbox = document.querySelector(".modal-cont");
let maincont = document.querySelector(".main-cont");
let textArea = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["lightred","lightblue","lightgreen","black"];
let modalPriorityColor = colors[colors.length-1];

let addflag = false;
let removeflag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";




//addeventlistener for modal priority coloring
allPriorityColors.forEach((colorElem, idx)=>{
    colorElem.addEventListener("click", (e)=>{
        allPriorityColors.forEach((priorityColorElem, idx)=>{
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modalPriorityColor = colorElem.classList[0];
    })
})

addbtn.addEventListener("click", (e)=>{
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

removeBtn.addEventListener("click", (e)=>{
    removeflag = !removeflag;
    console.log(removeflag);
})


modalbox.addEventListener("keydown", (e)=>{
    let key = e.key; // event's object;
    if(key === "Enter"){
        modalbox.style.display = 'none';
        createticket(textArea.value,modalPriorityColor, shortid());
        addflag = false;
        textArea.value = "";
    }
})

function createticket(ticketTask,ticketColor, ticketID){
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute("class", "ticket-cont");
    ticketcont.innerHTML = `
                    <div class="ticket-color ${ticketColor}"></div>
                    <div class="ticket-id">#${ticketID}</div>
                    <div class="task-area">${ticketTask}</div>
                    <div class="ticket-lock">
                        <i class="fa-solid fa-lock"></i>
                    </div>`;
    maincont.appendChild(ticketcont);
    handleRemove(ticketcont);
    handleLock(ticketcont);

}

function handleRemove(ticket){
    //removeflag -> true -> remove
    if(removeflag) ticket.remove();
}

function handleLock(ticket){
let ticketLockElem = ticket.querySelector(".ticket-lock");
let ticketLock = ticketLockElem.children[0];
let ticketTaskArea = ticket.querySelector(".task-area");
ticketLock.addEventListener("click", (e)=>{
    if(ticketLock.classList.contains(lockClass)){
        ticketLock.classList.remove(lockClass);
        ticketLock.classList.add(unlockClass);
        ticketTaskArea.setAttribute("contenteditable", "true");
    }else{
        ticketLock.classList.remove(unlockClass);
        ticketLock.classList.add(lockClass);
        ticketTaskArea.setAttribute("contenteditable","false");
    }
})
}