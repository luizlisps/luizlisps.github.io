---
title: "Hospedando um gerenciador financeiro"
tldr: false
date: 2026-10-14
publishDate: 2026-10-14
draft: true
---

# Início

A primeira pergunta a ser feita é: por que fazer algo assim se temos tantas soluções robustas disponíveis no mercado para assintura, como por exemplo o  [*Visor*](https://visorfinance.app/) e o [*Pierre*](https://lp.pierre.finance/)???

Sendo bem direto ao ponto: eu odeio gastar dinheiro.

## A minha dor

De uns tempos para cá andei tentando manter meus gastos mais organizados, por mais que eu não seja uma pessoa "gastadeira" eu gosto de saber com o que eu gasto, e acho que todos têm esse desejo, certo? Portanto, comecei a me organizar financeiramente por meio de planilhas dentro do [*Google Sheets*](https://workspace.google.com/products/sheets/) -- algo bem irônico para alguém que programa dia e noite. Meio que acabou sendo a solução mais direta ao ponto e rápida de se configurar naquele momento para mim (eu obviamente utilizei da Inteligência Artificial para criar a planilha para mim... nem em [*Excel*](https://www.microsoft.com/microsoft-365/excel) eu sei mexer, pra variar).

## O gatilho

Depois de alguns meses usando planilhas, notei o trabalho descomunal que era anotar **cada uma das compras em que eu fazia**, colocando valor; origem; destinatário; se era um gasto supérfluo ou não; e eu tinha **muita** preguiça de fazer isso. Mas enfim, não era algo que me incomodava tanto assim, vida que segue, não quero arrumar mais problemas para mim.

# O mundo mágico do *self-hosting*

No dia 14/08/2026 tive um estalo na minha cabeça e lembrei de um *Thinkpad L14* que eu havia parado de usar, estava pegando poeira em uma das minhas gavetas. Eu já havia colocado ele para rodar há algum tempo atrás como servidor, porém teve pouca utilidade para mim na época... eu não tinha nada realmente útil para hospedar dentro dele e eu tinha *preguiça* de configurar tudo.

O *self-hosting* é um buraco negro de possibilidades, alguns exemplos famosos de projetos *open-source* para auto-hospedagem são: [*Bitwarden*](https://bitwarden.com/); [*Pi-hole*](https://pi-hole.net/); [*Forgejo*](https://forgejo.org/); [*Nextcloud*](https://nextcloud.com/). Nesta postagem eu não entrarei em detalhes profundos com relação as ferramentas oferecidas pela comunidade, para a comunidade; vou focar apenas nas que eu estou usando, e estão resolvendo os meus problemas.

## Paranoias que eu tinha

Um dos motivos principais que me fez estacionar o projeto do meu servidor foi a paranoia quanto aos *bots* que varrem a internet por *IP's* de máquinas que estão com suas portas abertas.

Você pode pensar: *"mas o número de IP's disponíveis não é absurdamente grande para varrer a internet de forma tão rápida?"* -- e sim, você está certissimo no seu questionamento pessoa hipotética! 

O *IPv4* tem cerca de 4 bilhões de endereços. Ferramentas como o [*Masscan*](https://github.com/robertdavidgraham/masscan) e o [*ZMap*](https://zmap.io/) já são capazes de varrer a internet **inteira** para uma única porta em poucos minutos com *hardware* e rede muito fortes, mandando tentativas de conexão via protocolo *TCP*, o servidor manda um *SYN* para portas conhecidas (22, 3389, 6379, 5432, etc) e armazenam quem responde á essa tentativa. Com tudo mapeado entramos mais a fundo nesses *IP's*, utilizando ferramentas como o [*Nmap*](https://nmap.org/) para mapear portas internas desse *IP* que estão abertas, verificando o *header* exposto para saber qual versão do *software* que está sendo usado, posteriormente buscando em bases de vulnerabilidades que existem nas versões que foram catalogadas.

A partir disso existem infinitas ramificações de possíveis ataques, com as vulnerabilidades identificadas, alguns exemplos são:

- Acesso não autorizado de *SSH*, por meio de *brute-force*;
- Bancos de dados porcamente modelados, sem distinção de acesso por perfil de usuário, comprometendo a integridade da aplicação;
- Paineis administrativos que estão mapeados via *forwarding*, na internet, e que não utilizam boas práticas de segurança, como *2FA*;
- Mineração de criptomoedas por meio de um ataque silencioso;

Todos esses problemas são mitigados com um conhecimento razoável em *cybersec* e possíveis vetores que o atacante pode utilizar para acessar a sua aplicação. Está com medo de expôr o seu serviço na internet? Use uma *tailnet* via [*Tailscale*](https://tailscale.com/); Tem medo de alguém ter acesso ao *RDP* da sua máquina de maneira não autorizada? Feche a porta do *RDP*; E o meu painel de *admin*? Não coloque o *port-forwarding*, e adicione *2FA* como uma medida física de segurança.

# Na prática, como fica?




