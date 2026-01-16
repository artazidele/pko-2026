
var chart_bestScoreProblemStatisticChart1_e2feb = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_e2feb'), {
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
                    {x: 588, y: -138834}, {x: 605, y: -138608}, {x: 627, y: -138166}, {x: 801, y: -137987}, {x: 802, y: -137424}, {x: 2176, y: -136987}, {x: 2379, y: -136556}, {x: 5000, y: -136556}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 566, y: -148755}, {x: 677, y: -142278}, {x: 1120, y: -141788}, {x: 5000, y: -138383}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 563, y: -143545}, {x: 1149, y: -138258}, {x: 2980, y: -137290}, {x: 5000, y: -137290}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 568, y: -143538}, {x: 1197, y: -139515}, {x: 2467, y: -139082}, {x: 5000, y: -139082}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 569, y: -146612}, {x: 571, y: -146288}, {x: 572, y: -145195}, {x: 580, y: -143942}, {x: 590, y: -143515}, {x: 598, y: -143147}, {x: 600, y: -142986}, {x: 601, y: -142786}, {x: 623, y: -141330}, {x: 625, y: -140682}, {x: 626, y: -140437}, {x: 633, y: -140070}, {x: 729, y: -139920}, {x: 866, y: -139839}, {x: 1128, y: -139833}, {x: 1130, y: -139059}, {x: 1182, y: -138832}, {x: 1312, y: -138608}, {x: 1323, y: -138373}, {x: 1384, y: -138227}, {x: 1391, y: -138160}, {x: 1415, y: -137631}, {x: 1430, y: -136512}, {x: 2250, y: -136450}, {x: 5000, y: -136450}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 568, y: -138817}, {x: 632, y: -138447}, {x: 740, y: -138390}, {x: 951, y: -137337}, {x: 1556, y: -137213}, {x: 5000, y: -137213}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 545, y: -139962}, {x: 620, y: -139516}, {x: 621, y: -139202}, {x: 622, y: -138392}, {x: 734, y: -138139}, {x: 880, y: -136945}, {x: 5000, y: -136945}
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
                text: 'example-data-3 best medium score statistic'
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
  chart_bestScoreProblemStatisticChart1_e2feb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_e2feb.resize();
});
