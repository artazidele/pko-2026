
var chart_bestScoreScalabilitySummaryChart0_4ba08 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_4ba08'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Late Acceptance 200 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Late Acceptance 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
                  ]
                }, 
{
                  label: 'Late Acceptance 600 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -400000}, {x: 164632584, y: -800000}, {x: 259200590, y: -1200000}, {x: 359743372, y: -1600000}, {x: 464848945, y: -2000000}
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
                text: 'Best hard score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 464848945,
                type: 'linear',
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
  chart_bestScoreScalabilitySummaryChart0_4ba08.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_4ba08.resize();
});
