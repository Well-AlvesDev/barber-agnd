import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { Hero } from './components/Hero.js';

/**
 * Ponto de entrada da aplicação.
 * Cada página do site deve ter seu próprio arquivo de bootstrap
 * (ex.: app.js para a home, search.js para a busca de barbeiros, etc.)
 * que importa apenas os componentes que precisa.
 */
createApp(Hero).mount('#app');
