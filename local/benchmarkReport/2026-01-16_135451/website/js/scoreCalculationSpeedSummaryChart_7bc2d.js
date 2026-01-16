
var chart_scoreCalculationSpeedSummaryChart_7bc2d = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_7bc2d'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4346}, {x: 164632584, y: 3363}, {x: 259200590, y: 3032}, {x: 359743372, y: 3290}, {x: 464848945, y: 3510}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4518}, {x: 164632584, y: 2968}, {x: 259200590, y: 2731}, {x: 359743372, y: 3315}, {x: 464848945, y: 3472}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4061}, {x: 164632584, y: 2951}, {x: 259200590, y: 2438}, {x: 359743372, y: 3578}, {x: 464848945, y: 3399}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4769}, {x: 164632584, y: 3179}, {x: 259200590, y: 2875}, {x: 359743372, y: 3538}, {x: 464848945, y: 3265}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 4734}, {x: 164632584, y: 3209}, {x: 259200590, y: 2988}, {x: 359743372, y: 3284}, {x: 464848945, y: 2687}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4250}, {x: 164632584, y: 3198}, {x: 259200590, y: 2887}, {x: 359743372, y: 2995}, {x: 464848945, y: 3039}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 3855}, {x: 164632584, y: 3009}, {x: 259200590, y: 3026}, {x: 359743372, y: 3636}, {x: 464848945, y: 3192}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4786}, {x: 164632584, y: 3348}, {x: 259200590, y: 3094}, {x: 359743372, y: 3519}, {x: 464848945, y: 3106}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 3824}, {x: 164632584, y: 3235}, {x: 259200590, y: 3076}, {x: 359743372, y: 3607}, {x: 464848945, y: 2695}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 4435}, {x: 164632584, y: 2767}, {x: 259200590, y: 3146}, {x: 359743372, y: 3654}, {x: 464848945, y: 3281}
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
                text: 'Score calculation speed summary (higher is better)'
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
                    text: 'Score calculation speed per second'
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
  chart_scoreCalculationSpeedSummaryChart_7bc2d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_7bc2d.resize();
});
