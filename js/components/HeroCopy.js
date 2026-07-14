/**
 * HeroCopy
 * Bloco de título do hero. Aceita HTML simples no título (ex.: <em> para
 * destacar uma palavra), então garanta que `title` venha de uma fonte
 * confiável (não injete texto de usuário sem sanitizar).
 *
 * Props:
 *   loading (Boolean) — controla o estado de carregamento
 *   title   (String, obrigatório) — HTML do título
 *
 * Uso:
 *   import { HeroCopy } from './components/HeroCopy.js';
 *   <hero-copy :loading="isLoading" title="Seu título com <em>destaque</em>" />
 */
export const HeroCopy = {
  name: 'HeroCopy',
  props: {
    loading: { type: Boolean, default: false },
    title: { type: String, required: true }
  },
  template: `
    <div class="hero__copy">
      <template v-if="loading">
        <div class="skeleton skeleton--text" style="width: 92%;"></div>
        <div class="skeleton skeleton--text" style="width: 78%;"></div>
        <div class="skeleton skeleton--text" style="width: 60%;"></div>
      </template>
      <h1 v-else class="hero__title" v-html="title"></h1>
    </div>
  `
};

export default HeroCopy;
