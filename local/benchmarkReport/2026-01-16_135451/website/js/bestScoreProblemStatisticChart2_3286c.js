
var chart_bestScoreProblemStatisticChart2_3286c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_3286c'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1248, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 599, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 796, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 583, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 592, y: -3098700}, {x: 10002, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 667, y: -3098700}, {x: 5948, y: -3102715}, {x: 5984, y: -3102715}, {x: 7583, y: -3101267}, {x: 7869, y: -3098995}, {x: 8198, y: -3102487}, {x: 8492, y: -3101884}, {x: 10000, y: -3101884}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 602, y: -3098700}, {x: 7854, y: -3106598}, {x: 7893, y: -3106598}, {x: 8879, y: -3102616}, {x: 8889, y: -3101153}, {x: 9661, y: -3101453}, {x: 9799, y: -3099989}, {x: 9819, y: -3098806}, {x: 10001, y: -3098806}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 583, y: -3098700}, {x: 651, y: -3098700}, {x: 961, y: -3104237}, {x: 2220, y: -3102725}, {x: 3169, y: -3100584}, {x: 4961, y: -3099131}, {x: 7087, y: -3098700}, {x: 7384, y: -3099313}, {x: 10002, y: -3099313}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 960, y: -3098700}, {x: 1072, y: -3098700}, {x: 1439, y: -3104237}, {x: 3706, y: -3099736}, {x: 3736, y: -3100805}, {x: 6822, y: -3102792}, {x: 7099, y: -3098700}, {x: 10002, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 734, y: -3098700}, {x: 796, y: -3098700}, {x: 1138, y: -3104237}, {x: 2930, y: -3099736}, {x: 2965, y: -3100805}, {x: 3761, y: -3100270}, {x: 6125, y: -3099986}, {x: 10000, y: -3099986}
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
                text: 'example-data-1 best soft score statistic'
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
                suggestedMax: 10002,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_bestScoreProblemStatisticChart2_3286c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_3286c.resize();
});
