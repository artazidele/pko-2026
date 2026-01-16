
var chart_bestScoreProblemStatisticChart1_530ba = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_530ba'), {
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
                    {x: 316, y: -4759988}, {x: 335, y: -4756988}, {x: 388, y: -4753988}, {x: 448, y: -4750988}, {x: 460, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 352, y: -4759988}, {x: 493, y: -4753988}, {x: 1140, y: -4747988}, {x: 10000, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 338, y: -4759988}, {x: 949, y: -4750988}, {x: 2666, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 351, y: -4759988}, {x: 995, y: -4750988}, {x: 2694, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 333, y: -4759988}, {x: 339, y: -4753988}, {x: 416, y: -4750988}, {x: 461, y: -4747988}, {x: 1546, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 362, y: -4759988}, {x: 6883, y: -4759112}, {x: 6925, y: -4758015}, {x: 6965, y: -4755015}, {x: 7287, y: -4750316}, {x: 8022, y: -4747316}, {x: 10001, y: -4747316}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 350, y: -4759988}, {x: 8583, y: -4759489}, {x: 8601, y: -4756489}, {x: 8657, y: -4753988}, {x: 8670, y: -4750988}, {x: 8684, y: -4747988}, {x: 8799, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 323, y: -4759988}, {x: 341, y: -4756988}, {x: 380, y: -4753988}, {x: 511, y: -4751949}, {x: 768, y: -4751165}, {x: 876, y: -4750988}, {x: 911, y: -4747988}, {x: 4182, y: -4747135}, {x: 4784, y: -4746027}, {x: 4818, y: -4745910}, {x: 4843, y: -4745289}, {x: 9293, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 322, y: -4759988}, {x: 339, y: -4756988}, {x: 378, y: -4753988}, {x: 511, y: -4751949}, {x: 762, y: -4751422}, {x: 764, y: -4751289}, {x: 923, y: -4751021}, {x: 954, y: -4745726}, {x: 5808, y: -4744988}, {x: 10001, y: -4744988}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 329, y: -4759988}, {x: 348, y: -4756988}, {x: 392, y: -4753988}, {x: 524, y: -4751949}, {x: 765, y: -4751422}, {x: 767, y: -4751289}, {x: 1275, y: -4750988}, {x: 1625, y: -4748837}, {x: 1665, y: -4747988}, {x: 3421, y: -4745666}, {x: 4278, y: -4744988}, {x: 10001, y: -4744988}
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
                text: 'example-data-2 best medium score statistic'
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
  chart_bestScoreProblemStatisticChart1_530ba.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_530ba.resize();
});
