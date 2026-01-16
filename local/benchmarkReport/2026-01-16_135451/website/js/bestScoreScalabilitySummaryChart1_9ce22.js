
var chart_bestScoreScalabilitySummaryChart1_9ce22 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_9ce22'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1113775}, {x: 164632584, y: -4801757}, {x: 259200590, y: -10503870}, {x: 359743372, y: -18499509}, {x: 464848945, y: -49233356}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1113775}, {x: 164632584, y: -4801757}, {x: 259200590, y: -10509870}, {x: 359743372, y: -18499509}, {x: 464848945, y: -49127511}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1116775}, {x: 164632584, y: -4804757}, {x: 259200590, y: -10512870}, {x: 359743372, y: -18528609}, {x: 464848945, y: -48925875}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1113775}, {x: 164632584, y: -4804757}, {x: 259200590, y: -10509870}, {x: 359743372, y: -18524409}, {x: 464848945, y: -48647669}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -1113775}, {x: 164632584, y: -4801757}, {x: 259200590, y: -10503870}, {x: 359743372, y: -18495909}, {x: 464848945, y: -46574856}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1118272}, {x: 164632584, y: -4808168}, {x: 259200590, y: -10508591}, {x: 359743372, y: -18461409}, {x: 464848945, y: -48114172}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1116881}, {x: 164632584, y: -4810757}, {x: 259200590, y: -10512870}, {x: 359743372, y: -18537909}, {x: 464848945, y: -48478342}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1114388}, {x: 164632584, y: -4805314}, {x: 259200590, y: -10506870}, {x: 359743372, y: -18524409}, {x: 464848945, y: -48250112}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1116775}, {x: 164632584, y: -4806236}, {x: 259200590, y: -10504507}, {x: 359743372, y: -18533109}, {x: 464848945, y: -46574856}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -1118061}, {x: 164632584, y: -4807757}, {x: 259200590, y: -10506870}, {x: 359743372, y: -18537909}, {x: 464848945, y: -48647669}
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best medium score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 464848945,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best medium score'
                },
                ticks: {
                        stepSize: 1000000
                        
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
  chart_bestScoreScalabilitySummaryChart1_9ce22.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_9ce22.resize();
});
