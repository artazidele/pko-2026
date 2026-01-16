
var chart_bestScoreProblemStatisticChart2_4b657 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_4b657'), {
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
                    {x: 214, y: -332098}, {x: 217, y: -315968}, {x: 218, y: -321543}, {x: 224, y: -310496}, {x: 226, y: -323415}, {x: 227, y: -314785}, {x: 232, y: -314400}, {x: 311, y: -321328}, {x: 343, y: -308408}, {x: 670, y: -314968}, {x: 973, y: -316850}, {x: 2594, y: -309070}, {x: 5000, y: -309070}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 218, y: -314585}, {x: 299, y: -318963}, {x: 5000, y: -313215}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 217, y: -326388}, {x: 614, y: -313247}, {x: 1277, y: -320823}, {x: 2478, y: -316491}, {x: 3645, y: -316881}, {x: 5000, y: -312773}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 221, y: -312426}, {x: 226, y: -307710}, {x: 228, y: -313783}, {x: 302, y: -319267}, {x: 320, y: -318502}, {x: 322, y: -324245}, {x: 333, y: -321673}, {x: 824, y: -320445}, {x: 1616, y: -314607}, {x: 3445, y: -325135}, {x: 3960, y: -311219}, {x: 5000, y: -311219}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 213, y: -320224}, {x: 306, y: -315059}, {x: 307, y: -314774}, {x: 645, y: -314801}, {x: 681, y: -312321}, {x: 683, y: -307249}, {x: 4074, y: -313061}, {x: 4187, y: -319187}, {x: 5000, y: -319187}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 243, y: -318882}, {x: 247, y: -320530}, {x: 257, y: -320719}, {x: 265, y: -313028}, {x: 269, y: -316465}, {x: 726, y: -312132}, {x: 772, y: -312744}, {x: 1207, y: -309986}, {x: 1259, y: -314696}, {x: 5000, y: -314696}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 239, y: -317457}, {x: 244, y: -315904}, {x: 287, y: -318623}, {x: 288, y: -316964}, {x: 295, y: -319234}, {x: 669, y: -322046}, {x: 799, y: -321422}, {x: 816, y: -315373}, {x: 1287, y: -320676}, {x: 3214, y: -317558}, {x: 3269, y: -313411}, {x: 3445, y: -317807}, {x: 5000, y: -317807}
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
  chart_bestScoreProblemStatisticChart2_4b657.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_4b657.resize();
});
