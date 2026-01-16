
var chart_bestScoreProblemStatisticChart1_a2874 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_a2874'), {
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
                    {x: 133, y: -6424}, {x: 145, y: -4729}, {x: 146, y: -4564}, {x: 147, y: -1355}, {x: 148, y: -984}, {x: 149, y: -371}, {x: 153, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 73, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 71, y: -7943}, {x: 372, y: -4478}, {x: 980, y: -3228}, {x: 2789, y: -884}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 74, y: -10765}, {x: 391, y: -251}, {x: 1336, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 66, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 62, y: -913}, {x: 64, y: -168}, {x: 65, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 64, y: -11011}, {x: 66, y: -10675}, {x: 67, y: -10559}, {x: 68, y: -10313}, {x: 69, y: -8840}, {x: 70, y: -6948}, {x: 145, y: -1225}, {x: 149, y: -695}, {x: 227, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 66, y: -6281}, {x: 71, y: -4163}, {x: 75, y: -3740}, {x: 76, y: -3550}, {x: 77, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 68, y: -4741}, {x: 70, y: -4547}, {x: 72, y: -2682}, {x: 73, y: -1302}, {x: 76, y: -1108}, {x: 77, y: -1001}, {x: 78, y: -894}, {x: 79, y: 0}, {x: 5000, y: 0}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 71, y: -1528}, {x: 75, y: -651}, {x: 76, y: 0}, {x: 5000, y: 0}
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
                text: 'example-data-1 best medium score statistic'
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
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_a2874.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_a2874.resize();
});
