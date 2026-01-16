
var chart_bestScoreProblemStatisticChart1_caaf8 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_caaf8'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 44, y: -93215}, {x: 79, y: -93211}, {x: 100, y: -93125}, {x: 112, y: -93002}, {x: 142, y: -92945}, {x: 177, y: -92914}, {x: 196, y: -92886}, {x: 10000, y: -92886}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 25, y: -93215}, {x: 43, y: -93211}, {x: 59, y: -93125}, {x: 78, y: -93002}, {x: 96, y: -92945}, {x: 118, y: -92914}, {x: 139, y: -92886}, {x: 10000, y: -92886}
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 30, y: -93215}, {x: 44, y: -93211}, {x: 48, y: -93210}, {x: 69, y: -93172}, {x: 72, y: -93171}, {x: 76, y: -93044}, {x: 78, y: -93026}, {x: 202, y: -93011}, {x: 475, y: -93010}, {x: 864, y: -92969}, {x: 1021, y: -92939}, {x: 2000, y: -92914}, {x: 2405, y: -92886}, {x: 10000, y: -92886}
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
                text: 'example-data-1 best soft score statistic'
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
                    text: 'Best soft score'
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
  chart_bestScoreProblemStatisticChart1_caaf8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_caaf8.resize();
});
