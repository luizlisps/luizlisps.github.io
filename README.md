# talkinghead

Site pessoal em Astro. O blog e os blocos de código usam Paper Mono ([releases](https://github.com/paper-design/paper-mono/releases); ligaturas, duospace e espaço estreito ativos no código; demais opções OpenType desligadas; licença em `public/fonts/paper-mono-OFL.txt`). A home exibe o aquário ASCII do [ascii.rest](https://ascii.rest/aquarium/).

## Fluxo editorial

```sh
bun install
bun run content new post
bun run content status
bun run content check
bun run content publish <post>
git push origin master
```

`new post` cria um rascunho e abre `$VISUAL` ou `$EDITOR`. Use `--no-open` para criar sem abrir o editor. O comando `publish` marca o post como publicado e define `publishDate` como hoje.

Outros tipos disponíveis: `update` e `experience`.

## Desenvolvimento

```sh
bun run dev
bun run check
bun run build
```
