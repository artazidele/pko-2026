
var chart_bestScoreProblemStatisticChart1_bff62 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_bff62'), {
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
                    {x: 186, y: -113909}, {x: 368, y: -113730}, {x: 589, y: -113680}, {x: 1404, y: -113678}, {x: 1978, y: -113382}, {x: 2044, y: -113362}, {x: 2163, y: -113352}, {x: 2431, y: -113318}, {x: 10000, y: -113318}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 185, y: -113909}, {x: 10000, y: -113909}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 182, y: -113909}, {x: 399, y: -113730}, {x: 629, y: -113680}, {x: 4614, y: -113416}, {x: 8468, y: -113384}, {x: 10000, y: -113354}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 183, y: -113909}, {x: 420, y: -113730}, {x: 661, y: -113680}, {x: 4821, y: -113416}, {x: 8558, y: -113384}, {x: 10000, y: -113354}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 189, y: -113909}, {x: 10000, y: -113909}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 212, y: -113909}, {x: 10000, y: -113909}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 201, y: -113909}, {x: 10000, y: -113909}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 194, y: -113909}, {x: 371, y: -113730}, {x: 1102, y: -113680}, {x: 1930, y: -113610}, {x: 3438, y: -113599}, {x: 3456, y: -113517}, {x: 10000, y: -113517}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 214, y: -113909}, {x: 407, y: -113730}, {x: 1239, y: -113680}, {x: 2114, y: -113610}, {x: 3511, y: -113599}, {x: 3528, y: -113517}, {x: 10000, y: -113517}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 192, y: -113909}, {x: 384, y: -113730}, {x: 1162, y: -113680}, {x: 2066, y: -113610}, {x: 3625, y: -113599}, {x: 3643, y: -113517}, {x: 10000, y: -113517}
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
  chart_bestScoreProblemStatisticChart1_bff62.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_bff62.resize();
});
