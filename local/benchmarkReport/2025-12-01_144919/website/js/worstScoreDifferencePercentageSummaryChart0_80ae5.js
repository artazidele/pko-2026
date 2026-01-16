
var chart_worstScoreDifferencePercentageSummaryChart0_80ae5 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart0_80ae5'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.7025845590091683, 9.547954203694758, 8.600251572327045, 1.0018644102522076, 0.5565476863259262
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.09233144101968535, 6.655013110250968, 0.23094339622641508, 0.07324468847958368, 0.017180188529963607
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.09233144101968535, 6.747300591182745, 0.006540880503144654, 0.32883279723001907, 0.017180188529963607
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.09233144101968535, 6.747300591182745, 0.006540880503144654, 0.32883279723001907, 0.017180188529963607
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.7025845590091683, 7.2939681988198055, 8.415094339622641, 0.9957180028273473, 0.5135972150010173
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.7025845590091683, 7.2939681988198055, 8.415094339622641, 0.9957180028273473, 0.5135972150010173
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.7025845590091683, 7.221223949144169, 8.456855345911949, 1.02593783933291, 0.5131451047765445
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4667065807791908, 4.51937222798265, 0, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2207298511876853, 1.8576927044031986, 0.03924528301886793, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.03924528301886793, 0, 0
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
                text: 'Worst hard score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst hard score difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart0_80ae5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart0_80ae5.resize();
});