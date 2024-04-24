import type { TDoughnutChartData } from '../types'

export const profitBackground = '#154EC1'
export const expensesBackground = '#fff'
export const earningsBackground = '#ECF0F1'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['On Time', 'Late'],
  datasets: [
    {
      label: 'OTD Rate',
      backgroundColor: [profitBackground, earningsBackground],
      data: [432, 167],
    },
  ],
}
