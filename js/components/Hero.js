import { ref, computed, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { BrandMark } from './BrandMark.js';
import { HeroCopy } from './HeroCopy.js';
import { CtaButton } from './CtaButton.js';

/**
 * Hero
 * Seção inicial em tela cheia: logo, imagem de fundo, título e CTA.
 * Orquestra o estado de loading dos três subcomponentes e a URL da
 * imagem de fundo.
 *
 * Como adicionar a imagem de fundo real:
 *   Atribua a URL a `heroImageUrl.value` (ex.: dentro de onMounted,
 *   após buscar de uma API/CMS/Supabase Storage). A variável CSS
 *   --hero-bg-image é montada automaticamente e o CSS de hero.css
 *   já cuida do cover/position/overlay.
 *
 * Uso:
 *   import { Hero } from './components/Hero.js';
 *   createApp(Hero).mount('#app');
 */
export const Hero = {
  name: 'Hero',
  components: { BrandMark, HeroCopy, CtaButton },
  setup() {
    const isLoading = ref(true);

    // Deixe '' até ter a imagem real. Quando pronta, atribua a URL
    // (ex.: '/assets/hero-banner.jpg' ou uma URL de CDN/Supabase Storage).
    const heroImageUrl = ref('/image.png');

    const heroBgStyle = computed(() => {
      return heroImageUrl.value
        ? { '--hero-bg-image': `url('${heroImageUrl.value}')` }
        : {};
    });

    function goToBooking() {
      // TODO: navegação para a tela/rota de busca de barbeiros
      console.log('Get Started clicado — plugar rota de agendamento aqui');
    }

    onMounted(() => {
      // Simula tempo de carregamento inicial (config, dados do usuário, etc.)
      // Troque por um fetch real quando o restante da página for implementado.
      setTimeout(() => { isLoading.value = false; }, 1100);
    });

    return { isLoading, heroImageUrl, heroBgStyle, goToBooking };
  },
  template: `
    <section class="hero">
      <div
        class="hero__bg"
        :class="{ 'hero__bg--empty': !heroImageUrl }"
        :style="heroBgStyle"
        role="img"
        aria-label="Cliente sendo atendido por um barbeiro"
      ></div>
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <brand-mark :loading="isLoading" />

        <div class="hero__spacer"></div>

        <hero-copy
          :loading="isLoading"
          title="Agende seu horário. Seu próximo corte está a um clique."
        />
    <p style="text-align: left; margin-left: 30px; font-size: 0.9em; color: #dfdfdf;">
      Desde 2017 💈
    </p>
        <cta-button
          :loading="isLoading"
          label=" Fazer agendamento agora"
          icon="ri-scissors-cut-line"
          @click="goToBooking"
        />
      </div>
    </section>
  `
};

export default Hero;
