
var chart_bestScoreProblemStatisticChart1_93693 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_93693'), {
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
                    {x: 6255, y: -10512870}, {x: 6401, y: -10509870}, {x: 6427, y: -10506870}, {x: 6945, y: -10503870}, {x: 10002, y: -10503870}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 7691, y: -10512870}, {x: 10001, y: -10509870}, {x: 10002, y: -10509870}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 8373, y: -10512870}, {x: 10017, y: -10512870}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 7437, y: -10512870}, {x: 10001, y: -10509870}, {x: 10002, y: -10509870}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 6426, y: -10512870}, {x: 6913, y: -10509870}, {x: 7126, y: -10503870}, {x: 10007, y: -10503870}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 6834, y: -10512870}, {x: 7853, y: -10511591}, {x: 8010, y: -10508591}, {x: 10004, y: -10508591}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 6125, y: -10512870}, {x: 10001, y: -10512870}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 6193, y: -10512870}, {x: 6333, y: -10509870}, {x: 6809, y: -10508582}, {x: 7920, y: -10506870}, {x: 10001, y: -10506870}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 5883, y: -10512870}, {x: 6067, y: -10509870}, {x: 6554, y: -10508582}, {x: 7672, y: -10506870}, {x: 9766, y: -10504507}, {x: 10001, y: -10504507}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 5841, y: -10512870}, {x: 6004, y: -10509870}, {x: 6508, y: -10508582}, {x: 7637, y: -10506870}, {x: 10002, y: -10506870}
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
                suggestedMax: 10017,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best medium score'
                },
                ticks: {
                        stepSize: 100000
                        
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
  chart_bestScoreProblemStatisticChart1_93693.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_93693.resize();
});
