
var chart_bestScoreProblemStatisticChart2_2aa57 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_2aa57'), {
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
                    {x: 833, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 831, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 808, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 794, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 853, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 824, y: -66132000}, {x: 840, y: -66132000}, {x: 3538, y: -66135561}, {x: 3623, y: -66135561}, {x: 3682, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 780, y: -66132000}, {x: 4861, y: -66132000}, {x: 4868, y: -66134862}, {x: 4880, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 846, y: -66132000}, {x: 923, y: -66132000}, {x: 1124, y: -66136578}, {x: 1299, y: -66133966}, {x: 1406, y: -66132000}, {x: 1614, y: -66132000}, {x: 2111, y: -66135076}, {x: 2741, y: -66141728}, {x: 2760, y: -66137938}, {x: 3206, y: -66135076}, {x: 3312, y: -66135076}, {x: 3661, y: -66132311}, {x: 3990, y: -66132733}, {x: 3997, y: -66132311}, {x: 4914, y: -66132000}, {x: 5000, y: -66132000}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 774, y: -66132000}, {x: 845, y: -66132000}, {x: 1107, y: -66138005}, {x: 1517, y: -66132000}, {x: 1657, y: -66140401}, {x: 1833, y: -66138215}, {x: 3310, y: -66132886}, {x: 4858, y: -66134781}, {x: 5000, y: -66134781}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 765, y: -66132000}, {x: 838, y: -66132000}, {x: 1328, y: -66132924}, {x: 1384, y: -66132924}, {x: 2104, y: -66141073}, {x: 2113, y: -66141073}, {x: 2479, y: -66134706}, {x: 3702, y: -66138992}, {x: 4423, y: -66132000}, {x: 5000, y: -66132000}
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
  chart_bestScoreProblemStatisticChart2_2aa57.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_2aa57.resize();
});
