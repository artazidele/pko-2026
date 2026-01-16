
var chart_bestScoreSummaryChart0_93c90 = new Chart(document.getElementById('chart_bestScoreSummaryChart0_93c90'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1810005
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1800005
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1780005
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1750005
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1580005
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1680005
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1730005
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1700005
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1580005
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -400000, -800000, -1200000, -1600000, -1750005
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
                text: 'Best hard score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreSummaryChart0_93c90.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart0_93c90.resize();
});