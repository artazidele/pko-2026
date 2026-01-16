
var chart_bestScoreProblemStatisticChart2_6d5ae = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_6d5ae'), {
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
                    {x: 193, y: -3098700}, {x: 266, y: -3098700}, {x: 273, y: -3099585}, {x: 275, y: -3099585}, {x: 283, y: -3098700}, {x: 286, y: -3099682}, {x: 316, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 90, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 97, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 92, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    {x: 83, y: -3098700}, {x: 10002, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 89, y: -3098700}, {x: 99, y: -3098700}, {x: 4014, y: -3104172}, {x: 4018, y: -3101048}, {x: 4021, y: -3100518}, {x: 6080, y: -3100154}, {x: 6100, y: -3100154}, {x: 6501, y: -3099491}, {x: 6537, y: -3098832}, {x: 7042, y: -3098740}, {x: 7052, y: -3098738}, {x: 7140, y: -3098700}, {x: 10000, y: -3098700}
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 82, y: -3098700}, {x: 91, y: -3098700}, {x: 7553, y: -3099035}, {x: 7663, y: -3102025}, {x: 7688, y: -3101725}, {x: 7695, y: -3101227}, {x: 7707, y: -3101010}, {x: 7725, y: -3099916}, {x: 8027, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 92, y: -3098700}, {x: 100, y: -3098700}, {x: 145, y: -3100882}, {x: 173, y: -3098734}, {x: 280, y: -3100962}, {x: 323, y: -3100241}, {x: 376, y: -3100064}, {x: 385, y: -3099251}, {x: 439, y: -3099388}, {x: 596, y: -3100911}, {x: 1136, y: -3099141}, {x: 1487, y: -3098850}, {x: 9383, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 89, y: -3098700}, {x: 97, y: -3098700}, {x: 146, y: -3100882}, {x: 184, y: -3098734}, {x: 363, y: -3100962}, {x: 726, y: -3100407}, {x: 729, y: -3100407}, {x: 765, y: -3100098}, {x: 2899, y: -3102443}, {x: 3079, y: -3098934}, {x: 3426, y: -3098700}, {x: 3586, y: -3101678}, {x: 3718, y: -3100411}, {x: 4383, y: -3099156}, {x: 6551, y: -3099094}, {x: 7072, y: -3098855}, {x: 7309, y: -3098700}, {x: 10001, y: -3098700}
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    {x: 88, y: -3098700}, {x: 96, y: -3098700}, {x: 140, y: -3100882}, {x: 166, y: -3098734}, {x: 277, y: -3100962}, {x: 1067, y: -3101219}, {x: 1642, y: -3101329}, {x: 2298, y: -3098982}, {x: 3928, y: -3098700}, {x: 4043, y: -3101682}, {x: 4120, y: -3100573}, {x: 4609, y: -3099199}, {x: 5348, y: -3099178}, {x: 8370, y: -3098700}, {x: 10001, y: -3098700}
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
                suggestedMax: 10002,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_bestScoreProblemStatisticChart2_6d5ae.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_6d5ae.resize();
});
