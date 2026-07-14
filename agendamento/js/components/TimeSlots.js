window.TimeSlots = {
    props: ['slots', 'selectedTime', 'locked'],
    emits: ['select'],
    template: `
    <div class="slots-wrap">
      <div
        v-for="(s, i) in slots"
        :key="s.time"
        class="slot"
        :class="{ selected: selectedTime === s.time, full: s.full, disabled: locked && selectedTime !== s.time }"
        :style="{ animationDelay: (i * 0.04) + 's' }"
        @click="!s.full && !locked && $emit('select', s.time)"
      >{{ s.time }}</div>
    </div>
  `
};
