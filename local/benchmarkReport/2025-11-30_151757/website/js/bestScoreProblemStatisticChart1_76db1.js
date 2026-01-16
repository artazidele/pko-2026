
var chart_bestScoreProblemStatisticChart1_76db1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_76db1'), {
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
                    {x: 147, y: -116526}, {x: 156, y: -116215}, {x: 351, y: -115706}, {x: 386, y: -115648}, {x: 467, y: -114275}, {x: 561, y: -114041}, {x: 721, y: -113530}, {x: 741, y: -113489}, {x: 767, y: -113425}, {x: 863, y: -113397}, {x: 1019, y: -113361}, {x: 1264, y: -113145}, {x: 1402, y: -113116}, {x: 1475, y: -112933}, {x: 1480, y: -112221}, {x: 1789, y: -112154}, {x: 2133, y: -112092}, {x: 3755, y: -112020}, {x: 4654, y: -111911}, {x: 10000, y: -111911}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 146, y: -116526}, {x: 194, y: -116215}, {x: 402, y: -115738}, {x: 497, y: -114365}, {x: 9869, y: -113586}, {x: 10000, y: -113445}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 148, y: -116526}, {x: 363, y: -116017}, {x: 681, y: -114644}, {x: 10000, y: -114242}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 148, y: -116526}, {x: 363, y: -116017}, {x: 678, y: -114644}, {x: 10000, y: -114242}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 147, y: -116526}, {x: 10000, y: -116526}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 147, y: -116526}, {x: 10000, y: -116526}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 148, y: -116526}, {x: 10000, y: -116526}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 149, y: -116526}, {x: 158, y: -116215}, {x: 355, y: -115998}, {x: 470, y: -115721}, {x: 658, y: -115246}, {x: 4771, y: -115024}, {x: 6883, y: -114893}, {x: 8404, y: -114883}, {x: 8554, y: -114847}, {x: 10000, y: -114847}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 146, y: -116526}, {x: 154, y: -116215}, {x: 353, y: -115998}, {x: 470, y: -115721}, {x: 655, y: -115246}, {x: 7207, y: -115035}, {x: 8522, y: -114984}, {x: 10000, y: -114984}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 147, y: -116526}, {x: 156, y: -116215}, {x: 354, y: -115998}, {x: 469, y: -115721}, {x: 654, y: -115246}, {x: 10000, y: -115246}
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
                text: 'example-data-3 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_76db1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_76db1.resize();
});
