
var chart_worstScoreDifferencePercentageSummaryChart1_c9035 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_c9035'), {
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
                    0, 0.06274487494632698, 0.05918438195362333, 0.019720349588897845, 0.03413476581687864
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.03092958471287381, 0.019720349588897845, 0.023650042007045943
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.03092958471287381, 0.019720349588897845, 0.03413476581687864
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.03092958471287381, 0.019720349588897845, 0.03413476581687864
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0.06274487494632698, 0.05918438195362333, 0.019720349588897845, 0.03413476581687864
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.03092958471287381, 0.016608880703802398, 0.001436407161947079
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.02716853085175959, 0, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.05918438195362333, 0.018485468523582668, 0.023220168330842804
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.06274487494632698, 0.03092958471287381, 0.0035428683838955115, 0.02051161467996936
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.044972218941526323, 0.0035428683838955115, 0.013165318197213251
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
                        stepSize: 0.001
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_c9035.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_c9035.resize();
});