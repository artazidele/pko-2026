
var chart_moveEvaluationSpeedSummaryChart_937a9 = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_937a9'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: 62210}, {x: 134837482, y: 49454}, {x: 216316539, y: 29963}, {x: 303250121, y: 31412}, {x: 394322151, y: 23481}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 65947}, {x: 134837482, y: 47924}, {x: 216316539, y: 29456}, {x: 303250121, y: 30798}, {x: 394322151, y: 24806}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 67126}, {x: 134837482, y: 47866}, {x: 216316539, y: 30129}, {x: 303250121, y: 31116}, {x: 394322151, y: 23676}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 60258}, {x: 134837482, y: 47841}, {x: 216316539, y: 30128}, {x: 303250121, y: 29147}, {x: 394322151, y: 25050}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 60176}, {x: 134837482, y: 41559}, {x: 216316539, y: 24772}, {x: 303250121, y: 25415}, {x: 394322151, y: 22125}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 52185}, {x: 134837482, y: 34838}, {x: 216316539, y: 23703}, {x: 303250121, y: 16438}, {x: 394322151, y: 14811}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 49759}, {x: 134837482, y: 33834}, {x: 216316539, y: 23095}, {x: 303250121, y: 18190}, {x: 394322151, y: 14588}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 67091}, {x: 134837482, y: 48870}, {x: 216316539, y: 29739}, {x: 303250121, y: 30091}, {x: 394322151, y: 25271}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 67334}, {x: 134837482, y: 48726}, {x: 216316539, y: 29682}, {x: 303250121, y: 30205}, {x: 394322151, y: 25552}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 67144}, {x: 134837482, y: 48898}, {x: 216316539, y: 29874}, {x: 303250121, y: 31553}, {x: 394322151, y: 25407}
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
                suggestedMax: 394322151,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Move evaluation speed per second'
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
  chart_moveEvaluationSpeedSummaryChart_937a9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_937a9.resize();
});
