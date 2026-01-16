
var chart_bestScoreProblemStatisticChart1_c6809 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_c6809'), {
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
                    {x: 49, y: -101697}, {x: 3196, y: -101646}, {x: 3224, y: -101550}, {x: 4628, y: -101490}, {x: 4640, y: -101441}, {x: 4652, y: -101399}, {x: 4723, y: -101267}, {x: 4765, y: -101125}, {x: 4780, y: -101116}, {x: 10000, y: -101116}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 47, y: -101697}, {x: 141, y: -101681}, {x: 467, y: -101660}, {x: 570, y: -101607}, {x: 605, y: -101545}, {x: 639, y: -101540}, {x: 782, y: -101429}, {x: 819, y: -101340}, {x: 849, y: -101253}, {x: 881, y: -101248}, {x: 910, y: -101133}, {x: 4671, y: -101112}, {x: 4790, y: -101093}, {x: 4821, y: -101084}, {x: 4908, y: -100992}, {x: 10000, y: -100992}
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 49, y: -101697}, {x: 102, y: -101647}, {x: 125, y: -101627}, {x: 140, y: -101596}, {x: 544, y: -101582}, {x: 728, y: -101400}, {x: 2241, y: -101285}, {x: 2359, y: -101268}, {x: 3480, y: -101226}, {x: 3706, y: -101213}, {x: 3707, y: -101193}, {x: 9070, y: -101175}, {x: 9665, y: -101110}, {x: 10000, y: -101110}
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
  chart_bestScoreProblemStatisticChart1_c6809.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_c6809.resize();
});
