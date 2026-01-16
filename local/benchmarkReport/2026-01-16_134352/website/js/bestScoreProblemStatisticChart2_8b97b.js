
var chart_bestScoreProblemStatisticChart2_8b97b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_8b97b'), {
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
                    {x: 850, y: -20512800}, {x: 10002, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 881, y: -20512800}, {x: 10002, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 849, y: -20512800}, {x: 10001, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 983, y: -20512800}, {x: 10001, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 883, y: -20512800}, {x: 907, y: -20512800}, {x: 972, y: -20515152}, {x: 1076, y: -20512800}, {x: 10001, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 857, y: -20512800}, {x: 8997, y: -20518660}, {x: 9284, y: -20520496}, {x: 9375, y: -20518660}, {x: 9453, y: -20518318}, {x: 10003, y: -20518318}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1051, y: -20512800}, {x: 8971, y: -20516865}, {x: 9049, y: -20516865}, {x: 9179, y: -20514660}, {x: 10001, y: -20514660}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1133, y: -20512800}, {x: 10002, y: -20512800}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1045, y: -20512800}, {x: 1283, y: -20512800}, {x: 2799, y: -20515085}, {x: 3773, y: -20514226}, {x: 4028, y: -20513698}, {x: 4667, y: -20512800}, {x: 8825, y: -20515546}, {x: 10001, y: -20515546}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 941, y: -20512800}, {x: 1170, y: -20512800}, {x: 4940, y: -20515034}, {x: 7676, y: -20512800}, {x: 10002, y: -20512800}
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
  chart_bestScoreProblemStatisticChart2_8b97b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_8b97b.resize();
});
