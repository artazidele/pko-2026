
var chart_scoreCalculationSpeedSummaryChart_e6249 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_e6249'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: 44318}, {x: 134837482, y: 28983}, {x: 216316539, y: 23283}, {x: 303250121, y: 16274}, {x: 394322151, y: 12853}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 44174}, {x: 134837482, y: 33082}, {x: 216316539, y: 24611}, {x: 303250121, y: 16204}, {x: 394322151, y: 13016}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 43575}, {x: 134837482, y: 32932}, {x: 216316539, y: 24492}, {x: 303250121, y: 16176}, {x: 394322151, y: 12100}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 44082}, {x: 134837482, y: 32516}, {x: 216316539, y: 24347}, {x: 303250121, y: 16106}, {x: 394322151, y: 12750}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 45073}, {x: 134837482, y: 28112}, {x: 216316539, y: 20747}, {x: 303250121, y: 15726}, {x: 394322151, y: 13299}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 45079}, {x: 134837482, y: 28136}, {x: 216316539, y: 20807}, {x: 303250121, y: 15191}, {x: 394322151, y: 12679}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 45122}, {x: 134837482, y: 27957}, {x: 216316539, y: 20789}, {x: 303250121, y: 16179}, {x: 394322151, y: 13117}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 44866}, {x: 134837482, y: 28686}, {x: 216316539, y: 23244}, {x: 303250121, y: 15398}, {x: 394322151, y: 13504}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 44699}, {x: 134837482, y: 28760}, {x: 216316539, y: 22672}, {x: 303250121, y: 15706}, {x: 394322151, y: 12749}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 44713}, {x: 134837482, y: 28535}, {x: 216316539, y: 22138}, {x: 303250121, y: 14035}, {x: 394322151, y: 12597}
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
  chart_scoreCalculationSpeedSummaryChart_e6249.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_e6249.resize();
});
