
var chart_worstScoreDifferencePercentageSummaryChart1_63eef = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_63eef'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4622828554698335, 0.07559489878063538, 0.04228270810597569, 0.19060408581777422, 0.2878530719526725
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.3852357128915279, 0.03779744939031769, 0.04228270810597569, 0, 0.26335493816946637
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.30818857031322233, 0.03779744939031769, 0.033826166484780554, 0.00953020429088871, 0.2572304047236648
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.30818857031322233, 0.03779744939031769, 0.033826166484780554, 0.00953020429088871, 0.23273227094045865
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.4622828554698335, 0.07559489878063538, 0.050739249727170824, 0.3192618437447718, 0.2939776053984741
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.07262779900349545, 0.059195791348365966, 0.3383222523265492, 0.12555293563893166
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4622828554698335, 0, 0.04228270810597569, 0.20966449439955162, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4622828554698335, 0.05669617408547654, 0.04228270810597569, 0.2123043609881278, 0.21844679667812655
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.3852357128915279, 0.05669617408547654, 0.02598695240193266, 0.2454551766139842, 0.2653025398052313
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.3785326114872153, 0.05669617408547654, 0, 0.2196426182921121, 0.22145292184444082
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst medium score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst medium score difference percentage'
                },
                ticks: {
                        stepSize: 0.01
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_63eef.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_63eef.resize();
});