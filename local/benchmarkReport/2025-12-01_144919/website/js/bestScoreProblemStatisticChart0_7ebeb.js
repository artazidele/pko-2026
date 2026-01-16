
var chart_bestScoreProblemStatisticChart0_7ebeb = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_7ebeb'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 57, y: -145793}, {x: 73, y: -142598}, {x: 80, y: -142532}, {x: 99, y: -142490}, {x: 214, y: -142450}, {x: 284, y: -142404}, {x: 2091, y: -142323}, {x: 5304, y: -138228}, {x: 5336, y: -138212}, {x: 5374, y: -138004}, {x: 5398, y: -137657}, {x: 10000, y: -137657}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 34, y: -145793}, {x: 61, y: -142598}, {x: 10000, y: -138503}, {x: 10001, y: -138503}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -145793}, {x: 142, y: -142598}, {x: 10000, y: -138503}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -145793}, {x: 141, y: -142598}, {x: 10000, y: -138503}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -145793}, {x: 31, y: -145731}, {x: 48, y: -144499}, {x: 65, y: -144006}, {x: 97, y: -143955}, {x: 151, y: -143930}, {x: 182, y: -142450}, {x: 197, y: -142404}, {x: 1773, y: -138309}, {x: 1792, y: -138308}, {x: 1805, y: -138085}, {x: 2134, y: -137738}, {x: 3962, y: -137657}, {x: 10000, y: -137657}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -145793}, {x: 31, y: -145731}, {x: 48, y: -144499}, {x: 65, y: -144006}, {x: 97, y: -143955}, {x: 152, y: -143930}, {x: 182, y: -142450}, {x: 198, y: -142404}, {x: 1769, y: -138309}, {x: 1788, y: -138308}, {x: 1802, y: -138085}, {x: 2132, y: -137738}, {x: 3965, y: -137657}, {x: 10000, y: -137657}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 23, y: -145793}, {x: 28, y: -145731}, {x: 45, y: -144499}, {x: 63, y: -144006}, {x: 96, y: -143955}, {x: 151, y: -143930}, {x: 182, y: -142450}, {x: 196, y: -142404}, {x: 1769, y: -138309}, {x: 1788, y: -138308}, {x: 1801, y: -138085}, {x: 2131, y: -137738}, {x: 3958, y: -137657}, {x: 10000, y: -137657}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -145793}, {x: 27, y: -142598}, {x: 5095, y: -139443}, {x: 5350, y: -139193}, {x: 6469, y: -139015}, {x: 6712, y: -138797}, {x: 7158, y: -138611}, {x: 7620, y: -138568}, {x: 7630, y: -138475}, {x: 8086, y: -138389}, {x: 9177, y: -137984}, {x: 10000, y: -137984}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -145793}, {x: 28, y: -142598}, {x: 4544, y: -142486}, {x: 4545, y: -142442}, {x: 6655, y: -139326}, {x: 7961, y: -138325}, {x: 10000, y: -138325}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -145793}, {x: 28, y: -142598}, {x: 5065, y: -139732}, {x: 6318, y: -139518}, {x: 7050, y: -139482}, {x: 7547, y: -139395}, {x: 7548, y: -139280}, {x: 8555, y: -138987}, {x: 9105, y: -138868}, {x: 9484, y: -138804}, {x: 9500, y: -138631}, {x: 10000, y: -138631}
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
                text: 'example-data-1 best hard score statistic'
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
                suggestedMax: 10001,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreProblemStatisticChart0_7ebeb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_7ebeb.resize();
});
