
var chart_bestScoreScalabilitySummaryChart1_70479 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_70479'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103113}, {x: 216316539, y: -113318}, {x: 303250121, y: -117090}, {x: 394322151, y: -119457}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103237}, {x: 216316539, y: -113909}, {x: 303250121, y: -117554}, {x: 394322151, y: -120362}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103113}, {x: 216316539, y: -113354}, {x: 303250121, y: -117279}, {x: 394322151, y: -119778}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103113}, {x: 216316539, y: -113354}, {x: 303250121, y: -117279}, {x: 394322151, y: -119778}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84594}, {x: 134837482, y: -102609}, {x: 216316539, y: -113909}, {x: 303250121, y: -118556}, {x: 394322151, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84697}, {x: 134837482, y: -104355}, {x: 216316539, y: -113909}, {x: 303250121, y: -118556}, {x: 394322151, y: -120529}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84818}, {x: 134837482, y: -104355}, {x: 216316539, y: -113909}, {x: 303250121, y: -118556}, {x: 394322151, y: -120529}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103454}, {x: 216316539, y: -113517}, {x: 303250121, y: -118031}, {x: 394322151, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84585}, {x: 134837482, y: -103611}, {x: 216316539, y: -113517}, {x: 303250121, y: -118073}, {x: 394322151, y: -119959}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -84646}, {x: 134837482, y: -103483}, {x: 216316539, y: -113517}, {x: 303250121, y: -118073}, {x: 394322151, y: -119959}
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
                text: 'Best soft score scalability summary (higher is better)'
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
                suggestedMax: 394322151,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_bestScoreScalabilitySummaryChart1_70479.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_70479.resize();
});
