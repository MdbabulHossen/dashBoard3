const ctx = document.getElementById('myChart2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            label: '# of Votes',
            data: [55,6,23,16],
             label:'red',
            backgroundColor: [
                'rgb(1,112,185)',
                'rgb(255,174,0)',
                'rgb(81,96,172)',
                'rgb(112,206,231)',
               
                
            ],
            borderColor: [
                'rgb(21,91,225)',
                'rgb(255,177,0)',
                'rgb(247,91,130)',
                'rgb(74,200,239)',
            ],
            borderWidth: 0,
           
        }]
    },
    options: {
        responsive:false,
        maintainAspectRatio:false,
       
    }
});