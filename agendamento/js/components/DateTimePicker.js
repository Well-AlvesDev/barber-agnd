window.DateTimePicker = {
  props: ['selectedDate', 'selectedTime', 'timeSlots', 'locked'],
  emits: ['selectDate', 'selectTime', 'submitDateTime'],
  data() {
    const today = new Date();
    return {
      today,
      daysOfWeek: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
      monthsShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    };
  },
  computed: {
    availableDays() {
      const days = [];
      // Generate next 14 days
      for (let i = 0; i < 14; i++) {
        const date = new Date(this.today);
        date.setDate(date.getDate() + i);

        const isSunday = date.getDay() === 0;

        if (!isSunday) {
          days.push({
            day: date.getDate(),
            date,
            month: this.monthsShort[date.getMonth()],
            dayOfWeek: this.daysOfWeek[date.getDay()],
            isToday: date.toDateString() === this.today.toDateString(),
          });
        }
      }
      const visibleDays = days.slice(0, 5);
      visibleDays.forEach((day, index) => {
        if (index >= 3) {
          day.unavailable = true;
        }
      });
      return visibleDays;
    }
  },
  methods: {
    isSelected(day) {
      return this.selectedDate && day.date.toDateString() === this.selectedDate.toDateString();
    },
    formatDateLong(date) {
      return date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    }
  },
  template: `
    <div class="datetime-picker-wrap">
      <!-- Day Badges -->
      <div class="days-selector-title">SELECIONE O DIA E HORÁRIO:</div>
      <div class="days-badges-wrap">
        <div
          v-for="(day, i) in availableDays"
          :key="day.date.toISOString()"
          class="day-badge"
          :class="{ selected: isSelected(day), disabled: (locked && !isSelected(day)) || day.unavailable, unavailable: day.unavailable }"
          :style="{ animationDelay: (i * 0.05) + 's' }"
          @click="!locked && !day.unavailable && $emit('selectDate', day.date)"
        >
          <div class="day-badge-dow">{{ day.dayOfWeek }}</div>
          <div class="day-badge-date">{{ day.isToday ? 'Hoje' : day.day }}</div>
          <div class="day-badge-month">{{ day.month.toUpperCase() }}</div>
        </div>
      </div>
      <div class="days-badges-hint">
        <span>Deslize para ver mais</span>
        <i class="ri-arrow-right-line"></i>
      </div>

      <!-- Time Slots -->
      <div v-if="selectedDate && timeSlots.filter(s => !s.full).length > 0" class="slots-wrap">
        <div
          v-for="(s, i) in timeSlots.filter(s => !s.full)"
          :key="s.time"
          class="slot"
          :class="{ selected: selectedTime === s.time, disabled: locked && selectedTime !== s.time }"
          :style="{ animationDelay: (i * 0.04) + 's' }"
          @click="!locked && $emit('selectTime', s.time)"
        >{{ s.time }}</div>
      </div>
      <div v-if="selectedDate && timeSlots.filter(s => !s.full).length === 0" class="no-slots-message">
        Todos os horários foram ocupados nessa data
      </div>
      <div v-if="selectedDate" class="selected-choice-summary">
        <div class="selected-datetime-badge">
          <div class="badge-content">
            <span class="badge-label">Sua escolha:</span>
            <span class="badge-datetime">{{ formatDateLong(selectedDate).replace(/de /g, '') }}&nbsp;às&nbsp;{{ selectedTime || '---' }}</span>
          </div>
        </div>
      </div>
      <div v-if="selectedDate" class="datetime-submit-wrap">
        <button
          type="button"
          class="send-time-btn"
          :disabled="!selectedTime || locked"
          @click="!locked && selectedTime && $emit('submitDateTime')"
        >Enviar</button>
      </div>
    </div>
  `
};
