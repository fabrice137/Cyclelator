function generateCalendar() {
    const cycleStart = document.getElementById("cycleStart").value;
    if (!cycleStart) {
        alert("Please enter a valid date.");
        return;
    }
    
    let logs = "";

    const startDate = new Date(cycleStart);
    const ovulationDay = new Date(startDate);
    ovulationDay.setDate(startDate.getDate() + 14);
    
    const fertileWindowStart = new Date(ovulationDay);
    fertileWindowStart.setDate(ovulationDay.getDate() - 5);
    
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";
    

    for (let i = 0; i < 7; i++) {
        let dayBox = document.createElement("div");
        dayBox.classList.add("dayHeader");
        dayBox.innerText = "SMTWTFS"[i];
        
        calendarDiv.appendChild(dayBox);
    }

    let emptyBoxDays = daysToPreviousSunday(startDate);
    
    for (let i = 0; i < emptyBoxDays; i++) {
        let emptyBox = document.createElement("div");
        emptyBox.classList.add("day", "empty");
        calendarDiv.appendChild(emptyBox);
    }
    
    for (let i = 0; i < 28; i++) {
        let dayBox = document.createElement("div");
        dayBox.classList.add("day");
        let currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        dayBox.innerText = currentDate.getDate();
        
        if (currentDate >= fertileWindowStart && currentDate < ovulationDay) {
            dayBox.classList.add("fertile");
        }
        if (currentDate.getTime() === ovulationDay.getTime()) {
            dayBox.classList.add("ovulation");
        }
        
        calendarDiv.appendChild(dayBox);
    }
    
    // if(logs.length > 0) {
    //     const logDiv = document.getElementById("logs");
    //     logDiv.innerText = logs;
    // }
}

function daysToPreviousSunday(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 ? 0 : dayOfWeek;
}
