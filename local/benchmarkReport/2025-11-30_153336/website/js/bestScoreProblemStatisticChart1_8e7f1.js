
var chart_bestScoreProblemStatisticChart1_8e7f1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_8e7f1'), {
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
                    {x: 478, y: -120529}, {x: 1126, y: -120490}, {x: 1325, y: -120449}, {x: 1943, y: -120361}, {x: 2142, y: -120341}, {x: 2223, y: -120067}, {x: 2283, y: -119758}, {x: 2351, y: -119684}, {x: 2791, y: -119666}, {x: 3504, y: -119657}, {x: 5454, y: -119535}, {x: 6336, y: -119518}, {x: 7831, y: -119459}, {x: 8556, y: -119457}, {x: 10000, y: -119457}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 478, y: -120529}, {x: 10000, y: -120362}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 476, y: -120529}, {x: 2405, y: -120286}, {x: 4795, y: -120012}, {x: 7105, y: -119891}, {x: 9428, y: -119785}, {x: 10000, y: -119778}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 477, y: -120529}, {x: 2396, y: -120286}, {x: 4774, y: -120012}, {x: 7073, y: -119891}, {x: 9389, y: -119785}, {x: 10000, y: -119778}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 473, y: -120529}, {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 476, y: -120529}, {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 475, y: -120529}, {x: 10000, y: -120529}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 479, y: -120529}, {x: 1127, y: -120490}, {x: 1326, y: -120481}, {x: 1942, y: -120437}, {x: 2219, y: -120239}, {x: 2282, y: -120066}, {x: 8772, y: -119959}, {x: 10000, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 477, y: -120529}, {x: 1125, y: -120490}, {x: 1325, y: -120481}, {x: 1940, y: -120437}, {x: 2219, y: -120239}, {x: 2281, y: -120066}, {x: 8738, y: -119959}, {x: 10000, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 476, y: -120529}, {x: 1122, y: -120490}, {x: 1321, y: -120481}, {x: 1935, y: -120437}, {x: 2212, y: -120239}, {x: 2274, y: -120066}, {x: 8741, y: -119959}, {x: 10000, y: -119959}
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
  chart_bestScoreProblemStatisticChart1_8e7f1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_8e7f1.resize();
});
