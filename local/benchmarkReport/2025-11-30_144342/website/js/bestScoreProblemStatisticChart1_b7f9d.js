
var chart_bestScoreProblemStatisticChart1_b7f9d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b7f9d'), {
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
                    {x: 149, y: -118748}, {x: 762, y: -118532}, {x: 782, y: -118455}, {x: 801, y: -118353}, {x: 820, y: -118299}, {x: 856, y: -118181}, {x: 2672, y: -118061}, {x: 2736, y: -118003}, {x: 2758, y: -117972}, {x: 2985, y: -117894}, {x: 3004, y: -117819}, {x: 4796, y: -117788}, {x: 4818, y: -117762}, {x: 4840, y: -117739}, {x: 4859, y: -117714}, {x: 7640, y: -117523}, {x: 10000, y: -117523}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 146, y: -118748}, {x: 464, y: -118585}, {x: 733, y: -118512}, {x: 775, y: -117850}, {x: 816, y: -117796}, {x: 1246, y: -117699}, {x: 1293, y: -117694}, {x: 2093, y: -117680}, {x: 2189, y: -117660}, {x: 4687, y: -117612}, {x: 4732, y: -117607}, {x: 4778, y: -117373}, {x: 4824, y: -117324}, {x: 5070, y: -117320}, {x: 5119, y: -117284}, {x: 7815, y: -117212}, {x: 7879, y: -117097}, {x: 7933, y: -117061}, {x: 8032, y: -117022}, {x: 8469, y: -116959}, {x: 8521, y: -116930}, {x: 8576, y: -116892}, {x: 8624, y: -116884}, {x: 8672, y: -116775}, {x: 10000, y: -116775}
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 149, y: -118748}, {x: 323, y: -118725}, {x: 360, y: -118722}, {x: 429, y: -118293}, {x: 754, y: -118081}, {x: 1624, y: -118010}, {x: 8035, y: -117932}, {x: 8368, y: -117741}, {x: 10000, y: -117741}
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
  chart_bestScoreProblemStatisticChart1_b7f9d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b7f9d.resize();
});
