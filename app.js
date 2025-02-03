function generateCalendar() {
    const cycleStart = document.getElementById("cycleStart").value;
    if (!cycleStart) {
        alert("Please enter a valid date.");
        return;
    }
    
    const startDate = new Date(cycleStart);
    const ovulationDay = new Date(startDate);
    ovulationDay.setDate(startDate.getDate() + 14);
    
    const fertileWindowStart = new Date(ovulationDay);
    fertileWindowStart.setDate(ovulationDay.getDate() - 5);
    
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";
    
    let firstDayOfWeek = new Date(startDate);
    firstDayOfWeek.setDate(1);
    let startDay = firstDayOfWeek.getDay();
    
    for (let i = 0; i < startDay; i++) {
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
}
