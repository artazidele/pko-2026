
var chart_bestScoreProblemStatisticChart1_93500 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_93500'), {
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
                    {x: 283, y: -118556}, {x: 314, y: -118424}, {x: 330, y: -118327}, {x: 491, y: -118241}, {x: 542, y: -118143}, {x: 1049, y: -118102}, {x: 1490, y: -117881}, {x: 1527, y: -117835}, {x: 1584, y: -117762}, {x: 1789, y: -117748}, {x: 2190, y: -117435}, {x: 2393, y: -117417}, {x: 2865, y: -117284}, {x: 4716, y: -117270}, {x: 5172, y: -117244}, {x: 5253, y: -117239}, {x: 6094, y: -117178}, {x: 6579, y: -117160}, {x: 9391, y: -117090}, {x: 10000, y: -117090}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 281, y: -118556}, {x: 322, y: -118424}, {x: 363, y: -118327}, {x: 608, y: -118252}, {x: 5073, y: -117939}, {x: 9373, y: -117694}, {x: 10000, y: -117554}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 296, y: -118556}, {x: 481, y: -118424}, {x: 718, y: -118326}, {x: 1348, y: -118216}, {x: 2470, y: -117903}, {x: 3599, y: -117682}, {x: 5739, y: -117575}, {x: 7810, y: -117489}, {x: 10000, y: -117279}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 341, y: -118556}, {x: 546, y: -118424}, {x: 776, y: -118326}, {x: 1412, y: -118216}, {x: 2611, y: -117903}, {x: 3790, y: -117682}, {x: 5967, y: -117575}, {x: 8070, y: -117489}, {x: 9990, y: -117279}, {x: 10000, y: -117279}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 281, y: -118556}, {x: 10000, y: -118556}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 281, y: -118556}, {x: 10000, y: -118556}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 288, y: -118556}, {x: 10000, y: -118556}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 280, y: -118556}, {x: 310, y: -118424}, {x: 326, y: -118327}, {x: 762, y: -118296}, {x: 773, y: -118261}, {x: 4240, y: -118169}, {x: 5957, y: -118073}, {x: 9976, y: -118031}, {x: 10000, y: -118031}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 280, y: -118556}, {x: 310, y: -118424}, {x: 325, y: -118327}, {x: 760, y: -118296}, {x: 771, y: -118261}, {x: 4239, y: -118169}, {x: 5967, y: -118073}, {x: 10000, y: -118073}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 280, y: -118556}, {x: 310, y: -118424}, {x: 326, y: -118327}, {x: 763, y: -118296}, {x: 775, y: -118261}, {x: 4245, y: -118169}, {x: 5966, y: -118073}, {x: 10000, y: -118073}
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
                text: 'example-data-4 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_93500.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_93500.resize();
});
