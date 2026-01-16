
var chart_bestScoreProblemStatisticChart1_ee69e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ee69e'), {
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
                    {x: 344, y: -15874087}, {x: 435, y: -15871087}, {x: 485, y: -15862087}, {x: 5000, y: -15862087}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 346, y: -15874087}, {x: 2122, y: -15871087}, {x: 5000, y: -15868087}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 364, y: -15874087}, {x: 965, y: -15871087}, {x: 1649, y: -15868087}, {x: 5000, y: -15868087}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 332, y: -15874087}, {x: 879, y: -15871087}, {x: 1529, y: -15868087}, {x: 5000, y: -15868087}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 340, y: -15874087}, {x: 412, y: -15866541}, {x: 621, y: -15863541}, {x: 1249, y: -15862087}, {x: 5000, y: -15862087}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 340, y: -15874087}, {x: 3484, y: -15871558}, {x: 3573, y: -15868558}, {x: 3591, y: -15865558}, {x: 3998, y: -15862823}, {x: 4001, y: -15862739}, {x: 4037, y: -15862642}, {x: 4198, y: -15862558}, {x: 5000, y: -15862558}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 369, y: -15874087}, {x: 5000, y: -15874087}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 351, y: -15874087}, {x: 433, y: -15871087}, {x: 1658, y: -15868944}, {x: 1743, y: -15865944}, {x: 2833, y: -15865297}, {x: 2883, y: -15865087}, {x: 5000, y: -15865087}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 342, y: -15874087}, {x: 426, y: -15871087}, {x: 1679, y: -15868944}, {x: 1733, y: -15865944}, {x: 4366, y: -15865087}, {x: 5000, y: -15865087}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 355, y: -15874087}, {x: 436, y: -15871087}, {x: 1659, y: -15868944}, {x: 1717, y: -15865944}, {x: 2136, y: -15865087}, {x: 5000, y: -15865087}
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
  chart_bestScoreProblemStatisticChart1_ee69e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ee69e.resize();
});
