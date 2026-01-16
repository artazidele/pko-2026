
var chart_worstScoreDifferencePercentageSummaryChart1_766e0 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_766e0'), {
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
                    0.4021382990900246, 0.18708074425708884, 0.08560935310719146, 0.2071431033564789, 0
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4021382990900246, 0.18708074425708884, 0.02853645103573049, 0.2071431033564789, 0.21498636006044355
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.13386725233216962, 0.12472049617139258, 0, 0.05016747034414723, 0.6245379656832657
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.4021382990900246, 0.12472049617139258, 0.02853645103573049, 0.0728237472737621, 1.1896142119582505
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.4021382990900246, 0.18708074425708884, 0.08560935310719146, 0.22656276929614877, 5.399794399553018
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.05381689409795589, 0.04070249132729692, 0.4126679012179853, 2.273223056336034
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.12438834201339208, 0, 0, 0, 1.5335416094730574
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.34732158186916956, 0.11314227677681496, 0.05707290207146098, 0.0728237472737621, 1.9971094393808946
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.13386725233216962, 0.09397689386514431, 0.07955011333727136, 0.025892887919559862, 5.399794399553018
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.018868396955302465, 0.06236024808569629, 0.05707290207146098, 0, 1.1896142119582505
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
  chart_worstScoreDifferencePercentageSummaryChart1_766e0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_766e0.resize();
});