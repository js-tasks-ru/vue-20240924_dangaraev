<script setup>
import { computed } from 'vue'
import { UiIcon } from '@shgk/vue-course-ui'

const props = defineProps({
  agendaItem: {
    type: Object,
    required: true,
  },
})

const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
}

const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
}

const icon = computed(() => agendaItemIcons[props.agendaItem.type])
const title = computed(() => agendaItemDefaultTitles[props.agendaItem.type])
</script>

<template>
  <div class="agenda-item">
    <div class="agenda-item__col">
      <UiIcon :icon="icon" />
    </div>
    <div class="agenda-item__col">{{ props.agendaItem.startsAt }} - {{ props.agendaItem.endsAt }}</div>
    <div class="agenda-item__col">
      <h3 class="agenda-item__title">{{ title }}</h3>
      <p v-if="props.agendaItem.speaker" class="agenda-item__talk">
        <span>{{ props.agendaItem.speaker }}</span>
        <span class="agenda-item__dot"></span>
        <span class="agenda-item__lang">{{ props.agendaItem.language }}</span>
      </p>
      <p v-if="props.agendaItem.description">{{ props.agendaItem.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.agenda-item {
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  line-height: 28px;
}

.agenda-item__col:nth-child(1) {
  flex: 1 0 48px;
  max-width: 48px;
}

.agenda-item__col:nth-child(2) {
  flex: 115px;
  max-width: 115px;
  color: var(--blue);
  white-space: nowrap;
}

.agenda-item__col:nth-child(3) {
  flex: 1 0 calc(100% - 48 - 115);
  max-width: calc(100% - 48 - 115);
  padding-left: 24px;
}

.agenda-item__title {
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
}

.agenda-item__lang {
  font-style: italic;
}

.agenda-item__dot::before {
  content: '•';
  color: var(--grey);
  padding: 0 1ch;
}

.agenda-item__talk {
  margin-top: 16px;
  margin-bottom: 0;
}

@media all and (min-width: 992px) {
  .agenda-item {
    padding: 40px 0;
  }
}
</style>
