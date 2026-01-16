
var chart_winningScoreDifferenceSummaryChart0_75156 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart0_75156'), {
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
                    0, 0, 0, -4700, 0
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84600, -532900, -1663400, -186000, -119300
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84600, -515900, -1708000, -136100, -119300
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84600, -515900, -1708000, -136100, -119300
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -415200, -36800, -5900, -9500
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -415200, -36800, -5900, -9500
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -428600, -28500, 0, -9600
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -32700, -926300, -1709300, -200300, -123100
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -66800, -1416600, -1701500, -200300, -123100
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -97400, -1758800, -1701500, -200300, -123100
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
                text: 'Winning hard score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning hard score difference'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_winningScoreDifferenceSummaryChart0_75156.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart0_75156.resize();
});