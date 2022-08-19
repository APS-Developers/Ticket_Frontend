const ctx = document.getElementById('piechart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Within SLA', 'Outside SLA '],
        datasets: [{
            label: 'SLA Status',
            data: [12, 19],
            backgroundColor: [
                '#800020',
                '#de818e',
            
            ],
            hoverOffset: 6
        }]
    },
    options: {
        responsive: true
    }
});

