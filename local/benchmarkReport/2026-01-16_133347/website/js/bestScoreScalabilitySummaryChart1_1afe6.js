
var chart_bestScoreScalabilitySummaryChart1_1afe6 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_1afe6'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10611382}, {x: 359743372, y: -18540639}, {x: 464848945, y: -28603290}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10614382}, {x: 359743372, y: -18540639}, {x: 464848945, y: -28606290}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10614382}, {x: 359743372, y: -18540639}, {x: 464848945, y: -28603290}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10614382}, {x: 359743372, y: -18540639}, {x: 464848945, y: -28603290}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10611382}, {x: 359743372, y: -18540639}, {x: 464848945, y: -28603290}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10614382}, {x: 359743372, y: -18541216}, {x: 464848945, y: -28612646}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4779968}, {x: 259200590, y: -10617666}, {x: 359743372, y: -18544296}, {x: 464848945, y: -28613057}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10611382}, {x: 359743372, y: -18540868}, {x: 464848945, y: -28606413}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4778267}, {x: 259200590, y: -10614382}, {x: 359743372, y: -18543639}, {x: 464848945, y: -28607188}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1016744}, {x: 164632584, y: -4781267}, {x: 259200590, y: -10612891}, {x: 359743372, y: -18543639}, {x: 464848945, y: -28609290}
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
  chart_bestScoreScalabilitySummaryChart1_1afe6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_1afe6.resize();
});
