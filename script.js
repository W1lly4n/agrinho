// Navegação entre páginas/abas
const paginas = document.querySelectorAll('.pagina');
const botoesMenu = document.querySelectorAll('[data-pagina]');

function abrirPagina(id) {
  paginas.forEach((pagina) => {
    pagina.style.display = 'none';
  });

  const paginaAtiva = document.getElementById(id);

  if (paginaAtiva) {
    paginaAtiva.style.display = 'block';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

botoesMenu.forEach((botao) => {
  botao.addEventListener('click', () => {
    const pagina = botao.getAttribute('data-pagina');
    abrirPagina(pagina);
  });
});

// Página inicial
window.addEventListener('load', () => {
  abrirPagina('home');
});

// Cards dinâmicos
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  });
});

const criarBotao = (texto) => {
  const botao = document.createElement('button');

  botao.innerText = texto;
  botao.classList.add('botao');

  botao.style.marginTop = '15px';
  botao.style.padding = '10px 18px';
  botao.style.border = 'none';
  botao.style.borderRadius = '10px';
  botao.style.background = '#111';
  botao.style.color = '#fff';
  botao.style.cursor = 'pointer';
  botao.style.transition = '0.3s';

  botao.addEventListener('mouseenter', () => {
    botao.style.background = '#333';
    botao.style.transform = 'scale(1.05)';
  });

  botao.addEventListener('mouseleave', () => {
    botao.style.background = '#111';
    botao.style.transform = 'scale(1)';
  });

  botao.addEventListener('click', () => {
    const titulo = card.querySelector('h2')?.innerText || texto;

    const novaAba = window.open('', '_blank');

    novaAba.document.write(`
      <html>
        <head>
          <title>${titulo}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #f4f4f4;
              padding: 40px;
              color: #222;
            }

            .container {
              max-width: 900px;
              margin: auto;
              background: white;
              padding: 30px;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }

            h1 {
              margin-bottom: 20px;
            }

            p {
              line-height: 1.8;
              color: #555;
            }

            button {
              margin-top: 20px;
              padding: 12px 20px;
              border: none;
              border-radius: 10px;
              background: #111;
              color: white;
              cursor: pointer;
            }
          </style>
        </head>

        <body>
          <div class="container">
            <h1>${titulo}</h1>

            <p>
              Esta é uma página específica criada dinamicamente para o tema selecionado.
              Aqui você pode adicionar textos, imagens, galerias, vídeos, formulários e qualquer conteúdo.
            </p>

            <button onclick="window.close()">Fechar Aba</button>
          </div>
        </body>
      </html>
    `);
  });

  return botao;
};

cards.forEach((card, index) => {
  const conteudo = card.querySelector('.conteudo');
  const botao = criarBotao(`Ver Mais ${index + 1}`);
  conteudo.appendChild(botao);
});
