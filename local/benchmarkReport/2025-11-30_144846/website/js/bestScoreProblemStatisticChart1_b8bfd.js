
var chart_bestScoreProblemStatisticChart1_b8bfd = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b8bfd'), {
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
                    {x: 134, y: -110504}, {x: 1277, y: -110434}, {x: 1298, y: -110401}, {x: 2567, y: -110345}, {x: 10000, y: -110345}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 131, y: -110504}, {x: 421, y: -110490}, {x: 497, y: -110449}, {x: 536, y: -110419}, {x: 612, y: -110408}, {x: 693, y: -110309}, {x: 819, y: -110236}, {x: 861, y: -110177}, {x: 1190, y: -110171}, {x: 1234, y: -109984}, {x: 1286, y: -109968}, {x: 1340, y: -109930}, {x: 1440, y: -109689}, {x: 1487, y: -109484}, {x: 1679, y: -109454}, {x: 1726, y: -109397}, {x: 1769, y: -109356}, {x: 1811, y: -109348}, {x: 7306, y: -109292}, {x: 10000, y: -109292}
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 135, y: -110504}, {x: 356, y: -110473}, {x: 364, y: -110432}, {x: 394, y: -110322}, {x: 652, y: -110309}, {x: 731, y: -110255}, {x: 1067, y: -110109}, {x: 1861, y: -109847}, {x: 10000, y: -109847}
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
  chart_bestScoreProblemStatisticChart1_b8bfd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b8bfd.resize();
});
