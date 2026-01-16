
var chart_bestScoreScalabilitySummaryChart1_f255d = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_f255d'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3875720}, {x: 164632584, y: -15862087}, {x: 259200590, y: -35460495}, {x: 359743372, y: -62837727}, {x: 464848945, y: -97684646}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3878720}, {x: 164632584, y: -15868087}, {x: 259200590, y: -35460495}, {x: 359743372, y: -62957727}, {x: 464848945, y: -97708646}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3881720}, {x: 164632584, y: -15868087}, {x: 259200590, y: -35463495}, {x: 359743372, y: -62951727}, {x: 464848945, y: -97714646}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3881720}, {x: 164632584, y: -15868087}, {x: 259200590, y: -35463495}, {x: 359743372, y: -62951727}, {x: 464848945, y: -97738646}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -3875720}, {x: 164632584, y: -15862087}, {x: 259200590, y: -35457495}, {x: 359743372, y: -62756727}, {x: 464848945, y: -97678646}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3893720}, {x: 164632584, y: -15862558}, {x: 259200590, y: -35454495}, {x: 359743372, y: -62744727}, {x: 464848945, y: -97843646}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3875720}, {x: 164632584, y: -15874087}, {x: 259200590, y: -35460495}, {x: 359743372, y: -62825727}, {x: 464848945, y: -97966646}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3875720}, {x: 164632584, y: -15865087}, {x: 259200590, y: -35460495}, {x: 359743372, y: -62824065}, {x: 464848945, y: -97752641}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3878720}, {x: 164632584, y: -15865087}, {x: 259200590, y: -35466276}, {x: 359743372, y: -62803194}, {x: 464848945, y: -97706738}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3878981}, {x: 164632584, y: -15865087}, {x: 259200590, y: -35475495}, {x: 359743372, y: -62819445}, {x: 464848945, y: -97749696}
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
  chart_bestScoreScalabilitySummaryChart1_f255d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_f255d.resize();
});
