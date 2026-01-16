
var chart_bestScoreProblemStatisticChart1_21a05 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_21a05'), {
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
                    {x: 214, y: -87150}, {x: 217, y: -86794}, {x: 218, y: -85582}, {x: 224, y: -83855}, {x: 226, y: -82933}, {x: 227, y: -79165}, {x: 232, y: -76112}, {x: 311, y: -75923}, {x: 343, y: -75575}, {x: 670, y: -74641}, {x: 973, y: -74129}, {x: 2594, y: -70633}, {x: 5000, y: -70633}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 218, y: -84082}, {x: 299, y: -76906}, {x: 5000, y: -75366}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 217, y: -84263}, {x: 614, y: -78773}, {x: 1277, y: -77072}, {x: 2478, y: -76044}, {x: 3645, y: -75956}, {x: 5000, y: -74860}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 221, y: -84993}, {x: 226, y: -81517}, {x: 228, y: -79348}, {x: 302, y: -79327}, {x: 320, y: -78538}, {x: 322, y: -78390}, {x: 333, y: -76320}, {x: 824, y: -75624}, {x: 1616, y: -74834}, {x: 3445, y: -74466}, {x: 3960, y: -74392}, {x: 5000, y: -74392}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 213, y: -81610}, {x: 306, y: -80893}, {x: 307, y: -77851}, {x: 645, y: -77280}, {x: 681, y: -77153}, {x: 683, y: -73832}, {x: 4074, y: -73725}, {x: 4187, y: -73468}, {x: 5000, y: -73468}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 243, y: -82924}, {x: 247, y: -82224}, {x: 257, y: -81824}, {x: 265, y: -80362}, {x: 269, y: -80301}, {x: 726, y: -79690}, {x: 772, y: -78390}, {x: 1207, y: -78050}, {x: 1259, y: -75423}, {x: 5000, y: -75423}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 239, y: -84090}, {x: 244, y: -82697}, {x: 287, y: -82321}, {x: 288, y: -82289}, {x: 295, y: -78430}, {x: 669, y: -78362}, {x: 799, y: -78188}, {x: 816, y: -77811}, {x: 1287, y: -76470}, {x: 3214, y: -76241}, {x: 3269, y: -75511}, {x: 3445, y: -73044}, {x: 5000, y: -73044}
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
                text: 'example-data-2 best medium score statistic'
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
                    text: 'Best medium score'
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
  chart_bestScoreProblemStatisticChart1_21a05.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_21a05.resize();
});
