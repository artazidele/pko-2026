
var chart_moveEvaluationSpeedSummaryChart_a4ab6 = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_a4ab6'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 19306}, {x: 164632584, y: 14400}, {x: 259200590, y: 7301}, {x: 359743372, y: 7434}, {x: 464848945, y: 6585}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 21293}, {x: 164632584, y: 14616}, {x: 259200590, y: 8980}, {x: 359743372, y: 4670}, {x: 464848945, y: 5927}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 21147}, {x: 164632584, y: 14561}, {x: 259200590, y: 7433}, {x: 359743372, y: 6671}, {x: 464848945, y: 5944}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 21226}, {x: 164632584, y: 14589}, {x: 259200590, y: 8812}, {x: 359743372, y: 7002}, {x: 464848945, y: 5684}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 20043}, {x: 164632584, y: 14392}, {x: 259200590, y: 9713}, {x: 359743372, y: 7744}, {x: 464848945, y: 6229}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 19920}, {x: 164632584, y: 14295}, {x: 259200590, y: 8662}, {x: 359743372, y: 7507}, {x: 464848945, y: 6239}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 19693}, {x: 164632584, y: 13677}, {x: 259200590, y: 8843}, {x: 359743372, y: 7261}, {x: 464848945, y: 6073}
                  ]
                }, 
{
                  label: 'Late Acceptance 200 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 20195}, {x: 164632584, y: 12993}, {x: 259200590, y: 9425}, {x: 359743372, y: 7634}, {x: 464848945, y: 6403}
                  ]
                }, 
{
                  label: 'Late Acceptance 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 20318}, {x: 164632584, y: 13071}, {x: 259200590, y: 9541}, {x: 359743372, y: 7244}, {x: 464848945, y: 5996}
                  ]
                }, 
{
                  label: 'Late Acceptance 600 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 20249}, {x: 164632584, y: 13902}, {x: 259200590, y: 8907}, {x: 359743372, y: 7471}, {x: 464848945, y: 6357}
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
                        stepSize: 100
                        
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
  chart_moveEvaluationSpeedSummaryChart_a4ab6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_a4ab6.resize();
});
