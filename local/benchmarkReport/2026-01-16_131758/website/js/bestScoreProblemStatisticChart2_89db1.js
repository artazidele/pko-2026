
var chart_bestScoreProblemStatisticChart2_89db1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_89db1'), {
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
                    {x: 2766, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2965, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2738, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2786, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 2835, y: -180130500}, {x: 3319, y: -180130500}, {x: 3366, y: -180131200}, {x: 3373, y: -180131200}, {x: 3380, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2745, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2755, y: -180130500}, {x: 5000, y: -180130500}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2761, y: -180130500}, {x: 2764, y: -180130500}, {x: 2845, y: -180133924}, {x: 2877, y: -180133924}, {x: 3080, y: -180130500}, {x: 3082, y: -180130500}, {x: 3230, y: -180133084}, {x: 4265, y: -180132495}, {x: 5000, y: -180132495}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2745, y: -180130500}, {x: 2749, y: -180130500}, {x: 2830, y: -180133924}, {x: 2865, y: -180133924}, {x: 2925, y: -180131358}, {x: 2957, y: -180130500}, {x: 3175, y: -180134399}, {x: 3442, y: -180133456}, {x: 3683, y: -180142314}, {x: 4743, y: -180131592}, {x: 5000, y: -180131592}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2766, y: -180130500}, {x: 2769, y: -180130500}, {x: 2857, y: -180133924}, {x: 2889, y: -180133924}, {x: 2949, y: -180131358}, {x: 2979, y: -180130500}, {x: 3208, y: -180133422}, {x: 3788, y: -180134821}, {x: 3789, y: -180133758}, {x: 3826, y: -180133540}, {x: 3842, y: -180133540}, {x: 4325, y: -180145432}, {x: 4333, y: -180145432}, {x: 4991, y: -180132550}, {x: 5000, y: -180132550}
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
                text: 'example-data-5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart2_89db1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_89db1.resize();
});
