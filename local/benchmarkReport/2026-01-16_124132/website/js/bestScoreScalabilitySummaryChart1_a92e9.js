
var chart_bestScoreScalabilitySummaryChart1_a92e9 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_a92e9'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Late Acceptance 200 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Late Acceptance 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
                  ]
                }, 
{
                  label: 'Late Acceptance 600 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 0}, {x: 164632584, y: -21315}, {x: 259200590, y: -73701}, {x: 359743372, y: -149870}, {x: 464848945, y: -227787}
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
                text: 'Best medium score scalability summary (higher is better)'
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
                    text: 'Best medium score'
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
  chart_bestScoreScalabilitySummaryChart1_a92e9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_a92e9.resize();
});
