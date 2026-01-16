
var chart_bestScoreScalabilitySummaryChart2_c67f0 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart2_c67f0'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34650000}, {x: 464848945, y: -49886100}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34650000}, {x: 464848945, y: -49780500}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34831500}, {x: 464848945, y: -49579200}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34805100}, {x: 464848945, y: -49302000}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-0-1000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34630200}, {x: 464848945, y: -47236200}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-1000-5000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3101884}, {x: 164632584, y: -9872985}, {x: 259200590, y: -20514521}, {x: 359743372, y: -34409100}, {x: 464848945, y: -48770700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098806}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34894200}, {x: 464848945, y: -49133700}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3099313}, {x: 164632584, y: -9873857}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34805100}, {x: 464848945, y: -48906000}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3098700}, {x: 164632584, y: -9871779}, {x: 259200590, y: -20513437}, {x: 359743372, y: -34861200}, {x: 464848945, y: -47236200}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                    borderWidth: 1
                  ,
                  data: [
                    {x: 78761812, y: -3099986}, {x: 164632584, y: -9870300}, {x: 259200590, y: -20512800}, {x: 359743372, y: -34894200}, {x: 464848945, y: -49302000}
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
                suggestedMax: 464848945,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000000
                        
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
  chart_bestScoreScalabilitySummaryChart2_c67f0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart2_c67f0.resize();
});
