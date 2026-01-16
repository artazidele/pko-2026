
var chart_bestScoreProblemStatisticChart2_b9f1b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_b9f1b'), {
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
                    {x: 316, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 352, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 338, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 351, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 333, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 362, y: -9870300}, {x: 6883, y: -9878424}, {x: 6925, y: -9877327}, {x: 6965, y: -9877327}, {x: 7287, y: -9872628}, {x: 10001, y: -9872628}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 350, y: -9870300}, {x: 8583, y: -9872801}, {x: 8601, y: -9872801}, {x: 8657, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 323, y: -9870300}, {x: 380, y: -9870300}, {x: 511, y: -9871261}, {x: 768, y: -9870477}, {x: 876, y: -9870300}, {x: 911, y: -9870300}, {x: 4182, y: -9872447}, {x: 4784, y: -9871339}, {x: 4818, y: -9871222}, {x: 4843, y: -9870601}, {x: 9293, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 322, y: -9870300}, {x: 378, y: -9870300}, {x: 511, y: -9871261}, {x: 762, y: -9870734}, {x: 764, y: -9870601}, {x: 923, y: -9873333}, {x: 954, y: -9871038}, {x: 5808, y: -9870300}, {x: 10001, y: -9870300}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 329, y: -9870300}, {x: 392, y: -9870300}, {x: 524, y: -9871261}, {x: 765, y: -9870734}, {x: 767, y: -9870601}, {x: 1275, y: -9870300}, {x: 1625, y: -9871149}, {x: 1665, y: -9870300}, {x: 3421, y: -9870978}, {x: 4278, y: -9870300}, {x: 10001, y: -9870300}
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
  chart_bestScoreProblemStatisticChart2_b9f1b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_b9f1b.resize();
});
