
var chart_bestScoreProblemStatisticChart1_addff = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_addff'), {
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
                    {x: 3480, y: -28665162}, {x: 3601, y: -28662162}, {x: 3686, y: -28659162}, {x: 4058, y: -28656162}, {x: 4268, y: -28653162}, {x: 5449, y: -28650162}, {x: 10001, y: -28650162}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3441, y: -28665162}, {x: 3699, y: -28662162}, {x: 5448, y: -28656162}, {x: 8061, y: -28653162}, {x: 10001, y: -28650162}, {x: 10002, y: -28650162}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3509, y: -28665162}, {x: 5202, y: -28659162}, {x: 6984, y: -28656162}, {x: 10001, y: -28656162}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3716, y: -28665162}, {x: 5089, y: -28659162}, {x: 6842, y: -28656162}, {x: 10001, y: -28656162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 3452, y: -28665162}, {x: 3643, y: -28662162}, {x: 3660, y: -28659162}, {x: 3896, y: -28656162}, {x: 3929, y: -28653162}, {x: 4623, y: -28650162}, {x: 10002, y: -28650162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3541, y: -28665162}, {x: 9171, y: -28659162}, {x: 9539, y: -28653162}, {x: 10002, y: -28653162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3684, y: -28665162}, {x: 10002, y: -28665162}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3803, y: -28665162}, {x: 3916, y: -28662162}, {x: 4313, y: -28653162}, {x: 4342, y: -28650162}, {x: 10001, y: -28650162}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 4016, y: -28665162}, {x: 4213, y: -28662162}, {x: 4885, y: -28653162}, {x: 4925, y: -28650162}, {x: 10001, y: -28650162}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 3600, y: -28665162}, {x: 3710, y: -28662162}, {x: 4098, y: -28653162}, {x: 4127, y: -28650162}, {x: 10001, y: -28650162}
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
                text: 'example-data-5 best medium score statistic'
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
  chart_bestScoreProblemStatisticChart1_addff.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_addff.resize();
});
