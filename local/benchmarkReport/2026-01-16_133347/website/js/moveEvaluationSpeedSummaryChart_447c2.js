
var chart_moveEvaluationSpeedSummaryChart_447c2 = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_447c2'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 16381}, {x: 164632584, y: 10641}, {x: 259200590, y: 7364}, {x: 359743372, y: 7460}, {x: 464848945, y: 6063}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 17645}, {x: 164632584, y: 10754}, {x: 259200590, y: 7376}, {x: 359743372, y: 7585}, {x: 464848945, y: 6227}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 16538}, {x: 164632584, y: 10928}, {x: 259200590, y: 9314}, {x: 359743372, y: 7364}, {x: 464848945, y: 6708}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 17671}, {x: 164632584, y: 8803}, {x: 259200590, y: 9472}, {x: 359743372, y: 7507}, {x: 464848945, y: 6507}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 17634}, {x: 164632584, y: 9985}, {x: 259200590, y: 8816}, {x: 359743372, y: 7186}, {x: 464848945, y: 6530}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 14726}, {x: 164632584, y: 9696}, {x: 259200590, y: 5717}, {x: 359743372, y: 5420}, {x: 464848945, y: 5259}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 12545}, {x: 164632584, y: 8678}, {x: 259200590, y: 5594}, {x: 359743372, y: 5049}, {x: 464848945, y: 5086}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 15166}, {x: 164632584, y: 11065}, {x: 259200590, y: 8578}, {x: 359743372, y: 7276}, {x: 464848945, y: 6557}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 15907}, {x: 164632584, y: 10228}, {x: 259200590, y: 8468}, {x: 359743372, y: 6521}, {x: 464848945, y: 6429}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 16309}, {x: 164632584, y: 9733}, {x: 259200590, y: 8695}, {x: 359743372, y: 6000}, {x: 464848945, y: 6428}
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
  chart_moveEvaluationSpeedSummaryChart_447c2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_447c2.resize();
});
