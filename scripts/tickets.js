let ticketCardsArray = document.getElementsByClassName('qty')

for(var i = 0; i<ticketCardsArray.length; i++){
    let ticketAdd = ticketCardsArray[i].children[2]
    let ticketSub = ticketCardsArray[i].children[0]
    let ticketQty = ticketCardsArray[i].children[1]
    ticketAdd.addEventListener("click",()=>{
        if(parseInt(ticketQty.textContent) < 9){
            ticketQty.textContent = parseInt(ticketQty.textContent) + 1
        }
        updateBill()
    })
    ticketSub.addEventListener("click",()=>{
        if(parseInt(ticketQty.textContent) > 0){
            ticketQty.textContent = parseInt(ticketQty.textContent) - 1
        }   
        updateBill()
    })
}   

let billTable = document.getElementById("bill-table")
let bills = [document.getElementById("classic-bill"),document.getElementById("pro-bill"),document.getElementById("back-bill")]

function updateBill(){
    for(var i = 0; i < bills.length; i++){
        if(parseInt(ticketCardsArray[i].children[1].textContent) == 0){
            bills[i].style.display = 'hidden';
        }
        else{
            bills[i].style.display = 'visible';
        }

        bills[i].children[2].textContent = ticketCardsArray[i].children[1].textContent
        bills[i].children[3].textContent = parseInt(ticketCardsArray[i].children[1].textContent)*parseInt(bills[i].children[1].textContent)
    }
    document.getElementById("grand").children[3].textContent = parseInt(bills[0].children[3].textContent) + parseInt(bills[1].children[3].textContent) + parseInt(bills[2].children[3].textContent)
}





