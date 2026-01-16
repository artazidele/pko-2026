
var chart_scoreCalculationSpeedSummaryChart_701b8 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_701b8'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 23233}, {x: 164632584, y: 16437}, {x: 259200590, y: 12062}, {x: 359743372, y: 9483}, {x: 464848945, y: 9490}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 28100}, {x: 164632584, y: 17113}, {x: 259200590, y: 13525}, {x: 359743372, y: 9810}, {x: 464848945, y: 9964}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 27720}, {x: 164632584, y: 16206}, {x: 259200590, y: 13457}, {x: 359743372, y: 10015}, {x: 464848945, y: 10436}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 27855}, {x: 164632584, y: 17353}, {x: 259200590, y: 12504}, {x: 359743372, y: 9949}, {x: 464848945, y: 10373}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 25088}, {x: 164632584, y: 16653}, {x: 259200590, y: 12351}, {x: 359743372, y: 9182}, {x: 464848945, y: 10200}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 21484}, {x: 164632584, y: 10438}, {x: 259200590, y: 8351}, {x: 359743372, y: 7759}, {x: 464848945, y: 8244}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 17411}, {x: 164632584, y: 11080}, {x: 259200590, y: 7539}, {x: 359743372, y: 7544}, {x: 464848945, y: 7702}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 23012}, {x: 164632584, y: 16509}, {x: 259200590, y: 11198}, {x: 359743372, y: 8723}, {x: 464848945, y: 9568}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 25375}, {x: 164632584, y: 16022}, {x: 259200590, y: 11991}, {x: 359743372, y: 8495}, {x: 464848945, y: 8698}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 22444}, {x: 164632584, y: 16104}, {x: 259200590, y: 10824}, {x: 359743372, y: 8031}, {x: 464848945, y: 9638}
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
                suggestedMax: 464848945,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
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
  chart_scoreCalculationSpeedSummaryChart_701b8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_701b8.resize();
});
