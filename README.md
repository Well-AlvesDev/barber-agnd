# Lukiinha Cortes

Landing page e sistema de agendamento da barbearia Lukiinha Cortes.
(Apenas o front foi construido, o back-end ainda não foi implementado.)
(ainda irei organizar a estrutura das pastas e arquivos, por enquanto ainda
está passando por um período de desenvolvimento e testes.)

## Funcionalidades

- Página inicial com apresentação da barbearia e chamada para agendamento.
- Fluxo guiado para escolher serviço, profissional, data e horário.
- Interface responsiva para desktop e dispositivos móveis.
- Componentes visuais e animações carregados com HTML, CSS e JavaScript.

## Como executar

O projeto não possui etapa de build. Para executar localmente, sirva a pasta por um servidor HTTP:

```bash
python -m http.server 8000
```

Acesse:

- `http://localhost:8000` — página inicial
- `http://localhost:8000/agendamento/` — agendamento

## Estrutura

```text
index.html              Página inicial
css/                    Estilos globais e componentes
js/                     Componentes e inicialização da página
agendamento/index.html  Página de agendamento
agendamento/css/        Estilos do agendamento
agendamento/js/         Componentes do fluxo de agendamento
agendamento/img/        Imagens dos serviços
```

## Tecnologias

HTML5, CSS3, JavaScript, Vue 3 e GSAP, com Remix Icon e Google Fonts via CDN.
