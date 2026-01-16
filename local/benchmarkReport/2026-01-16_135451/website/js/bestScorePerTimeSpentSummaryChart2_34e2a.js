
var chart_bestScorePerTimeSpentSummaryChart2_34e2a = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart2_34e2a'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -9870300}, {x: 10002, y: -49886100}, {x: 10004, y: -34650000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -3098700}, {x: 10002, y: -49780500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -49579200}, {x: 10002, y: -34831500}, {x: 10017, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -34805100}, {x: 10002, y: -20512800}, {x: 10003, y: -49302000}, {x: 10007, y: -9870300}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 10001, y: -34630200}, {x: 10002, y: -3098700}, {x: 10003, y: -47236200}, {x: 10007, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -3101884}, {x: 10001, y: -9872985}, {x: 10002, y: -48770700}, {x: 10004, y: -20514521}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -34894200}, {x: 10002, y: -49133700}, {x: 10003, y: -9870300}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -20512800}, {x: 10002, y: -34805100}, {x: 10005, y: -48906000}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10001, y: -20513437}, {x: 10002, y: -34861200}, {x: 10004, y: -47236200}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 10000, y: -3099986}, {x: 10002, y: -49302000}
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
                suggestedMax: 10017,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000000
                        
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
  chart_bestScorePerTimeSpentSummaryChart2_34e2a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart2_34e2a.resize();
});
