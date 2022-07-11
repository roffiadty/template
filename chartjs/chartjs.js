// declaring Element
const dataAcv = document.getElementById('acv')
const dataPerform = document.getElementById('perform')
// convert array
const acv = ['94','10']
const perform = ['81','20']
// post html
dataAcv.textContent = acv[0] + '%'
dataPerform.textContent = perform[0] + '%'
// chart 1
const data1 = {
  datasets: [{
    label: 'optional in doughnut chart',
    data: [acv[0], acv[1]],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    hoverOffset: 7
  }]
}

const config1 = {
	type: 'doughnut',
	data: data1,
}

const myChart1 = new Chart(document.getElementById('chart1'), config1)

// chart 2
const data2 = {
  datasets: [{
    label: 'optional in doughnut chart',
    data: [perform[0], perform[1]],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    hoverOffset: 7
  }]
}

const config2 = {
	type: 'doughnut',
	data: data2,
}

const myChart2 = new Chart(document.getElementById('chart2'), config2)