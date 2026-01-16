
var chart_bestScoreProblemStatisticChart1_7eddc = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_7eddc'), {
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
                    {x: 1248, y: -1128775}, {x: 1352, y: -1122775}, {x: 1430, y: -1119775}, {x: 1470, y: -1116775}, {x: 1876, y: -1113775}, {x: 10001, y: -1113775}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 599, y: -1128775}, {x: 1003, y: -1122775}, {x: 2169, y: -1116775}, {x: 10001, y: -1113775}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 796, y: -1128775}, {x: 2902, y: -1122775}, {x: 9932, y: -1116775}, {x: 10001, y: -1116775}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 583, y: -1128775}, {x: 2716, y: -1122775}, {x: 8163, y: -1116775}, {x: 10000, y: -1113775}, {x: 10001, y: -1113775}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 592, y: -1128775}, {x: 614, y: -1125775}, {x: 701, y: -1122775}, {x: 842, y: -1116775}, {x: 1420, y: -1113775}, {x: 10002, y: -1113775}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 667, y: -1128775}, {x: 5948, y: -1126790}, {x: 5984, y: -1120790}, {x: 7583, y: -1120655}, {x: 7869, y: -1120655}, {x: 8198, y: -1118272}, {x: 10000, y: -1118272}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 602, y: -1128775}, {x: 7854, y: -1127996}, {x: 7893, y: -1124996}, {x: 8879, y: -1123691}, {x: 8889, y: -1122228}, {x: 9661, y: -1119528}, {x: 9799, y: -1118064}, {x: 9819, y: -1116881}, {x: 10001, y: -1116881}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 583, y: -1128775}, {x: 651, y: -1122775}, {x: 961, y: -1122312}, {x: 2220, y: -1120800}, {x: 3169, y: -1118659}, {x: 4961, y: -1117206}, {x: 7087, y: -1116775}, {x: 7384, y: -1114388}, {x: 10002, y: -1114388}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 960, y: -1128775}, {x: 1072, y: -1122775}, {x: 1439, y: -1122312}, {x: 3706, y: -1120811}, {x: 3736, y: -1118880}, {x: 6822, y: -1117867}, {x: 7099, y: -1116775}, {x: 10002, y: -1116775}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 734, y: -1128775}, {x: 796, y: -1122775}, {x: 1138, y: -1122312}, {x: 2930, y: -1120811}, {x: 2965, y: -1118880}, {x: 3761, y: -1118345}, {x: 6125, y: -1118061}, {x: 10000, y: -1118061}
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
                text: 'example-data-1 best medium score statistic'
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
                    text: 'Best medium score'
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
  chart_bestScoreProblemStatisticChart1_7eddc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_7eddc.resize();
});
