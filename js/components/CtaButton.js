/**
 * CtaButton
 * Botão primário reutilizável com estado de loading próprio (skeleton)
 * e estado de "enviando" ao ser clicado (spinner).
 * Não depende do Hero — pode ser usado em qualquer tela do app
 * (ex.: formulário de agendamento, confirmação de pagamento, etc.)
 *
 * Props:
 *   loading (Boolean) — skeleton inicial, antes do botão existir
 *   label   (String)  — texto do botão
 *   icon    (String)  — classe do ícone Remixicon (ex.: 'ri-scissors-cut-line')
 *   wrapClass (String) — classe do container externo (permite reposicionar
 *                        o botão fora do contexto do hero, ex.: 'form__cta-wrap')
 *
 * Eventos:
 *   @click — disparado ao clicar (não dispara novamente enquanto isSubmitting)
 *
 * Uso:
 *   import { CtaButton } from './components/CtaButton.js';
 *   <cta-button :loading="isLoading" label="Confirmar" icon="ri-check-line" @click="onConfirm" />
 */
import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';

export const CtaButton = {
  name: 'CtaButton',
  props: {
    loading: { type: Boolean, default: false },
    label: { type: String, default: 'Get Started' },
    icon: { type: String, default: 'ri-scissors-cut-line' },
    wrapClass: { type: String, default: 'hero__cta-wrap' }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const isSubmitting = ref(false);

    async function handleClick() {
      if (isSubmitting.value) return;
      isSubmitting.value = true;
      emit('click');
      // Reset ilustrativo — substitua por controle real (ex.: liberar
      // isSubmitting quando a navegação/promise da ação terminar).
      setTimeout(() => { isSubmitting.value = false; }, 2000);
    }

    return { isSubmitting, handleClick };
  },
  template: `
    <div :class="wrapClass">
      <div v-if="loading" class="skeleton skeleton--accent skeleton--pill skeleton-cta"></div>
      <button
        v-else
        class="btn-primary"
        type="button"
        :disabled="isSubmitting"
        @click="handleClick"
      >
        <span v-if="isSubmitting" class="btn-primary__spinner" aria-hidden="true"></span>
        <template v-else>
          <span>{{ label }}</span>
          <i :class="icon" aria-hidden="true"></i>
        </template>
      </button>
    </div>
  `
};

export default CtaButton;
