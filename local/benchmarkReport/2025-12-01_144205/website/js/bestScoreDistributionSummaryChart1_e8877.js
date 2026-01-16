
var chart_bestScoreDistributionSummaryChart1_e8877 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_e8877'), {
    type: 'boxplot',
    data: {
        labels: [
            'example-data-1'
        ],
        datasets: [
                {
                    label: 'Hill Climbing',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110569,
                                    max: -110569,
                                    q1: -110569,
                                    q3: -110569,
                                    median: -110569,
                                    mean: -110569,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 500 - 1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110701,
                                    max: -110701,
                                    q1: -110701,
                                    q3: -110701,
                                    median: -110701,
                                    mean: -110701,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 500 - 5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110701,
                                    max: -110701,
                                    q1: -110701,
                                    q3: -110701,
                                    median: -110701,
                                    mean: -110701,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search 1000 - 5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110701,
                                    max: -110701,
                                    q1: -110701,
                                    q3: -110701,
                                    median: -110701,
                                    mean: -110701,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 0-1000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110569,
                                    max: -110569,
                                    q1: -110569,
                                    q3: -110569,
                                    median: -110569,
                                    mean: -110569,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 1-5000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110569,
                                    max: -110569,
                                    q1: -110569,
                                    q3: -110569,
                                    median: -110569,
                                    mean: -110569,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing 2-10000',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110569,
                                    max: -110569,
                                    q1: -110569,
                                    q3: -110569,
                                    median: -110569,
                                    mean: -110569,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 200',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110604,
                                    max: -110604,
                                    q1: -110604,
                                    q3: -110604,
                                    median: -110604,
                                    mean: -110604,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110595,
                                    max: -110595,
                                    q1: -110595,
                                    q3: -110595,
                                    median: -110595,
                                    mean: -110595,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance 600',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -110612,
                                    max: -110612,
                                    q1: -110612,
                                    q3: -110612,
                                    median: -110612,
                                    mean: -110612,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_e8877.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_e8877.resize();
});