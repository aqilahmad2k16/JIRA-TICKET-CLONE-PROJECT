let addbtn = document.querySelector('.add-btn');
let modalbox = document.querySelector(".modal-cont");
let maincont = document.querySelector(".main-cont");
let textArea = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["lightred","lightblue","lightgreen","black"];
let modalPriorityColor = colors[colors.length-1];
let addflag = false;



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
    let createticketcont = document.createElement("div");
    createticketcont.setAttribute("class", "ticket-cont");
    createticketcont.innerHTML = `
                    <div class="ticket-color ${ticketColor}"></div>
                    <div class="ticket-id">#${ticketID}</div>
                    <div class="task-area">${ticketTask}</div>`;
    maincont.appendChild(createticketcont);

}