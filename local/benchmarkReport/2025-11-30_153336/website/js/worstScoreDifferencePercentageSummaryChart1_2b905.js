
var chart_worstScoreDifferencePercentageSummaryChart1_2b905 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_2b905'), {
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
                    0.27470584074135207, 1.1901681759379044, 0.5188352105628177, 1.2365464421876582, 0.8894125065336973
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.27470584074135207, 1.071343011834603, 0, 0.8451702149195318, 0.13855586622306665
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.27470584074135207, 1.1901681759379044, 0.48723103530010803, 1.0771281082357704, 0.6230865600809763
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.27470584074135207, 1.1901681759379044, 0.48723103530010803, 1.0771281082357704, 0.6230865600809763
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2640948855195831, 1.673134971970677, 0, 0, 0
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.14265839798156052, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.27470584074135207, 0.8633989746538259, 0.3441343528606168, 0.44282870542191033, 0.4729152320188502
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.27470584074135207, 0.7129509846198074, 0.3441343528606168, 0.4074024089881575, 0.4729152320188502
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2027871442382513, 0.8356092185328925, 0.3441343528606168, 0.4074024089881575, 0.4729152320188502
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
  chart_worstScoreDifferencePercentageSummaryChart1_2b905.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_2b905.resize();
});