
var chart_bestScoreProblemStatisticChart1_56e4a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_56e4a'), {
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
                    {x: 51, y: -104355}, {x: 105, y: -104281}, {x: 320, y: -103840}, {x: 347, y: -103709}, {x: 359, y: -103628}, {x: 361, y: -103578}, {x: 369, y: -103512}, {x: 433, y: -103489}, {x: 536, y: -103423}, {x: 727, y: -103325}, {x: 851, y: -103175}, {x: 1764, y: -103156}, {x: 2420, y: -103113}, {x: 10000, y: -103113}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -104355}, {x: 335, y: -103970}, {x: 479, y: -103820}, {x: 9481, y: -103408}, {x: 10000, y: -103237}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -104355}, {x: 175, y: -104281}, {x: 486, y: -103840}, {x: 928, y: -103496}, {x: 1365, y: -103325}, {x: 1796, y: -103175}, {x: 7546, y: -103132}, {x: 10000, y: -103113}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -104355}, {x: 169, y: -104281}, {x: 472, y: -103840}, {x: 911, y: -103496}, {x: 1348, y: -103325}, {x: 1784, y: -103175}, {x: 7549, y: -103132}, {x: 10000, y: -103113}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -104355}, {x: 9276, y: -104195}, {x: 9280, y: -103955}, {x: 9286, y: -103936}, {x: 9405, y: -103931}, {x: 9418, y: -103751}, {x: 9423, y: -103662}, {x: 9425, y: -103528}, {x: 9498, y: -103441}, {x: 9523, y: -103318}, {x: 9526, y: -103263}, {x: 9549, y: -102976}, {x: 9563, y: -102910}, {x: 9570, y: -102807}, {x: 9741, y: -102768}, {x: 9826, y: -102679}, {x: 9850, y: -102636}, {x: 9924, y: -102609}, {x: 10000, y: -102609}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 53, y: -104355}, {x: 10000, y: -104355}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 52, y: -104355}, {x: 10000, y: -104355}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 54, y: -104355}, {x: 106, y: -104281}, {x: 327, y: -103902}, {x: 802, y: -103887}, {x: 804, y: -103863}, {x: 843, y: -103761}, {x: 2052, y: -103760}, {x: 2378, y: -103667}, {x: 3290, y: -103588}, {x: 3888, y: -103498}, {x: 6866, y: -103454}, {x: 10000, y: -103454}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 51, y: -104355}, {x: 106, y: -104281}, {x: 329, y: -103902}, {x: 807, y: -103887}, {x: 809, y: -103863}, {x: 848, y: -103761}, {x: 3615, y: -103712}, {x: 4174, y: -103611}, {x: 10000, y: -103611}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 56, y: -104355}, {x: 114, y: -104281}, {x: 343, y: -103902}, {x: 842, y: -103887}, {x: 844, y: -103863}, {x: 884, y: -103761}, {x: 4568, y: -103733}, {x: 5573, y: -103634}, {x: 5666, y: -103520}, {x: 7786, y: -103483}, {x: 10000, y: -103483}
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
  chart_bestScoreProblemStatisticChart1_56e4a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_56e4a.resize();
});
