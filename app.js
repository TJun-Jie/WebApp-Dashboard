
const trafficCanvas = document.querySelector('#traffic-chart');
let trafficOptions = {
    aspectRatio: 1.9,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

const trafficDataMonthly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

const trafficDataHourly = {
    labels: ['12:00PM', '12:10PM', '12:20PM', '12:30PM', '12:40PM', '12:50PM'],
    datasets: [{
        backgroundColor: 'rgba(167, 197, 139, .3)',
        borderColor: 'rgb(177, 207, 159)',
        data: [42, 44, 65, 34, 33, 34, 56],
        borderWidth: 2,
        lineTension: 0
    }],
};

const trafficDataDaily = {
    labels: ['0AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [{
        backgroundColor: 'rgba(167, 197, 139, .3)',
        borderColor: 'rgb(177, 207, 159)',
        data: [5, 1, 1, 12, 32, 68, 64, 41],
        borderWidth: 2,
        lineTension: 0
    }],
};



const trafficDataWeekly = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        backgroundColor: 'rgba(167, 197, 139, .3)',
        borderColor: 'rgb(177, 207, 159)',
        data: [50, 74, 29, 49, 72, 80, 64],
        borderWidth: 2,
        lineTension: 0
    }],
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions
    });


const trafficNavButton = document.querySelectorAll('.traffic-nav-btn');

const returnTrafficData = (string) => {
    if(string === 'Daily'){
        return trafficDataDaily;
    }
    if(string === 'Monthly'){
        return trafficDataMonthly;
    }
    if(string === 'Hourly'){
        return trafficDataHourly;
    }
    if(string === 'Weekly'){
        return trafficDataWeekly;
    }
}

for(let i=0 ; i< trafficNavButton.length; i++){
    trafficNavButton[i].addEventListener('click', (e) => {
        trafficNavButton.forEach( button => {
            button.classList.remove('active');
        })
        trafficNavButton[i].classList.add('active');
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: returnTrafficData(e.target.textContent),
            options: trafficOptions
            });
        
    })
}


const alert = document.querySelector('.alert');
alert.addEventListener('click', () => {
    alert.style.display="none";
})


const bell = document.querySelector('.bell');
const dropdown = document.querySelector('.dropdown');
bell.addEventListener('click', () => {
    if(dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden');
    }
    else{
        dropdown.classList.add('hidden');

    }
})

const notificationCross = document.querySelectorAll('.notification-cross');
notifications.forEach( notification => {
   
} )

notificationCross.forEach(cross => {
    cross.addEventListener('click', (e) => {
        e.target.parentElement.style.display="none"
    })
})

const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });
         
    
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };
const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }
    
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        });
                
        
        