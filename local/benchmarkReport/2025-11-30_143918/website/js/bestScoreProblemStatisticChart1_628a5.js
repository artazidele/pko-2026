
var chart_bestScoreProblemStatisticChart1_628a5 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_628a5'), {
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
                    {x: 45, y: -106478}, {x: 70, y: -106259}, {x: 83, y: -101418}, {x: 96, y: -101273}, {x: 110, y: -101043}, {x: 122, y: -101019}, {x: 135, y: -100947}, {x: 146, y: -100603}, {x: 157, y: -100140}, {x: 170, y: -99899}, {x: 201, y: -99295}, {x: 404, y: -99291}, {x: 416, y: -99286}, {x: 429, y: -99236}, {x: 441, y: -99183}, {x: 454, y: -99160}, {x: 1238, y: -99136}, {x: 1348, y: -99103}, {x: 10000, y: -99103}
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 25, y: -106478}, {x: 48, y: -106259}, {x: 67, y: -101418}, {x: 88, y: -101075}, {x: 108, y: -100054}, {x: 129, y: -99813}, {x: 153, y: -99338}, {x: 182, y: -99266}, {x: 220, y: -99167}, {x: 407, y: -99134}, {x: 680, y: -99121}, {x: 1335, y: -99103}, {x: 10000, y: -99103}
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 20, y: -106478}, {x: 24, y: -106259}, {x: 25, y: -101879}, {x: 531, y: -101449}, {x: 1382, y: -100550}, {x: 2394, y: -100416}, {x: 2672, y: -99970}, {x: 3792, y: -99798}, {x: 5165, y: -99783}, {x: 5182, y: -99768}, {x: 5196, y: -99715}, {x: 5202, y: -99704}, {x: 7439, y: -99532}, {x: 7440, y: -99440}, {x: 8304, y: -99279}, {x: 9845, y: -99226}, {x: 10000, y: -99226}
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
  chart_bestScoreProblemStatisticChart1_628a5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_628a5.resize();
});
