window.ServiceGrid = {
    props: ['services', 'selectedId', 'locked'],
    emits: ['select'],
    template: `
    <div class="service-grid" :class="{ locked }">
      <div
        v-for="(s, i) in services"
        :key="s.id"
        class="service-card"
        :class="{ selected: selectedId === s.id, disabled: locked && selectedId !== s.id }"
        :style="{ animationDelay: (i * 0.06) + 's' }"
        @click="!locked && $emit('select', s)"
      >
        <div class="s-icon"><i :class="s.icon"></i></div>
        <div class="s-name">{{ s.name }}</div>
        <div class="s-meta">
          <span>{{ s.duration }} min</span>
          <span class="s-price">R$ {{ s.price }}</span>
        </div>
      </div>
    </div>
  `
};
