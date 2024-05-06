<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <DataSectionItem
      v-for="metric in dashboardMetrics"
      :key="metric.id"
      :title="metric.title"
      :value="metric.value"
      :change-text="metric.changeText"
      :up="metric.changeDirection === 'up'"
      :icon-background="metric.iconBackground"
      :icon-color="metric.iconColor"
    >
      <template #icon>
        <VaIcon :name="metric.icon" size="large" />
      </template>
    </DataSectionItem>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'
import DataSectionItem from './DataSectionItem.vue'

interface DashboardMetric {
  id: string
  title: string
  value: string
  icon: string
  changeText: string
  changeDirection: 'up' | 'down'
  iconBackground: string
  iconColor: string
}

const { getColor } = useColors()

const dashboardMetrics = computed<DashboardMetric[]>(() => [
  {
    id: 'Carrying Costs',
    title: 'Carrying Costs',
    value: '$35,548',
    icon: 'mso-attach_money',
    changeText: '$1, 450',
    changeDirection: 'down',
    iconBackground: getColor('success'),
    iconColor: getColor('on-success'),
  },
  {
    id: 'ongoingProjects',
    title: 'Ongoing project',
    value: '15',
    icon: 'mso-folder_open',
    changeText: '25.36%',
    changeDirection: 'up',
    iconBackground: getColor('info'),
    iconColor: getColor('on-info'),
  },
  {
    id: 'Revenue At Risk',
    title: 'Revenue At Risk',
    value: '$8,862',
    icon: 'mso-attach_money',
    changeText: '$1, 700',
    changeDirection: 'down',
    iconBackground: getColor('danger'),
    iconColor: getColor('on-success'),
  },
  {id: 'COGS (Cost of Goods Sold)',
    title: 'COGS',
    value: '$123,302',
    icon: 'mso-attach_money',
    changeText: '$3, 300',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-success'),
  },
  {
    id: 'Production Cycle Time',
    title: 'Production Cycle Time (Week)',
    value: '3.5',
    icon: 'mso-account_circle',
    changeText: '2.5%',
    changeDirection: 'up',
    iconBackground: getColor('danger'),
    iconColor: getColor('on-danger'),
  },
  {
    id: 'Raw Materials',
    title: 'Raw Materials (units)',
    value: '5000',
    icon: 'mso-grade',
    changeText: '4%',
    changeDirection: 'up',
    iconBackground: getColor('warning'),
    iconColor: getColor('on-warning'),
  },
])
</script>
