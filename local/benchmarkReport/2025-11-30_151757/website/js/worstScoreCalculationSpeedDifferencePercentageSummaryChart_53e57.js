
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_53e57 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_53e57'), {
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
                    25.022608975260756, 46.16657799846308, 29.74236847802555, 91.09380703248571, 60.96106388812723
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    32.532808135211724, 41.64745522255719, 27.54275817276467, 87.35855943545442, 70.0438716753496
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    34.90222874253904, 41.473074422178875, 30.461138774626544, 89.29310135052926, 62.297778996435426
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    21.099700556683214, 41.39918425252704, 30.45680883308075, 77.31475848643387, 71.71647929805319
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    20.93490624811592, 22.832062422415323, 7.261311972288374, 54.61126657744251, 51.66575267343022
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4.877509596253944, 2.9674292132174735, 2.632604459839792, 0, 1.5355086372360844
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 10.65823092833678, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    34.831889708394456, 44.44050363539635, 28.768131630222992, 83.0575495802409, 73.23142308746915
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    35.32024357402681, 44.01489625820181, 28.52132496211301, 83.75106460639981, 75.15766383328764
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    34.93840310295625, 44.523260625406394, 29.35267373890452, 91.95157561747172, 74.1636961886482
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_53e57.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_53e57.resize();
});