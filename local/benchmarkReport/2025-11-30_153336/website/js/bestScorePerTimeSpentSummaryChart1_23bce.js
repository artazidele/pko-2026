
var chart_bestScorePerTimeSpentSummaryChart1_23bce = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_23bce'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 10000, y: -119457}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -120362}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -84585}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -84585}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -119959}
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score per time spent summary (higher left is better)'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
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
  chart_bestScorePerTimeSpentSummaryChart1_23bce.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_23bce.resize();
});
