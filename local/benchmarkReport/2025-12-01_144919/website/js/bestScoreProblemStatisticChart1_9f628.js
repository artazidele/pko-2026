
var chart_bestScoreProblemStatisticChart1_9f628 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_9f628'), {
    type: 'line',
    data: {
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 57, y: -107255}, {x: 73, y: -103172}, {x: 80, y: -103088}, {x: 99, y: -103034}, {x: 214, y: -102983}, {x: 284, y: -102925}, {x: 2091, y: -102821}, {x: 5304, y: -102821}, {x: 5336, y: -102801}, {x: 5374, y: -102536}, {x: 5398, y: -102092}, {x: 10000, y: -102092}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 34, y: -107255}, {x: 61, y: -103172}, {x: 10001, y: -103172}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -107255}, {x: 142, y: -103172}, {x: 10000, y: -103172}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 27, y: -107255}, {x: 141, y: -103172}, {x: 10000, y: -103172}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -107255}, {x: 31, y: -107175}, {x: 48, y: -105601}, {x: 65, y: -104972}, {x: 97, y: -104906}, {x: 151, y: -104874}, {x: 182, y: -102983}, {x: 197, y: -102925}, {x: 1792, y: -102925}, {x: 1805, y: -102639}, {x: 2134, y: -102196}, {x: 3962, y: -102092}, {x: 10000, y: -102092}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 26, y: -107255}, {x: 31, y: -107175}, {x: 48, y: -105601}, {x: 65, y: -104972}, {x: 97, y: -104906}, {x: 152, y: -104874}, {x: 182, y: -102983}, {x: 198, y: -102925}, {x: 1788, y: -102925}, {x: 1802, y: -102639}, {x: 2132, y: -102196}, {x: 3965, y: -102092}, {x: 10000, y: -102092}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 23, y: -107255}, {x: 28, y: -107175}, {x: 45, y: -105601}, {x: 63, y: -104972}, {x: 96, y: -104906}, {x: 151, y: -104874}, {x: 182, y: -102983}, {x: 196, y: -102925}, {x: 1788, y: -102925}, {x: 1801, y: -102639}, {x: 2131, y: -102196}, {x: 3958, y: -102092}, {x: 10000, y: -102092}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -107255}, {x: 27, y: -103172}, {x: 5095, y: -104373}, {x: 5350, y: -104056}, {x: 6469, y: -103827}, {x: 6712, y: -103549}, {x: 7158, y: -103310}, {x: 7620, y: -103257}, {x: 7630, y: -103138}, {x: 8086, y: -103028}, {x: 9177, y: -102511}, {x: 10000, y: -102511}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -107255}, {x: 28, y: -103172}, {x: 4544, y: -103029}, {x: 4545, y: -102973}, {x: 6655, y: -104224}, {x: 7961, y: -102946}, {x: 10000, y: -102946}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 24, y: -107255}, {x: 28, y: -103172}, {x: 5065, y: -104743}, {x: 6318, y: -104470}, {x: 7050, y: -104424}, {x: 7547, y: -104313}, {x: 7548, y: -104166}, {x: 8555, y: -103792}, {x: 9105, y: -103640}, {x: 9484, y: -103558}, {x: 9500, y: -103337}, {x: 10000, y: -103337}
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
                text: 'example-data-1 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart1_9f628.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_9f628.resize();
});
