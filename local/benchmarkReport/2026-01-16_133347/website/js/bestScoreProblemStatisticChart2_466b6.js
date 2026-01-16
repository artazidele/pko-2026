
var chart_bestScoreProblemStatisticChart2_466b6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_466b6'), {
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
                    {x: 572, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 896, y: -20512800}, {x: 1071, y: -20512800}, {x: 1625, y: -20513078}, {x: 8028, y: -20513078}, {x: 9725, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 553, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 576, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 533, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 581, y: -20512800}, {x: 4913, y: -20514495}, {x: 5011, y: -20514495}, {x: 5402, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 580, y: -20512800}, {x: 7638, y: -20514603}, {x: 7640, y: -20514603}, {x: 7641, y: -20513091}, {x: 7651, y: -20517979}, {x: 7662, y: -20513091}, {x: 7864, y: -20513091}, {x: 9997, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 678, y: -20512800}, {x: 685, y: -20512800}, {x: 691, y: -20517380}, {x: 693, y: -20517380}, {x: 698, y: -20519816}, {x: 705, y: -20517571}, {x: 787, y: -20512800}, {x: 807, y: -20512800}, {x: 1768, y: -20513006}, {x: 2156, y: -20512800}, {x: 2248, y: -20512800}, {x: 5370, y: -20515668}, {x: 5700, y: -20515177}, {x: 5701, y: -20512800}, {x: 7033, y: -20513141}, {x: 7405, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 563, y: -20512800}, {x: 569, y: -20512800}, {x: 574, y: -20517380}, {x: 575, y: -20517380}, {x: 580, y: -20519816}, {x: 586, y: -20517571}, {x: 658, y: -20512800}, {x: 675, y: -20512800}, {x: 1781, y: -20514406}, {x: 2588, y: -20513358}, {x: 4304, y: -20512800}, {x: 10000, y: -20512800}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 552, y: -20512800}, {x: 558, y: -20512800}, {x: 563, y: -20517380}, {x: 565, y: -20517380}, {x: 569, y: -20519816}, {x: 575, y: -20517571}, {x: 658, y: -20512800}, {x: 2334, y: -20512800}, {x: 4497, y: -20513491}, {x: 5059, y: -20514309}, {x: 10000, y: -20514309}
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
  chart_bestScoreProblemStatisticChart2_466b6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_466b6.resize();
});
