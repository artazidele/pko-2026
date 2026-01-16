
var chart_bestScoreScalabilitySummaryChart1_54239 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_54239'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100160}, {x: 216316539, y: -111911}, {x: 303250121, y: -117424}, {x: 394322151, y: -120101}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100517}, {x: 216316539, y: -113445}, {x: 303250121, y: -120194}, {x: 394322151, y: -121932}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100275}, {x: 216316539, y: -114242}, {x: 303250121, y: -118826}, {x: 394322151, y: -121439}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100275}, {x: 216316539, y: -114242}, {x: 303250121, y: -118826}, {x: 394322151, y: -121439}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -99340}, {x: 216316539, y: -116526}, {x: 303250121, y: -120194}, {x: 394322151, y: -123224}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -99125}, {x: 134837482, y: -100580}, {x: 216316539, y: -116526}, {x: 303250121, y: -120194}, {x: 394322151, y: -123224}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -99154}, {x: 134837482, y: -100580}, {x: 216316539, y: -116526}, {x: 303250121, y: -120194}, {x: 394322151, y: -123224}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100243}, {x: 216316539, y: -114847}, {x: 303250121, y: -119282}, {x: 394322151, y: -122406}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98745}, {x: 134837482, y: -100243}, {x: 216316539, y: -114984}, {x: 303250121, y: -119282}, {x: 394322151, y: -122289}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: -98752}, {x: 134837482, y: -100243}, {x: 216316539, y: -115246}, {x: 303250121, y: -119282}, {x: 394322151, y: -122289}
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
  chart_bestScoreScalabilitySummaryChart1_54239.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_54239.resize();
});
