
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e4f59 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e4f59'), {
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
                    5.396281013879213, 5.707066954001635, 1.415319881419145, 10.875262054507337, 14.439159122295534
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    5.273029312469857, 0, 2.6585062637467725, 0, 3.498542274052478
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    12.93606987835593, 7.1932823066062275, 0.2582002486372764, 0.2489517819706499, 3.4371643394199785
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    5.498097636782594, 7.639146912387605, 0, 0.18343815513626835, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 5.603031879319313, 0.2868891651525294, 9.224318658280922, 9.66702470461869
                  ]
                }, 
{
                  label: 'Late Acceptance 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2.7651251272707786, 5.201753734116074, 0.01912594434350196, 10.534591194968554, 7.779653214669327
                  ]
                }, 
{
                  label: 'Late Acceptance 600 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    7.496918707464766, 5.892843873077209, 1.0519269388926078, 10.79664570230608, 11.001994782875556
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e4f59.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e4f59.resize();
});