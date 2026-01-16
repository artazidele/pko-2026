
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_5b82c = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_5b82c'), {
    type: 'bar',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    4.628851850214422, 9.904574723939072, 11.98659578574311
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    9.304566956983068, 12.263915108571034, 14.123550362299769
                  ]
                }, 
{
                  label: 'LAHC 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 0
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_5b82c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_5b82c.resize();
});