
var chart_worstScoreDifferencePercentageSummaryChart2_1076b = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart2_1076b'), {
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
                    0.10264729435401196, 0, 0, 0.6998297711367505, 0
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.10264729435401196, 0, 0, 0.6998297711367505, 0.21168221207911622
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.10264729435401196, 0, 0, 0.1796860223188954, 0.6152014288549316
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.10264729435401196, 0, 0, 0.25534329487421975, 1.1708672355626117
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.10264729435401196, 0, 0, 0.7565727255532438, 5.311900509360322
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -0.027202820582961005, -0.00838988338988339, 1.3902023832040855, 2.235893365085665
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.09923001633845754, 0, 0, 0, 1.5082357610637032
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.08288511111311705, -0.03603740514472711, 0, 0.25534329487421975, 1.9646755308592976
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.10264729435401196, -0.014984346980334944, -0.0031053781053781053, 0.09457159069415548, 5.311900509360322
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.061188619561530995, 0, 0, 0, 1.1708672355626117
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart2_1076b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart2_1076b.resize();
});