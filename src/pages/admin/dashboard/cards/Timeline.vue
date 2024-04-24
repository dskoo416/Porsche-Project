<script setup lang="ts">
import VaTimelineItem from '../../../../components/va-timeline-item.vue'
</script>

<template>
  <VaCard>
    <VaCardTitle class="flex justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Timeline</h1>
    </VaCardTitle>
    <VaCardContent>
      <table class="mt-4">
        <tbody>
          <VaTimelineItem date="25m ago">
            <RouterLink class="va-link font-semibold" to="/users">Nic</RouterLink> updated the status of
            <RouterLink class="va-link font-semibold" to="/users">Refund #1234</RouterLink> to awaiting customer
            response
          </VaTimelineItem>
          <VaTimelineItem date="1h ago">
            <RouterLink class="va-link font-semibold" to="/users">AI-Driven Drug Discovery Platform Update</RouterLink>
          </VaTimelineItem>
          <VaTimelineItem date="2h ago">
            <RouterLink class="va-link font-semibold" to="/users">Expansion of Manufacturing Facilities</RouterLink>
            <RouterLink class="va-link font-semibold" to="/users"></RouterLink>- Daniel Hua
          </VaTimelineItem>
          <VaTimelineItem date="3d ago">
            <RouterLink class="va-link font-semibold" to="/users">Nic</RouterLink> updated the status to awaiting
            customer response
          </VaTimelineItem>
          <VaTimelineItem date="Nov 14, 2023">
            <RouterLink class="va-link font-semibold" to="/users">Sarah Kim</RouterLink> was added to the group
          </VaTimelineItem>
          <VaTimelineItem date="Nov 14, 2023">
            <RouterLink class="va-link font-semibold" to="/users">Andrew Bui</RouterLink> was added to the group
          </VaTimelineItem>
          <VaTimelineItem date="Nov 15, 2023">
            Project <RouterLink class="va-link font-semibold" to="/projects">Predictive Plant Control</RouterLink> was created
          </VaTimelineItem>
        </tbody>
      </table>
    </VaCardContent>
  </VaCard>
</template>
