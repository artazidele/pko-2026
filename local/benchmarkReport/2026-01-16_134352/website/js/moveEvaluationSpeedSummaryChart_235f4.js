
var chart_moveEvaluationSpeedSummaryChart_235f4 = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_235f4'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 11039}, {x: 164632584, y: 7609}, {x: 259200590, y: 5497}, {x: 359743372, y: 4366}, {x: 464848945, y: 4487}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 14044}, {x: 164632584, y: 8546}, {x: 259200590, y: 6747}, {x: 359743372, y: 4885}, {x: 464848945, y: 4958}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 13854}, {x: 164632584, y: 8092}, {x: 259200590, y: 6713}, {x: 359743372, y: 4988}, {x: 464848945, y: 5194}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 13921}, {x: 164632584, y: 8666}, {x: 259200590, y: 6237}, {x: 359743372, y: 4955}, {x: 464848945, y: 5162}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 11892}, {x: 164632584, y: 7703}, {x: 259200590, y: 5615}, {x: 359743372, y: 4231}, {x: 464848945, y: 4808}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 9460}, {x: 164632584, y: 4332}, {x: 259200590, y: 3535}, {x: 359743372, y: 3449}, {x: 464848945, y: 3844}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 7371}, {x: 164632584, y: 4434}, {x: 259200590, y: 3120}, {x: 359743372, y: 3274}, {x: 464848945, y: 3561}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 10816}, {x: 164632584, y: 7634}, {x: 259200590, y: 5088}, {x: 359743372, y: 3984}, {x: 464848945, y: 4507}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 11906}, {x: 164632584, y: 7365}, {x: 259200590, y: 5455}, {x: 359743372, y: 3863}, {x: 464848945, y: 4133}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 10403}, {x: 164632584, y: 7412}, {x: 259200590, y: 4929}, {x: 359743372, y: 3646}, {x: 464848945, y: 4541}
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
                text: 'Move evaluation speed summary (higher is better)'
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
                    text: 'Move evaluation speed per second'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_moveEvaluationSpeedSummaryChart_235f4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_235f4.resize();
});
