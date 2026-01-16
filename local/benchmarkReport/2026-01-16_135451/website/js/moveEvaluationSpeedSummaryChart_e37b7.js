
var chart_moveEvaluationSpeedSummaryChart_e37b7 = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_e37b7'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2064}, {x: 164632584, y: 1558}, {x: 259200590, y: 1451}, {x: 359743372, y: 1627}, {x: 464848945, y: 1736}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2253}, {x: 164632584, y: 1473}, {x: 259200590, y: 1350}, {x: 359743372, y: 1640}, {x: 464848945, y: 1717}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2024}, {x: 164632584, y: 1465}, {x: 259200590, y: 1204}, {x: 359743372, y: 1770}, {x: 464848945, y: 1681}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2378}, {x: 164632584, y: 1579}, {x: 259200590, y: 1422}, {x: 359743372, y: 1750}, {x: 464848945, y: 1614}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 2249}, {x: 164632584, y: 1493}, {x: 259200590, y: 1430}, {x: 359743372, y: 1624}, {x: 464848945, y: 1327}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 1865}, {x: 164632584, y: 1407}, {x: 259200590, y: 1385}, {x: 359743372, y: 1480}, {x: 464848945, y: 1502}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 1628}, {x: 164632584, y: 1305}, {x: 259200590, y: 1417}, {x: 359743372, y: 1799}, {x: 464848945, y: 1578}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2235}, {x: 164632584, y: 1542}, {x: 259200590, y: 1472}, {x: 359743372, y: 1741}, {x: 464848945, y: 1535}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 1781}, {x: 164632584, y: 1495}, {x: 259200590, y: 1465}, {x: 359743372, y: 1785}, {x: 464848945, y: 1331}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 2062}, {x: 164632584, y: 1285}, {x: 259200590, y: 1496}, {x: 359743372, y: 1808}, {x: 464848945, y: 1623}
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
                text: 'Move evaluation speed summary (higher is better)'
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
                    text: 'Move evaluation speed per second'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_moveEvaluationSpeedSummaryChart_e37b7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_e37b7.resize();
});
