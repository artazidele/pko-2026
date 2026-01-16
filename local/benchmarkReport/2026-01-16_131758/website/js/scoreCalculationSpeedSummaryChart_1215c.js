
var chart_scoreCalculationSpeedSummaryChart_1215c = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_1215c'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 14508}, {x: 164632584, y: 9977}, {x: 259200590, y: 6972}, {x: 359743372, y: 7863}, {x: 464848945, y: 7755}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 17572}, {x: 164632584, y: 9131}, {x: 259200590, y: 7829}, {x: 359743372, y: 8076}, {x: 464848945, y: 8159}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 16435}, {x: 164632584, y: 10421}, {x: 259200590, y: 7815}, {x: 359743372, y: 7684}, {x: 464848945, y: 8433}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 15953}, {x: 164632584, y: 10657}, {x: 259200590, y: 6970}, {x: 359743372, y: 8121}, {x: 464848945, y: 8282}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: 17653}, {x: 164632584, y: 9434}, {x: 259200590, y: 7653}, {x: 359743372, y: 7639}, {x: 464848945, y: 7866}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 13271}, {x: 164632584, y: 10012}, {x: 259200590, y: 7502}, {x: 359743372, y: 6716}, {x: 464848945, y: 7321}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 14601}, {x: 164632584, y: 8742}, {x: 259200590, y: 6233}, {x: 359743372, y: 6636}, {x: 464848945, y: 7009}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 17569}, {x: 164632584, y: 8654}, {x: 259200590, y: 7947}, {x: 359743372, y: 6834}, {x: 464848945, y: 7512}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 13943}, {x: 164632584, y: 9463}, {x: 259200590, y: 8334}, {x: 359743372, y: 6438}, {x: 464848945, y: 7508}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: 15912}, {x: 164632584, y: 9270}, {x: 259200590, y: 7254}, {x: 359743372, y: 6869}, {x: 464848945, y: 7352}
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
  chart_scoreCalculationSpeedSummaryChart_1215c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_1215c.resize();
});
