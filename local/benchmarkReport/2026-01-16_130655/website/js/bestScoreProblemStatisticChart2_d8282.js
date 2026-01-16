
var chart_bestScoreProblemStatisticChart2_d8282 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_d8282'), {
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
                    {x: 588, y: -372144}, {x: 605, y: -376261}, {x: 627, y: -374004}, {x: 801, y: -372973}, {x: 802, y: -373393}, {x: 2176, y: -373308}, {x: 2379, y: -373522}, {x: 5000, y: -373522}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 566, y: -382143}, {x: 677, y: -379142}, {x: 1120, y: -376820}, {x: 5000, y: -380697}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 563, y: -377531}, {x: 1149, y: -376083}, {x: 2980, y: -382220}, {x: 5000, y: -382220}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 568, y: -376546}, {x: 1197, y: -377934}, {x: 2467, y: -378899}, {x: 5000, y: -378899}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 569, y: -374974}, {x: 571, y: -379776}, {x: 572, y: -383140}, {x: 580, y: -380661}, {x: 590, y: -379040}, {x: 598, y: -375385}, {x: 600, y: -378980}, {x: 601, y: -373764}, {x: 623, y: -375910}, {x: 625, y: -377187}, {x: 626, y: -379162}, {x: 633, y: -379565}, {x: 729, y: -379914}, {x: 866, y: -377637}, {x: 1128, y: -371384}, {x: 1130, y: -377896}, {x: 1182, y: -377360}, {x: 1312, y: -372600}, {x: 1323, y: -370251}, {x: 1384, y: -377442}, {x: 1391, y: -380457}, {x: 1415, y: -373861}, {x: 1430, y: -377176}, {x: 2250, y: -375404}, {x: 5000, y: -375404}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 568, y: -378571}, {x: 632, y: -373847}, {x: 740, y: -374754}, {x: 951, y: -376514}, {x: 1556, y: -377916}, {x: 5000, y: -377916}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 545, y: -376891}, {x: 620, y: -375118}, {x: 621, y: -379879}, {x: 622, y: -375030}, {x: 734, y: -374177}, {x: 880, y: -379063}, {x: 5000, y: -379063}
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
                suggestedMax: 5000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_bestScoreProblemStatisticChart2_d8282.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_d8282.resize();
});
