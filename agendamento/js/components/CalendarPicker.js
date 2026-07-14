window.CalendarPicker = {
    props: ['selectedDate', 'locked'],
    emits: ['select'],
    data() {
        const today = new Date();
        return {
            today,
            cursor: new Date(today.getFullYear(), today.getMonth(), 1),
            dows: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
        };
    },
    computed: {
        monthLabel() {
            return this.cursor.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
        },
        cells() {
            const year = this.cursor.getFullYear();
            const month = this.cursor.getMonth();
            const firstDow = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const cells = [];
            for (let i = 0; i < firstDow; i++) cells.push(null);
            for (let d = 1; d <= daysInMonth; d++) {
                const date = new Date(year, month, d);
                const isPast = date < new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
                const isSunday = date.getDay() === 0;
                cells.push({
                    day: d,
                    date,
                    disabled: isPast || isSunday,
                    isToday: date.toDateString() === this.today.toDateString(),
                });
            }
            return cells;
        }
    },
    methods: {
        isSelected(cell) {
            return cell && this.selectedDate && cell.date.toDateString() === this.selectedDate.toDateString();
        }
    },
    template: `
    <div class="calendar-wrap">
      <div class="cal-month">
        <span style="text-transform:capitalize">{{ monthLabel }}</span>
        <i class="ri-calendar-line" style="color:var(--text-faint);font-size:14px"></i>
      </div>
      <div class="cal-days">
        <div class="cal-dow" v-for="(d,i) in dows" :key="i">{{ d }}</div>
      </div>
      <div class="cal-days">
        <template v-for="(c, i) in cells" :key="i">
          <div v-if="!c"></div>
          <div
            v-else
            class="cal-cell"
            :class="{ disabled: c.disabled || (locked && !isSelected(c)), today: c.isToday, selected: isSelected(c) }"
            @click="!c.disabled && !locked && $emit('select', c.date)"
          >{{ c.day }}</div>
        </template>
      </div>
    </div>
  `
};
