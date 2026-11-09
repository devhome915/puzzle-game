# Jogo de quebra-cabeça

Um jogo de quebra-cabeça deslizante (15-puzzle) feito com React, TypeScript e Vite. O tabuleiro tem 4 × 4 casas: 15 peças numeradas e um espaço vazio. O objetivo é reorganizar as peças em ordem crescente, deixando o espaço vazio no canto inferior direito.

Jogue online: [devhome915.github.io/puzzle-game](https://devhome915.github.io/puzzle-game/).

## Requisitos

- Node.js 20.19+ ou 22.12+ (necessário para a versão do Vite usada pelo projeto).
- npm, incluído nas instalações do Node.js.

## Como executar

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/devhome915/puzzle-game.git
   cd puzzle-game
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço local mostrado pelo Vite no terminal (normalmente `http://localhost:5173`).

O servidor atualiza a página automaticamente quando os arquivos do projeto são alterados.

## Como jogar

1. Clique em **Embaralhar peças** para iniciar uma partida. O botão mistura o tabuleiro por meio de movimentos legais, mantendo uma solução possível.
2. Clique em uma peça que esteja imediatamente acima, abaixo, à esquerda ou à direita do espaço vazio para movê-la para esse espaço.
3. Peças que não estejam ao lado do espaço vazio não se movem.
4. Organize as peças de `1` a `15`, da esquerda para a direita e de cima para baixo, deixando o espaço vazio na última casa.
5. Ao completar a sequência, a mensagem **“Parabéns! Você resolveu o quebra-cabeça!”** aparece. Clique em **Embaralhar peças** para jogar novamente.

## Comandos disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # verifica os tipos TypeScript e gera a versão de produção em dist/
npm run preview  # serve localmente a versão de produção gerada
npm run lint     # executa o Oxlint
```

## Tecnologias

- React e React DOM
- TypeScript
- Vite
- Oxlint
