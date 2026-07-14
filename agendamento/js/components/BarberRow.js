window.BarberRow = {
    props: ['barbers', 'selectedId', 'locked'],
    emits: ['select'],
    template: `
    <div class="barber-row">
      <div
        v-for="(b, i) in barbers"
        :key="b.id"
        class="barber-card"
        :class="{ selected: selectedId === b.id, disabled: locked && selectedId !== b.id }"
        :style="{ animationDelay: (i * 0.07) + 's' }"
        @click="!locked && $emit('select', b)"
      >
        <div class="avatar-fallback barber-photo" v-if="!b.photo">{{ b.name[0] }}</div>
        <img v-else class="barber-photo" :src="b.photo" :alt="b.name">
        <div class="barber-name">{{ b.name }}</div>
        <div class="barber-role">{{ b.role }}</div>
      </div>
    </div>
  `
};
