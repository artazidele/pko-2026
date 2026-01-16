
var chart_bestScoreProblemStatisticChart1_25b9e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_25b9e'), {
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
                    {x: 850, y: -10597603}, {x: 903, y: -10594603}, {x: 916, y: -10591603}, {x: 994, y: -10588603}, {x: 1318, y: -10585603}, {x: 2204, y: -10582603}, {x: 10002, y: -10582603}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 881, y: -10597603}, {x: 1048, y: -10594603}, {x: 1590, y: -10591603}, {x: 6540, y: -10588603}, {x: 10000, y: -10585603}, {x: 10002, y: -10585603}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 849, y: -10597603}, {x: 1680, y: -10588603}, {x: 3670, y: -10585603}, {x: 7853, y: -10582603}, {x: 10001, y: -10582603}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 983, y: -10597603}, {x: 2031, y: -10588603}, {x: 3885, y: -10585603}, {x: 8561, y: -10582603}, {x: 10001, y: -10582603}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 883, y: -10597603}, {x: 907, y: -10594603}, {x: 972, y: -10593955}, {x: 1076, y: -10591603}, {x: 1442, y: -10588603}, {x: 1604, y: -10585603}, {x: 4002, y: -10582603}, {x: 10001, y: -10582603}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 857, y: -10597603}, {x: 8997, y: -10597463}, {x: 9284, y: -10596299}, {x: 9375, y: -10594463}, {x: 9453, y: -10594121}, {x: 10003, y: -10594121}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1051, y: -10597603}, {x: 8971, y: -10595668}, {x: 9014, y: -10592668}, {x: 9049, y: -10589668}, {x: 9179, y: -10587463}, {x: 10001, y: -10587463}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1133, y: -10597603}, {x: 1189, y: -10594603}, {x: 1374, y: -10588603}, {x: 3107, y: -10585603}, {x: 10002, y: -10585603}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1045, y: -10597603}, {x: 1101, y: -10594603}, {x: 1283, y: -10588603}, {x: 2799, y: -10587888}, {x: 3773, y: -10587029}, {x: 4028, y: -10586501}, {x: 4667, y: -10585603}, {x: 8825, y: -10585349}, {x: 10001, y: -10585349}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 941, y: -10597603}, {x: 996, y: -10594603}, {x: 1170, y: -10588603}, {x: 4940, y: -10587837}, {x: 7676, y: -10585603}, {x: 8403, y: -10582603}, {x: 10002, y: -10582603}
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
                text: 'example-data-3 best medium score statistic'
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
                suggestedMax: 10003,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best medium score'
                },
                ticks: {
                        stepSize: 100000
                        
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
  chart_bestScoreProblemStatisticChart1_25b9e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_25b9e.resize();
});
