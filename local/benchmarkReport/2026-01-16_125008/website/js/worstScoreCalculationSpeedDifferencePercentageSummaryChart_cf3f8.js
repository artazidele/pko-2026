
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cf3f8 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cf3f8'), {
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
                    0, 10.82890787347033, 0, 59.186295503211994, 15.851513019000704
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    10.2921371594323, 12.499037943508043, 22.996849746610053, 0, 4.275158339197748
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    9.535895576504712, 12.068036635111214, 1.8079715107519516, 42.847965738758035, 4.574243490499648
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    9.94509478918471, 12.283537289309628, 20.695795096562115, 49.93576017130621, 0
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    3.8174660727235055, 10.767336257985068, 33.03657033283112, 65.82441113490364, 9.58831808585503
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    3.18035843779136, 10.020780420226275, 18.64128201616217, 60.74946466809422, 9.764250527797326
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2.004558168445043, 5.264373123989841, 21.134091220380768, 55.481798715203425, 6.8437719915552435
                  ]
                }, 
{
                  label: 'Late Acceptance 200 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    4.609965813736662, 0, 29.105601972332558, 63.49036402569593, 12.64954257565095
                  ]
                }, 
{
                  label: 'Late Acceptance 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    5.247073448668807, 0.6003232509812977, 30.68072866730585, 55.11777301927195, 5.506685432793807
                  ]
                }, 
{
                  label: 'Late Acceptance 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    4.884491867813115, 6.996074809512814, 22.01068346801808, 59.978586723768736, 11.840253342716398
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cf3f8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cf3f8.resize();
});