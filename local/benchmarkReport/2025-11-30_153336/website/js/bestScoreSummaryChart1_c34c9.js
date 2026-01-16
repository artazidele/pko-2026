
var chart_bestScoreSummaryChart1_c34c9 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_c34c9'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -84585, -103113, -113318, -117090, -119457
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84585, -103237, -113909, -117554, -120362
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84585, -103113, -113354, -117279, -119778
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84585, -103113, -113354, -117279, -119778
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84594, -102609, -113909, -118556, -120529
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84697, -104355, -113909, -118556, -120529
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84818, -104355, -113909, -118556, -120529
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84585, -103454, -113517, -118031, -119959
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84585, -103611, -113517, -118073, -119959
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84646, -103483, -113517, -118073, -119959
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreSummaryChart1_c34c9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_c34c9.resize();
});