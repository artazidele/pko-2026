
var chart_bestScoreProblemStatisticChart1_5051e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5051e'), {
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
                    {x: 282, y: -120194}, {x: 746, y: -120012}, {x: 905, y: -119911}, {x: 952, y: -119857}, {x: 1118, y: -119776}, {x: 1264, y: -119541}, {x: 2079, y: -119368}, {x: 2373, y: -119110}, {x: 2718, y: -119006}, {x: 2773, y: -118876}, {x: 2834, y: -118759}, {x: 2865, y: -118481}, {x: 3028, y: -118324}, {x: 3831, y: -118307}, {x: 4025, y: -118147}, {x: 4086, y: -118127}, {x: 4109, y: -117727}, {x: 4138, y: -117593}, {x: 6065, y: -117491}, {x: 6348, y: -117428}, {x: 7778, y: -117424}, {x: 10000, y: -117424}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 283, y: -120194}, {x: 10000, y: -120194}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 282, y: -120194}, {x: 790, y: -120058}, {x: 1757, y: -119822}, {x: 2750, y: -119564}, {x: 3732, y: -119286}, {x: 6989, y: -118998}, {x: 10000, y: -118826}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 285, y: -120194}, {x: 798, y: -120058}, {x: 1778, y: -119822}, {x: 2795, y: -119564}, {x: 3782, y: -119286}, {x: 7188, y: -118998}, {x: 10000, y: -118826}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 296, y: -120194}, {x: 10000, y: -120194}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 312, y: -120194}, {x: 10000, y: -120194}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 288, y: -120194}, {x: 10000, y: -120194}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 303, y: -120194}, {x: 776, y: -120012}, {x: 1296, y: -119957}, {x: 2409, y: -119926}, {x: 2566, y: -119485}, {x: 5974, y: -119282}, {x: 10000, y: -119282}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 288, y: -120194}, {x: 750, y: -120012}, {x: 1262, y: -119957}, {x: 2356, y: -119926}, {x: 2508, y: -119485}, {x: 5738, y: -119282}, {x: 10000, y: -119282}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 318, y: -120194}, {x: 784, y: -120012}, {x: 1298, y: -119957}, {x: 2413, y: -119926}, {x: 2569, y: -119485}, {x: 5797, y: -119282}, {x: 10000, y: -119282}
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
                text: 'example-data-4 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_5051e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5051e.resize();
});
