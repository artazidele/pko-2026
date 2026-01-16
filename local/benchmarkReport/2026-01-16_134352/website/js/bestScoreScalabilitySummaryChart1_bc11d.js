
var chart_bestScoreScalabilitySummaryChart1_bc11d = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_bc11d'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10582603}, {x: 359743372, y: -18590549}, {x: 464848945, y: -28650162}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1053238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10585603}, {x: 359743372, y: -18596549}, {x: 464848945, y: -28650162}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10582603}, {x: 359743372, y: -18596549}, {x: 464848945, y: -28656162}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10582603}, {x: 359743372, y: -18596549}, {x: 464848945, y: -28656162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10582603}, {x: 359743372, y: -18590549}, {x: 464848945, y: -28650162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4747316}, {x: 259200590, y: -10594121}, {x: 359743372, y: -18608458}, {x: 464848945, y: -28653162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10587463}, {x: 359743372, y: -18608549}, {x: 464848945, y: -28665162}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10585603}, {x: 359743372, y: -18596379}, {x: 464848945, y: -28650162}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10585349}, {x: 359743372, y: -18602874}, {x: 464848945, y: -28650162}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1050238}, {x: 164632584, y: -4744988}, {x: 259200590, y: -10582603}, {x: 359743372, y: -18602549}, {x: 464848945, y: -28650162}
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
                        stepSize: 100000
                        
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
  chart_bestScoreScalabilitySummaryChart1_bc11d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_bc11d.resize();
});
