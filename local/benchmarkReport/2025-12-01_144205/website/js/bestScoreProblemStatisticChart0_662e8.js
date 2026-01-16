
var chart_bestScoreProblemStatisticChart0_662e8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_662e8'), {
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
                    {x: 57, y: -147746}, {x: 88, y: -147724}, {x: 264, y: -147690}, {x: 314, y: -147689}, {x: 343, y: -147686}, {x: 346, y: -147680}, {x: 382, y: -147677}, {x: 441, y: -147641}, {x: 515, y: -147481}, {x: 6881, y: -147461}, {x: 10000, y: -147461}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 33, y: -147746}, {x: 61, y: -147724}, {x: 10000, y: -147564}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -147746}, {x: 143, y: -147724}, {x: 10000, y: -147564}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -147746}, {x: 140, y: -147724}, {x: 10000, y: -147564}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -147746}, {x: 33, y: -147743}, {x: 56, y: -147583}, {x: 111, y: -147549}, {x: 124, y: -147545}, {x: 146, y: -147542}, {x: 169, y: -147506}, {x: 202, y: -147484}, {x: 3073, y: -147461}, {x: 10000, y: -147461}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 25, y: -147746}, {x: 31, y: -147743}, {x: 54, y: -147583}, {x: 107, y: -147549}, {x: 120, y: -147545}, {x: 141, y: -147542}, {x: 166, y: -147506}, {x: 198, y: -147484}, {x: 3066, y: -147461}, {x: 10000, y: -147461}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 23, y: -147746}, {x: 28, y: -147743}, {x: 51, y: -147583}, {x: 161, y: -147547}, {x: 215, y: -147525}, {x: 471, y: -147487}, {x: 482, y: -147484}, {x: 858, y: -147481}, {x: 2078, y: -147464}, {x: 2131, y: -147461}, {x: 10000, y: -147461}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -147746}, {x: 35, y: -147724}, {x: 137, y: -147689}, {x: 225, y: -147683}, {x: 358, y: -147647}, {x: 383, y: -147494}, {x: 6166, y: -147489}, {x: 9194, y: -147488}, {x: 10000, y: -147488}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -147746}, {x: 35, y: -147724}, {x: 136, y: -147689}, {x: 223, y: -147683}, {x: 354, y: -147647}, {x: 379, y: -147494}, {x: 7893, y: -147490}, {x: 9840, y: -147487}, {x: 9950, y: -147481}, {x: 10000, y: -147481}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -147746}, {x: 35, y: -147724}, {x: 136, y: -147689}, {x: 223, y: -147683}, {x: 356, y: -147647}, {x: 382, y: -147494}, {x: 10000, y: -147494}
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
                suggestedMax: 10000,
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
  chart_bestScoreProblemStatisticChart0_662e8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_662e8.resize();
});
