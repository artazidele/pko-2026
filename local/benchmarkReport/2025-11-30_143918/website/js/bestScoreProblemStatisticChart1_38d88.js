
var chart_bestScoreProblemStatisticChart1_38d88 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_38d88'), {
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
                    {x: 58, y: -108938}, {x: 2013, y: -108847}, {x: 2027, y: -108631}, {x: 2041, y: -108604}, {x: 2056, y: -108574}, {x: 2070, y: -108543}, {x: 2084, y: -108367}, {x: 10000, y: -108367}
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 59, y: -108938}, {x: 119, y: -108907}, {x: 211, y: -108810}, {x: 270, y: -108765}, {x: 791, y: -108564}, {x: 829, y: -108519}, {x: 863, y: -108479}, {x: 895, y: -108411}, {x: 4388, y: -108409}, {x: 4425, y: -108354}, {x: 4460, y: -108343}, {x: 4493, y: -108292}, {x: 4528, y: -108179}, {x: 4561, y: -108171}, {x: 10000, y: -108171}
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 55, y: -108938}, {x: 96, y: -108862}, {x: 169, y: -108801}, {x: 201, y: -108531}, {x: 2377, y: -108284}, {x: 2433, y: -107642}, {x: 2436, y: -107599}, {x: 2462, y: -106671}, {x: 4772, y: -106646}, {x: 4783, y: -106553}, {x: 6068, y: -106469}, {x: 6547, y: -105951}, {x: 7904, y: -105722}, {x: 8461, y: -105600}, {x: 9860, y: -105469}, {x: 10000, y: -105469}
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
  chart_bestScoreProblemStatisticChart1_38d88.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_38d88.resize();
});
