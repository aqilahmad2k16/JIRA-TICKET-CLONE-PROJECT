let addbtn = document.querySelector('.add-btn');
let modalbox = document.querySelector(".modal-cont");
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
    }

})