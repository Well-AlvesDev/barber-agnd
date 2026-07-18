window.ServiceGrid = {
  props: ['services', 'selectedIds', 'locked'],
  emits: ['toggle'],
  template: `
    <div>
      <div class="service-grid" :class="{ locked }">
        <div
          v-for="(s, i) in services"
          :key="s.id"
          class="service-card"
          :class="{ selected: selectedIds.includes(s.id), disabled: locked && !selectedIds.includes(s.id) }"
          :style="{ animationDelay: (i * 0.06) + 's' }"
          @click="!locked && $emit('toggle', s)"
        >
          <div class="service-image" :style="{ backgroundImage: 'url(' + s.image + ')' }"></div>
          <div class="service-details">
            <div class="s-name">{{ s.name }}</div>
            <div class="s-meta">
              <span class="s-duration">{{ s.duration }} min</span>
              <span class="s-price">R$ {{ s.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="service-grid-hint">
        <span>Deslize para ver mais</span>
        <i class="ri-arrow-right-line"></i>
      </div>
    </div>
  `
};
