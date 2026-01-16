
var chart_bestScoreProblemStatisticChart2_74054 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_74054'), {
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
                    {x: 1734, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1701, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1716, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1720, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 1716, y: -116127000}, {x: 3959, y: -116127000}, {x: 4137, y: -116127180}, {x: 4223, y: -116127180}, {x: 4296, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1940, y: -116127000}, {x: 1955, y: -116127000}, {x: 4125, y: -116130499}, {x: 4128, y: -116130499}, {x: 4130, y: -116127216}, {x: 4182, y: -116127216}, {x: 4197, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1712, y: -116127000}, {x: 1721, y: -116127000}, {x: 3576, y: -116129679}, {x: 3587, y: -116129679}, {x: 3588, y: -116127000}, {x: 5000, y: -116127000}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1730, y: -116127000}, {x: 2414, y: -116127000}, {x: 2683, y: -116127116}, {x: 3688, y: -116127000}, {x: 3783, y: -116131546}, {x: 3815, y: -116131546}, {x: 3852, y: -116131338}, {x: 5000, y: -116131338}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1942, y: -116127000}, {x: 1986, y: -116127000}, {x: 2381, y: -116130887}, {x: 2392, y: -116130887}, {x: 3745, y: -116128467}, {x: 3773, y: -116129045}, {x: 4340, y: -116128593}, {x: 4561, y: -116128467}, {x: 5000, y: -116128467}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1755, y: -116127000}, {x: 1799, y: -116127000}, {x: 2512, y: -116133541}, {x: 3425, y: -116130892}, {x: 3429, y: -116127314}, {x: 3430, y: -116127314}, {x: 3472, y: -116129425}, {x: 3587, y: -116129425}, {x: 4033, y: -116129718}, {x: 5000, y: -116129718}
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
                text: 'example-data-4 best soft score statistic'
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
                suggestedMax: 5000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreProblemStatisticChart2_74054.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_74054.resize();
});
