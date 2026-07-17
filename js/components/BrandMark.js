/**
 * BrandMark
 * Logo (ícone de tesoura) + wordmark "Luxe Cuts".
 * Exibe skeleton enquanto `loading` for true.
 *
 * Props:
 *   loading (Boolean) — controla o estado de carregamento
 *
 * Uso:
 *   import { BrandMark } from './components/BrandMark.js';
 *   components: { BrandMark }
 *   <brand-mark :loading="isLoading" />
 */
export const BrandMark = {
  name: 'BrandMark',
  props: {
    loading: { type: Boolean, default: false },
    logoSrc: { type: String, default: '/logo.webp' },
    altText: { type: String, default: 'Lukinha Cortes' }
  },
  template: `
    <div class="topbar">
      <template v-if="loading">
        <div class="skeleton skeleton--circle topbar__mark"></div>
        <div class="skeleton skeleton--text topbar__wordmark"></div>
      </template>
      <template v-else>
        <img class="topbar__logo" :src="logoSrc" :alt="altText" />
      </template>
    </div>
  `
};

export default BrandMark;
