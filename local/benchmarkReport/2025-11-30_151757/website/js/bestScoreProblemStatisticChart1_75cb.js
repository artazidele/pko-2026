
var chart_bestScoreProblemStatisticChart1_75cb = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_75cb'), {
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
                    {x: 52, y: -100580}, {x: 193, y: -100571}, {x: 266, y: -100539}, {x: 454, y: -100513}, {x: 1188, y: -100460}, {x: 1209, y: -100410}, {x: 1337, y: -100397}, {x: 1483, y: -100348}, {x: 1730, y: -100286}, {x: 3435, y: -100163}, {x: 9621, y: -100160}, {x: 10000, y: -100160}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -100580}, {x: 10000, y: -100517}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 51, y: -100580}, {x: 335, y: -100551}, {x: 606, y: -100526}, {x: 863, y: -100473}, {x: 1275, y: -100411}, {x: 1698, y: -100402}, {x: 2108, y: -100398}, {x: 10000, y: -100275}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -100580}, {x: 333, y: -100551}, {x: 607, y: -100526}, {x: 864, y: -100473}, {x: 1278, y: -100411}, {x: 1701, y: -100402}, {x: 2108, y: -100398}, {x: 10000, y: -100275}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 53, y: -100580}, {x: 9094, y: -100569}, {x: 9233, y: -100458}, {x: 9243, y: -100430}, {x: 9249, y: -100338}, {x: 9252, y: -100270}, {x: 9261, y: -100191}, {x: 9614, y: -100175}, {x: 9616, y: -99987}, {x: 9641, y: -99939}, {x: 9672, y: -99922}, {x: 9675, y: -99863}, {x: 9760, y: -99862}, {x: 9828, y: -99608}, {x: 9858, y: -99379}, {x: 9879, y: -99343}, {x: 9926, y: -99340}, {x: 10000, y: -99340}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 55, y: -100580}, {x: 10000, y: -100580}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 54, y: -100580}, {x: 10000, y: -100580}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 58, y: -100580}, {x: 211, y: -100571}, {x: 281, y: -100547}, {x: 309, y: -100539}, {x: 459, y: -100536}, {x: 762, y: -100518}, {x: 773, y: -100505}, {x: 1751, y: -100485}, {x: 2306, y: -100421}, {x: 2688, y: -100284}, {x: 2699, y: -100243}, {x: 10000, y: -100243}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 54, y: -100580}, {x: 202, y: -100571}, {x: 273, y: -100547}, {x: 302, y: -100539}, {x: 452, y: -100536}, {x: 754, y: -100518}, {x: 765, y: -100505}, {x: 1738, y: -100485}, {x: 2285, y: -100421}, {x: 2667, y: -100284}, {x: 2677, y: -100243}, {x: 10000, y: -100243}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 54, y: -100580}, {x: 202, y: -100571}, {x: 274, y: -100547}, {x: 303, y: -100539}, {x: 454, y: -100536}, {x: 757, y: -100518}, {x: 768, y: -100505}, {x: 1746, y: -100485}, {x: 2309, y: -100421}, {x: 2694, y: -100284}, {x: 2705, y: -100243}, {x: 10000, y: -100243}
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
                text: 'example-data-2 best soft score statistic'
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
                suggestedMax: 10000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreProblemStatisticChart1_75cb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_75cb.resize();
});
