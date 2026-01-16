
var chart_bestScoreProblemStatisticChart1_d3644 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_d3644'), {
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
                    {x: 160, y: -1028744}, {x: 189, y: -1025744}, {x: 213, y: -1022744}, {x: 240, y: -1019744}, {x: 495, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 74, y: -1028744}, {x: 137, y: -1025744}, {x: 302, y: -1022744}, {x: 839, y: -1019744}, {x: 10000, y: -1016744}, {x: 10001, y: -1016744}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 70, y: -1028744}, {x: 370, y: -1022744}, {x: 807, y: -1019744}, {x: 2277, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 70, y: -1028744}, {x: 369, y: -1022744}, {x: 798, y: -1019744}, {x: 2267, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 67, y: -1028744}, {x: 71, y: -1025744}, {x: 73, y: -1022744}, {x: 102, y: -1019744}, {x: 114, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 71, y: -1028744}, {x: 1270, y: -1027779}, {x: 1290, y: -1026083}, {x: 1299, y: -1023083}, {x: 1882, y: -1022943}, {x: 1887, y: -1021884}, {x: 4561, y: -1021263}, {x: 4891, y: -1021218}, {x: 5314, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 64, y: -1028744}, {x: 5530, y: -1028544}, {x: 6333, y: -1028288}, {x: 6337, y: -1027660}, {x: 6346, y: -1024878}, {x: 7012, y: -1022744}, {x: 7023, y: -1019744}, {x: 7058, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 89, y: -1028744}, {x: 98, y: -1025744}, {x: 155, y: -1022744}, {x: 309, y: -1021472}, {x: 370, y: -1020932}, {x: 441, y: -1019744}, {x: 442, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 66, y: -1028744}, {x: 73, y: -1025744}, {x: 121, y: -1022744}, {x: 319, y: -1020243}, {x: 403, y: -1020081}, {x: 1599, y: -1019744}, {x: 2232, y: -1019321}, {x: 2355, y: -1019194}, {x: 2363, y: -1016751}, {x: 3339, y: -1016744}, {x: 10000, y: -1016744}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 72, y: -1028744}, {x: 79, y: -1025744}, {x: 125, y: -1022744}, {x: 393, y: -1020243}, {x: 496, y: -1020224}, {x: 588, y: -1018800}, {x: 1135, y: -1017807}, {x: 1911, y: -1016751}, {x: 4280, y: -1016744}, {x: 10000, y: -1016744}
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
  chart_bestScoreProblemStatisticChart1_d3644.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_d3644.resize();
});
