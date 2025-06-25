const lblDayResult = document.getElementById("lblDayResult");
const lblMonthResult = document.getElementById("lblMonthResult");
const lblYearResult = document.getElementById("lblYearResult");
const lblOutput = document.getElementById("lblOutput");

document.querySelectorAll('.sliderDay').forEach(slider => {
    slider.addEventListener('input', function () {
        lblDayResult.textContent = ""

        const lblDigit = document.querySelector(`label[for="${this.id}"]`);
        if (lblDigit) lblDigit.textContent = this.value;

        document.querySelectorAll('.sliderDay').forEach(lblElement => {
            
            lblDayResult.textContent += lblElement.value
        });
          
        lblDayResult.textContent = parseInt(lblDayResult.textContent, 2);
        
        outputDateResult();
    });
});

document.querySelectorAll('.sliderMonth').forEach(slider => {
    slider.addEventListener('input', function () {
        lblMonthResult.textContent = ""

        const lblDigit = document.querySelector(`label[for="${this.id}"]`);
        if (lblDigit) lblDigit.textContent = this.value;

        document.querySelectorAll('.sliderMonth').forEach(lblElement => {
            
            lblMonthResult.textContent += lblElement.value
        });
          
        lblMonthResult.textContent = parseInt(lblMonthResult.textContent, 2);
        
        outputDateResult();
    });
});

document.querySelectorAll('.sliderYear').forEach(slider => {
    slider.addEventListener('input', function () {
        lblYearResult.textContent = ""

        const lblDigit = document.querySelector(`label[for="${this.id}"]`);
        if (lblDigit) lblDigit.textContent = this.value;

        document.querySelectorAll('.sliderYear').forEach(lblElement => {
            
            lblYearResult.textContent += lblElement.value
        });
          
        lblYearResult.textContent = parseInt(lblYearResult.textContent, 2);
        
        outputDateResult();
    });
});

function outputDateResult() {
    let day = lblDayResult.textContent;
    let month = lblMonthResult.textContent; 
    let year = lblYearResult.textContent;
    
    let date = new Date(year, month - 1, day); 
    let options = { month: 'long' }; 
    let monthName = date.toLocaleString('en-US', options);
    let suffix = getOrdinalSuffix(day);
    
    lblOutput.textContent = `${monthName} ${day}${suffix}, ${year}`;
}

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}