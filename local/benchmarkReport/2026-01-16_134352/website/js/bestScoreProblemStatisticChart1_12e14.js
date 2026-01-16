
var chart_bestScoreProblemStatisticChart1_12e14 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_12e14'), {
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
                    {x: 1957, y: -18641549}, {x: 1992, y: -18632549}, {x: 1997, y: -18629549}, {x: 2018, y: -18620549}, {x: 2067, y: -18608549}, {x: 2098, y: -18602549}, {x: 2154, y: -18599549}, {x: 2620, y: -18596549}, {x: 2645, y: -18593549}, {x: 3473, y: -18590549}, {x: 10001, y: -18590549}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2353, y: -18641549}, {x: 2850, y: -18629549}, {x: 3404, y: -18611549}, {x: 3972, y: -18602549}, {x: 4709, y: -18599549}, {x: 10000, y: -18596549}, {x: 10002, y: -18596549}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 1956, y: -18641549}, {x: 3138, y: -18608346}, {x: 5198, y: -18599346}, {x: 8304, y: -18596549}, {x: 10001, y: -18596549}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2018, y: -18641549}, {x: 3219, y: -18608346}, {x: 5183, y: -18599346}, {x: 8166, y: -18596549}, {x: 10001, y: -18596549}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 2244, y: -18641549}, {x: 2260, y: -18608549}, {x: 2891, y: -18602549}, {x: 3402, y: -18599549}, {x: 3474, y: -18596549}, {x: 3522, y: -18593549}, {x: 4249, y: -18590549}, {x: 10003, y: -18590549}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2004, y: -18641549}, {x: 2013, y: -18608549}, {x: 8470, y: -18608458}, {x: 10001, y: -18608458}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2092, y: -18641549}, {x: 2104, y: -18608549}, {x: 10001, y: -18608549}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2111, y: -18641549}, {x: 2170, y: -18632549}, {x: 2293, y: -18629549}, {x: 2332, y: -18623726}, {x: 2342, y: -18620726}, {x: 2688, y: -18614931}, {x: 2751, y: -18613660}, {x: 2866, y: -18607660}, {x: 4147, y: -18603488}, {x: 7095, y: -18601945}, {x: 7104, y: -18600282}, {x: 8549, y: -18596379}, {x: 10002, y: -18596379}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2137, y: -18641549}, {x: 2177, y: -18632549}, {x: 2250, y: -18629549}, {x: 2276, y: -18623726}, {x: 2284, y: -18620726}, {x: 2630, y: -18617821}, {x: 2741, y: -18603117}, {x: 5984, y: -18602874}, {x: 10001, y: -18602874}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2479, y: -18641549}, {x: 2526, y: -18632549}, {x: 2603, y: -18629549}, {x: 2630, y: -18623726}, {x: 2639, y: -18620726}, {x: 2993, y: -18617821}, {x: 3117, y: -18603117}, {x: 3924, y: -18602549}, {x: 10001, y: -18602549}
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
                text: 'example-data-4 best medium score statistic'
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
                suggestedMax: 10003,
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
  chart_bestScoreProblemStatisticChart1_12e14.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_12e14.resize();
});
