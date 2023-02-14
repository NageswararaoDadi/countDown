let time = document.getElementById('time')



function countDown(){
    let endDate = new Date('2023 2 21').getTime()
    
    let presntdate = new Date().getTime()
   // console.log(endDate, presntdate)
    let diff = endDate - presntdate 

    let days = Math.floor(diff/(1000*60*60*24));
    let hours =  Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    let min =  Math.floor((diff % (1000*60*60)) / (1000*60));
    let sec =  Math.floor((diff % (1000*60)) / (1000));

    time.textContent = `${days}D:${hours}H:${min}M:${sec}S` 
}



let clearId = setInterval(countDown,1000)

function stopTime(){
    clearInterval(clearId)
}
