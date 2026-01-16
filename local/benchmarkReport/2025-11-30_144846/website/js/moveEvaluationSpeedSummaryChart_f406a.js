
var chart_moveEvaluationSpeedSummaryChart_f406a = new Chart(document.getElementById('chart_moveEvaluationSpeedSummaryChart_f406a'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 66061}, {x: 134837482, y: 41518}, {x: 216316539, y: 33222}
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 61403894, y: 63625}, {x: 134837482, y: 42898}, {x: 216316539, y: 33700}
                  ]
                }, 
{
                  label: 'LAHC 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 61403894, y: 67119}, {x: 134837482, y: 45107}, {x: 216316539, y: 34013}
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
                        stepSize: 1000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 216316539,
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
  chart_moveEvaluationSpeedSummaryChart_f406a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_moveEvaluationSpeedSummaryChart_f406a.resize();
});
