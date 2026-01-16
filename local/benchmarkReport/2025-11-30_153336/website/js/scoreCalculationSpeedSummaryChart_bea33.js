
var chart_scoreCalculationSpeedSummaryChart_bea33 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_bea33'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: 68296}, {x: 134837482, y: 48026}, {x: 216316539, y: 26644}, {x: 303250121, y: 31349}, {x: 394322151, y: 25891}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 65099}, {x: 134837482, y: 46225}, {x: 216316539, y: 28009}, {x: 303250121, y: 29362}, {x: 394322151, y: 25428}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 63841}, {x: 134837482, y: 46511}, {x: 216316539, y: 27915}, {x: 303250121, y: 28369}, {x: 394322151, y: 25520}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 64464}, {x: 134837482, y: 46457}, {x: 216316539, y: 27526}, {x: 303250121, y: 28530}, {x: 394322151, y: 25619}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 58513}, {x: 134837482, y: 43885}, {x: 216316539, y: 26861}, {x: 303250121, y: 28412}, {x: 394322151, y: 22320}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 57349}, {x: 134837482, y: 33353}, {x: 216316539, y: 20737}, {x: 303250121, y: 18274}, {x: 394322151, y: 16426}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 52516}, {x: 134837482, y: 32955}, {x: 216316539, y: 21221}, {x: 303250121, y: 18266}, {x: 394322151, y: 16295}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 71009}, {x: 134837482, y: 48041}, {x: 216316539, y: 27517}, {x: 303250121, y: 31396}, {x: 394322151, y: 25852}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 69652}, {x: 134837482, y: 46038}, {x: 216316539, y: 27141}, {x: 303250121, y: 31334}, {x: 394322151, y: 25931}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 70413}, {x: 134837482, y: 44019}, {x: 216316539, y: 26654}, {x: 303250121, y: 31314}, {x: 394322151, y: 25933}
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
                text: 'Score calculation speed summary (higher is better)'
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
                    text: 'Score calculation speed per second'
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
  chart_scoreCalculationSpeedSummaryChart_bea33.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_bea33.resize();
});
