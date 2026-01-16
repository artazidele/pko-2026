
var chart_bestScoreProblemStatisticChart1_d16d1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_d16d1'), {
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
                    {x: 2421, y: -4819757}, {x: 2491, y: -4816757}, {x: 2712, y: -4813757}, {x: 2985, y: -4810757}, {x: 4083, y: -4807757}, {x: 4531, y: -4804757}, {x: 5701, y: -4801757}, {x: 10001, y: -4801757}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2288, y: -4819757}, {x: 2886, y: -4810757}, {x: 7498, y: -4804757}, {x: 10001, y: -4801757}, {x: 10002, y: -4801757}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2331, y: -4819757}, {x: 7478, y: -4810757}, {x: 10001, y: -4804757}, {x: 10002, y: -4804757}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2637, y: -4819757}, {x: 5785, y: -4810757}, {x: 10005, y: -4804757}, {x: 10007, y: -4804757}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 2701, y: -4819757}, {x: 2875, y: -4810757}, {x: 3145, y: -4807757}, {x: 3563, y: -4804757}, {x: 4627, y: -4801757}, {x: 10001, y: -4801757}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2196, y: -4819757}, {x: 2359, y: -4810757}, {x: 6403, y: -4808168}, {x: 10001, y: -4808168}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2382, y: -4819757}, {x: 2565, y: -4810757}, {x: 10003, y: -4810757}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2583, y: -4819757}, {x: 2654, y: -4816757}, {x: 3119, y: -4810757}, {x: 3460, y: -4810197}, {x: 3729, y: -4808301}, {x: 7383, y: -4807869}, {x: 8004, y: -4807757}, {x: 8860, y: -4805314}, {x: 10002, y: -4805314}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2202, y: -4819757}, {x: 2260, y: -4816757}, {x: 2715, y: -4810757}, {x: 3029, y: -4810197}, {x: 3276, y: -4808301}, {x: 4150, y: -4807757}, {x: 6632, y: -4806236}, {x: 10002, y: -4806236}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2649, y: -4819757}, {x: 2747, y: -4816757}, {x: 3415, y: -4810757}, {x: 3970, y: -4810197}, {x: 4471, y: -4808301}, {x: 5719, y: -4807757}, {x: 10002, y: -4807757}
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
                text: 'example-data-2 best medium score statistic'
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
                suggestedMax: 10007,
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
  chart_bestScoreProblemStatisticChart1_d16d1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_d16d1.resize();
});
