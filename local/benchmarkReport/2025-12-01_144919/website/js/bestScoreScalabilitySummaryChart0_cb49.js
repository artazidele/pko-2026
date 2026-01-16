
var chart_bestScoreScalabilitySummaryChart0_cb49 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_cb49'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: -137657}, {x: 134837482, y: -166619}, {x: 216316539, y: -181657}, {x: 303250121, y: -193280}, {x: 394322151, y: -219954}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -138503}, {x: 134837482, y: -171948}, {x: 216316539, y: -198291}, {x: 303250121, y: -195093}, {x: 394322151, y: -221147}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -138503}, {x: 134837482, y: -171778}, {x: 216316539, y: -198737}, {x: 303250121, y: -194594}, {x: 394322151, y: -221147}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -138503}, {x: 134837482, y: -171778}, {x: 216316539, y: -198737}, {x: 303250121, y: -194594}, {x: 394322151, y: -221147}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -137657}, {x: 134837482, y: -170771}, {x: 216316539, y: -182025}, {x: 303250121, y: -193292}, {x: 394322151, y: -220049}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -137657}, {x: 134837482, y: -170771}, {x: 216316539, y: -182025}, {x: 303250121, y: -193292}, {x: 394322151, y: -220049}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -137657}, {x: 134837482, y: -170905}, {x: 216316539, y: -181942}, {x: 303250121, y: -193233}, {x: 394322151, y: -220050}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -137984}, {x: 134837482, y: -175882}, {x: 216316539, y: -198750}, {x: 303250121, y: -195236}, {x: 394322151, y: -221185}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -138325}, {x: 134837482, y: -180785}, {x: 216316539, y: -198672}, {x: 303250121, y: -195236}, {x: 394322151, y: -221185}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -138631}, {x: 134837482, y: -184207}, {x: 216316539, y: -198672}, {x: 303250121, y: -195236}, {x: 394322151, y: -221185}
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
                text: 'Best hard score scalability summary (higher is better)'
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
                    text: 'Best hard score'
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
  chart_bestScoreScalabilitySummaryChart0_cb49.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_cb49.resize();
});
