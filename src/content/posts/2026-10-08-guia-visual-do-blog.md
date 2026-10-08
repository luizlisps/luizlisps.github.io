---
title: "Guia visual do blog"
description: "Rascunho para visualizar os elementos editoriais do blog."
tldr: true
date: 2026-10-08
publishDate: 2026-10-08
draft: true
tags: ["exemplo", "visual"]
---

# Texto e formatação

Este rascunho demonstra os componentes editoriais do blog: **ênfase**, *itálico*, `código em linha` e um [link externo](https://github.com/ttusk/dotfiles).

## Citação

> “Uma interface terminal prioriza conteúdo, contraste e sinais visuais com intenção.”
>
> — Citação de demonstração

## Listas

Itens sem ordenação usam asteriscos:

- primeiro item
- segundo item
  - item aninhado

Itens ordenados mantêm números:

1. primeiro passo
2. segundo passo

## Tabela de cores

| Papel | Cor | Uso |
| --- | --- | --- |
| Fundo | `#ffffff` | Superfície principal |
| Texto | `#000000` | Texto e contraste |
| Link | `#0000ee` | Navegação e referências |

## Bloco de código

```ts
const palette = {
  background: "#ffffff",
  foreground: "#000000",
  link: "#0000ee",
} as const;
const hasDefaultLink = (color: string) => color === palette.link;
```

## Imagem, legenda e GIF em linha

![Tela de setup em Paper Mono](../../assets/img/setup-screenshot.png)

GIF em linha: ![gif: demonstração](../../assets/img/cowboy-bebop-arrival.gif)

## Fórmula

A identidade de Pitágoras pode ser escrita em linha: $a^2 + b^2 = c^2$.

$$
a^2 + b^2 = c^2
$$

---

O post fica como rascunho para inspeção local; ele não entra na publicação estática.