
var chart_bestScoreProblemStatisticChart1_23de3 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_23de3'), {
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
                    {x: 57, y: -110934}, {x: 88, y: -110906}, {x: 264, y: -110862}, {x: 314, y: -110861}, {x: 343, y: -110857}, {x: 346, y: -110849}, {x: 382, y: -110845}, {x: 441, y: -110799}, {x: 515, y: -110595}, {x: 6881, y: -110569}, {x: 10000, y: -110569}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 33, y: -110934}, {x: 61, y: -110906}, {x: 10000, y: -110701}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -110934}, {x: 143, y: -110906}, {x: 10000, y: -110701}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -110934}, {x: 140, y: -110906}, {x: 10000, y: -110701}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -110934}, {x: 33, y: -110930}, {x: 56, y: -110726}, {x: 111, y: -110682}, {x: 124, y: -110677}, {x: 146, y: -110673}, {x: 169, y: -110627}, {x: 202, y: -110599}, {x: 3073, y: -110569}, {x: 10000, y: -110569}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 25, y: -110934}, {x: 31, y: -110930}, {x: 54, y: -110726}, {x: 107, y: -110682}, {x: 120, y: -110677}, {x: 141, y: -110673}, {x: 166, y: -110627}, {x: 198, y: -110599}, {x: 3066, y: -110569}, {x: 10000, y: -110569}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 23, y: -110934}, {x: 28, y: -110930}, {x: 51, y: -110726}, {x: 161, y: -110680}, {x: 215, y: -110651}, {x: 471, y: -110603}, {x: 482, y: -110599}, {x: 858, y: -110595}, {x: 2078, y: -110573}, {x: 2131, y: -110569}, {x: 10000, y: -110569}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -110934}, {x: 35, y: -110906}, {x: 137, y: -110861}, {x: 225, y: -110853}, {x: 358, y: -110807}, {x: 383, y: -110612}, {x: 6166, y: -110606}, {x: 9194, y: -110604}, {x: 10000, y: -110604}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -110934}, {x: 35, y: -110906}, {x: 136, y: -110861}, {x: 223, y: -110853}, {x: 354, y: -110807}, {x: 379, y: -110612}, {x: 7893, y: -110607}, {x: 9840, y: -110603}, {x: 9950, y: -110595}, {x: 10000, y: -110595}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -110934}, {x: 35, y: -110906}, {x: 136, y: -110861}, {x: 223, y: -110853}, {x: 356, y: -110807}, {x: 382, y: -110612}, {x: 10000, y: -110612}
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
                text: 'example-data-1 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_23de3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_23de3.resize();
});
