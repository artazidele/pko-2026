
var chart_bestScoreProblemStatisticChart2_fa47 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_fa47'), {
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
                    {x: 2829, y: -53410500}, {x: 10000, y: -53410500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2392, y: -53410500}, {x: 10001, y: -53410500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2312, y: -53410500}, {x: 10000, y: -53410500}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2132, y: -53410500}, {x: 10000, y: -53410500}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 2814, y: -53410500}, {x: 10000, y: -53410500}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2110, y: -53410500}, {x: 2122, y: -53410500}, {x: 8637, y: -53414702}, {x: 9397, y: -53414702}, {x: 9416, y: -53413856}, {x: 10000, y: -53413856}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2350, y: -53410500}, {x: 2363, y: -53410500}, {x: 9103, y: -53412643}, {x: 9217, y: -53412643}, {x: 9224, y: -53411412}, {x: 9716, y: -53411412}, {x: 9948, y: -53410504}, {x: 10000, y: -53410504}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2418, y: -53410500}, {x: 2511, y: -53410500}, {x: 2518, y: -53415793}, {x: 2521, y: -53415793}, {x: 2577, y: -53411957}, {x: 2580, y: -53411957}, {x: 4118, y: -53410623}, {x: 10000, y: -53410623}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2463, y: -53410500}, {x: 2555, y: -53410500}, {x: 2561, y: -53415793}, {x: 2564, y: -53415793}, {x: 2615, y: -53411957}, {x: 2618, y: -53411957}, {x: 3316, y: -53413394}, {x: 5142, y: -53413188}, {x: 6662, y: -53414398}, {x: 10000, y: -53414398}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 2194, y: -53410500}, {x: 2291, y: -53410500}, {x: 2297, y: -53415793}, {x: 2301, y: -53415793}, {x: 2358, y: -53411957}, {x: 2361, y: -53411957}, {x: 3046, y: -53412405}, {x: 7965, y: -53410500}, {x: 10000, y: -53410500}
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
                        stepSize: 1000000
                        
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
  chart_bestScoreProblemStatisticChart2_fa47.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_fa47.resize();
});
