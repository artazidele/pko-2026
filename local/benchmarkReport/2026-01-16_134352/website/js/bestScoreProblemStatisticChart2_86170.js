
var chart_bestScoreProblemStatisticChart2_86170 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_86170'), {
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
                    {x: 1957, y: -35026200}, {x: 10001, y: -35026200}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2353, y: -35026200}, {x: 10002, y: -35026200}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1956, y: -35026200}, {x: 3138, y: -35028997}, {x: 5198, y: -35028997}, {x: 8304, y: -35026200}, {x: 10001, y: -35026200}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2018, y: -35026200}, {x: 3219, y: -35028997}, {x: 5183, y: -35028997}, {x: 8166, y: -35026200}, {x: 10001, y: -35026200}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 2244, y: -35026200}, {x: 10003, y: -35026200}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2004, y: -35026200}, {x: 2013, y: -35026200}, {x: 8470, y: -35032109}, {x: 10001, y: -35032109}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2092, y: -35026200}, {x: 10001, y: -35026200}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2111, y: -35026200}, {x: 2293, y: -35026200}, {x: 2332, y: -35029377}, {x: 2342, y: -35029377}, {x: 2688, y: -35029582}, {x: 2751, y: -35031311}, {x: 2866, y: -35031311}, {x: 4147, y: -35030139}, {x: 7095, y: -35028596}, {x: 7104, y: -35026933}, {x: 8549, y: -35029030}, {x: 10002, y: -35029030}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2137, y: -35026200}, {x: 2250, y: -35026200}, {x: 2276, y: -35029377}, {x: 2284, y: -35029377}, {x: 2630, y: -35032472}, {x: 2741, y: -35026768}, {x: 5984, y: -35029525}, {x: 10001, y: -35029525}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2479, y: -35026200}, {x: 2603, y: -35026200}, {x: 2630, y: -35029377}, {x: 2639, y: -35029377}, {x: 2993, y: -35032472}, {x: 3117, y: -35026768}, {x: 3924, y: -35026200}, {x: 10001, y: -35026200}
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
                suggestedMax: 10003,
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
  chart_bestScoreProblemStatisticChart2_86170.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_86170.resize();
});
