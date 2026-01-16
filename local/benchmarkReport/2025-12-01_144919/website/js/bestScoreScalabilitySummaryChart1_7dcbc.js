
var chart_bestScoreScalabilitySummaryChart1_7dcbc = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_7dcbc'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: -102092}, {x: 134837482, y: -115556}, {x: 216316539, y: -119798}, {x: 303250121, y: -123529}, {x: 394322151, y: -129377}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -103172}, {x: 134837482, y: -122366}, {x: 216316539, y: -141052}, {x: 303250121, y: -125846}, {x: 394322151, y: -130901}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -103172}, {x: 134837482, y: -122149}, {x: 216316539, y: -141623}, {x: 303250121, y: -125208}, {x: 394322151, y: -130901}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -103172}, {x: 134837482, y: -122149}, {x: 216316539, y: -141623}, {x: 303250121, y: -125208}, {x: 394322151, y: -130901}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -102092}, {x: 134837482, y: -116282}, {x: 216316539, y: -120268}, {x: 303250121, y: -123544}, {x: 394322151, y: -129498}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -102092}, {x: 134837482, y: -116282}, {x: 216316539, y: -120268}, {x: 303250121, y: -123544}, {x: 394322151, y: -129498}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -102092}, {x: 134837482, y: -116453}, {x: 216316539, y: -120162}, {x: 303250121, y: -123469}, {x: 394322151, y: -129499}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -102511}, {x: 134837482, y: -130376}, {x: 216316539, y: -141713}, {x: 303250121, y: -126028}, {x: 394322151, y: -130950}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -102946}, {x: 134837482, y: -133658}, {x: 216316539, y: -141613}, {x: 303250121, y: -126028}, {x: 394322151, y: -130950}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -103337}, {x: 134837482, y: -138060}, {x: 216316539, y: -141613}, {x: 303250121, y: -126028}, {x: 394322151, y: -130950}
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
  chart_bestScoreScalabilitySummaryChart1_7dcbc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_7dcbc.resize();
});
