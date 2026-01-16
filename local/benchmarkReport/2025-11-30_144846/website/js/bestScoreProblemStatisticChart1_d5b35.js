
var chart_bestScoreProblemStatisticChart1_d5b35 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_d5b35'), {
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
                    {x: 63, y: -105799}, {x: 358, y: -105301}, {x: 425, y: -105069}, {x: 455, y: -104767}, {x: 482, y: -104587}, {x: 508, y: -104516}, {x: 535, y: -104454}, {x: 1051, y: -104442}, {x: 1134, y: -104436}, {x: 1150, y: -104361}, {x: 1167, y: -104316}, {x: 1185, y: -104305}, {x: 1201, y: -104237}, {x: 1218, y: -104066}, {x: 1234, y: -104023}, {x: 1255, y: -103986}, {x: 1380, y: -103978}, {x: 1394, y: -103949}, {x: 1437, y: -103879}, {x: 1452, y: -103836}, {x: 1470, y: -103813}, {x: 10000, y: -103813}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 52, y: -105799}, {x: 180, y: -104905}, {x: 222, y: -104677}, {x: 258, y: -104600}, {x: 332, y: -104503}, {x: 371, y: -104300}, {x: 401, y: -104130}, {x: 430, y: -104058}, {x: 491, y: -104027}, {x: 1118, y: -103999}, {x: 1208, y: -103934}, {x: 1238, y: -103823}, {x: 10000, y: -103823}
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 54, y: -105799}, {x: 127, y: -105552}, {x: 129, y: -105487}, {x: 154, y: -104754}, {x: 7611, y: -104513}, {x: 8563, y: -104453}, {x: 9303, y: -104448}, {x: 10000, y: -104448}
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
                text: 'example-data-2 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_d5b35.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_d5b35.resize();
});
