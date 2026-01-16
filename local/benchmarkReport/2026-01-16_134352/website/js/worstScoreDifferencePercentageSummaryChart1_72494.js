
var chart_worstScoreDifferencePercentageSummaryChart1_72494 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_72494'), {
    type: 'bar',
    data: {
        labels: [
            'example-data-1', 'example-data-2', 'example-data-3', 'example-data-4', 'example-data-5'
        ],
        datasets: [
            {
                  label: 'Hill Climbing (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.10872067630717075, 0.09672973427428437, 0.05232832802410117
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.049038235499806626, 0.08040308393683629, 0.06448648951618957, 0.05232832802410117
                  ]
                }, 
{
                  label: 'Tabu Search 500 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.10872067630717075, 0.06448648951618957, 0.031396996814460704
                  ]
                }, 
{
                  label: 'Tabu Search 1000 - 5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.10872067630717075, 0.06448648951618957, 0.031396996814460704
                  ]
                }, 
{
                  label: 'Simulated Annealing 0-1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.10872067630717075, 0.09672973427428437, 0.05232832802410117
                  ]
                }, 
{
                  label: 'Simulated Annealing 1-5000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0, 0, 0.000489022545497771, 0.04186266241928094
                  ]
                }, 
{
                  label: 'Simulated Annealing 2-1000-10000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.06284617666722893, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.08040308393683629, 0.06540004811766893, 0.05232832802410117
                  ]
                }, 
{
                  label: 'Late Acceptance 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.08280064009085794, 0.03049673566703132, 0.05232832802410117
                  ]
                }, 
{
                  label: 'Late Acceptance 600',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2848359060345335, 0.049038235499806626, 0.10872067630717075, 0.032243244758094786, 0.05232832802410117
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst medium score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst medium score difference percentage'
                },
                ticks: {
                        stepSize: 0.001
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_72494.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_72494.resize();
});