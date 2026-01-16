
var chart_bestScoreProblemStatisticChart1_6e01 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_6e01'), {
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
                    {x: 501, y: -123224}, {x: 600, y: -123155}, {x: 660, y: -123149}, {x: 709, y: -122747}, {x: 896, y: -122584}, {x: 974, y: -122520}, {x: 1027, y: -122480}, {x: 1110, y: -122431}, {x: 1159, y: -122252}, {x: 1239, y: -122250}, {x: 1275, y: -122138}, {x: 1341, y: -122115}, {x: 1439, y: -121836}, {x: 1497, y: -121658}, {x: 1852, y: -121552}, {x: 1867, y: -121195}, {x: 2201, y: -121077}, {x: 2233, y: -120803}, {x: 2338, y: -120781}, {x: 2458, y: -120697}, {x: 2658, y: -120603}, {x: 3016, y: -120590}, {x: 3426, y: -120550}, {x: 4762, y: -120467}, {x: 5299, y: -120466}, {x: 6081, y: -120363}, {x: 6885, y: -120357}, {x: 7074, y: -120295}, {x: 8755, y: -120101}, {x: 10000, y: -120101}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 508, y: -123224}, {x: 764, y: -122864}, {x: 1879, y: -122685}, {x: 3502, y: -122423}, {x: 10000, y: -121932}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 478, y: -123224}, {x: 680, y: -123155}, {x: 1063, y: -122753}, {x: 2712, y: -122491}, {x: 6934, y: -121999}, {x: 10000, y: -121439}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 447, y: -123224}, {x: 652, y: -123155}, {x: 969, y: -122753}, {x: 2257, y: -122491}, {x: 6324, y: -121999}, {x: 10000, y: -121439}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 532, y: -123224}, {x: 10000, y: -123224}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 516, y: -123224}, {x: 10000, y: -123224}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 501, y: -123224}, {x: 10000, y: -123224}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 484, y: -123224}, {x: 580, y: -123155}, {x: 688, y: -122796}, {x: 1668, y: -122699}, {x: 2098, y: -122595}, {x: 2330, y: -122490}, {x: 2874, y: -122406}, {x: 10000, y: -122406}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 481, y: -123224}, {x: 577, y: -123155}, {x: 685, y: -122796}, {x: 1677, y: -122699}, {x: 2110, y: -122595}, {x: 2342, y: -122490}, {x: 2885, y: -122406}, {x: 7128, y: -122289}, {x: 10000, y: -122289}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 477, y: -123224}, {x: 573, y: -123155}, {x: 680, y: -122796}, {x: 1659, y: -122699}, {x: 2088, y: -122595}, {x: 2321, y: -122490}, {x: 2868, y: -122406}, {x: 7154, y: -122289}, {x: 10000, y: -122289}
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
                text: 'example-data-5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_6e01.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_6e01.resize();
});
