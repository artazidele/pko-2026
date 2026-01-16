
var chart_bestScoreProblemStatisticChart2_4a574 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_4a574'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 160, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 74, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 70, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 70, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 67, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 71, y: -3098700}, {x: 1270, y: -3103735}, {x: 1290, y: -3099039}, {x: 1299, y: -3099039}, {x: 1882, y: -3101291}, {x: 1887, y: -3100232}, {x: 4561, y: -3099727}, {x: 4891, y: -3103174}, {x: 5314, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 64, y: -3098700}, {x: 5530, y: -3101248}, {x: 6333, y: -3103732}, {x: 6337, y: -3103104}, {x: 6346, y: -3100322}, {x: 7012, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 89, y: -3098700}, {x: 155, y: -3098700}, {x: 309, y: -3100428}, {x: 370, y: -3099888}, {x: 441, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 66, y: -3098700}, {x: 121, y: -3098700}, {x: 319, y: -3099199}, {x: 403, y: -3099037}, {x: 1599, y: -3098700}, {x: 2232, y: -3101277}, {x: 2355, y: -3101150}, {x: 2363, y: -3098707}, {x: 3339, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 72, y: -3098700}, {x: 125, y: -3098700}, {x: 393, y: -3099199}, {x: 496, y: -3099180}, {x: 588, y: -3100756}, {x: 1135, y: -3099763}, {x: 1911, y: -3098707}, {x: 4280, y: -3098700}, {x: 10000, y: -3098700}
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
                text: 'example-data-1 best soft score statistic'
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
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart2_4a574.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_4a574.resize();
});
