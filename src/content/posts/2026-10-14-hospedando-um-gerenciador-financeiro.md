---
title: "Hospedando um gerenciador financeiro"
tldr: false
date: 2026-10-14
publishDate: 2026-10-18
draft: false
tags: ["self-hosting", "financas", "setup"]
---

# Início

A primeira pergunta a ser feita é: por que fazer algo assim se temos tantas soluções robustas disponíveis no mercado para assintura, como por exemplo o [_Visor_](https://visorfinance.app/) e o [_Pierre_](https://lp.pierre.finance/)???

Sendo bem direto ao ponto: eu odeio gastar dinheiro.

## A minha dor

De uns tempos para cá andei tentando manter meus gastos mais organizados, por mais que eu não seja uma pessoa "gastadeira" eu gosto de saber com o que eu gasto, e acho que todos têm esse desejo, certo? Portanto, comecei a me organizar financeiramente por meio de planilhas dentro do [_Google Sheets_](https://workspace.google.com/products/sheets/) -- algo bem irônico para alguém que programa dia e noite. Meio que acabou sendo a solução mais direta ao ponto e rápida de se configurar naquele momento para mim (eu obviamente utilizei da Inteligência Artificial para criar a planilha para mim... nem em [_Excel_](https://www.microsoft.com/microsoft-365/excel) eu sei mexer, pra variar).

## O gatilho

Depois de alguns meses usando planilhas, notei o trabalho descomunal que era anotar **cada uma das compras em que eu fazia**, colocando valor; origem; destinatário; se era um gasto supérfluo ou não; e eu tinha **muita** preguiça de fazer isso. Mas enfim, não era algo que me incomodava tanto assim, vida que segue, não quero arrumar mais problemas para mim.

# O mundo mágico do _self-hosting_

No dia 14/08/2026 tive um estalo na minha cabeça e lembrei de um _Thinkpad L14_ que eu havia parado de usar, estava pegando poeira em uma das minhas gavetas. Eu já havia colocado ele para rodar há algum tempo atrás como servidor, porém teve pouca utilidade para mim na época... eu não tinha nada realmente útil para hospedar dentro dele e eu tinha _preguiça_ de configurar tudo.

O _self-hosting_ é um buraco negro de possibilidades, alguns exemplos famosos de projetos _open-source_ para auto-hospedagem são: [_Bitwarden_](https://bitwarden.com/); [_Pi-hole_](https://pi-hole.net/); [_Forgejo_](https://forgejo.org/); [_Nextcloud_](https://nextcloud.com/). Nesta postagem eu não entrarei em detalhes profundos com relação as ferramentas oferecidas pela comunidade, para a comunidade; vou focar apenas nas que eu estou usando, e estão resolvendo os meus problemas.

## Paranoias que eu tinha

Um dos motivos principais que me fez estacionar o projeto do meu servidor foi a paranoia quanto aos _bots_ que varrem a internet por _IP's_ de máquinas que estão com suas portas abertas.

Você pode pensar: _"mas o número de IP's disponíveis não é absurdamente grande para varrer a internet de forma tão rápida?"_ -- e sim, você está certissimo no seu questionamento pessoa hipotética!

O _IPv4_ tem cerca de 4 bilhões de endereços. Ferramentas como o [_Masscan_](https://github.com/robertdavidgraham/masscan) e o [_ZMap_](https://zmap.io/) já são capazes de varrer a internet **inteira** para uma única porta em poucos minutos com _hardware_ e rede muito fortes, mandando tentativas de conexão via protocolo _TCP_, o servidor manda um _SYN_ para portas conhecidas (22, 3389, 6379, 5432, etc) e armazenam quem responde á essa tentativa. Com tudo mapeado entramos mais a fundo nesses _IP's_, utilizando ferramentas como o [_Nmap_](https://nmap.org/) para mapear portas internas desse _IP_ que estão abertas, verificando o _header_ exposto para saber qual versão do _software_ que está sendo usado, posteriormente buscando em bases de vulnerabilidades que existem nas versões que foram catalogadas.

A partir disso existem infinitas ramificações de possíveis ataques, com as vulnerabilidades identificadas, alguns exemplos são:

- Acesso não autorizado de _SSH_, por meio de _brute-force_;
- Bancos de dados porcamente modelados, sem distinção de acesso por perfil de usuário, comprometendo a integridade da aplicação;
- Paineis administrativos que estão mapeados via _forwarding_, na internet, e que não utilizam boas práticas de segurança, como _2FA_;
- Mineração de criptomoedas por meio de um ataque silencioso;

Todos esses problemas são mitigados com um conhecimento razoável em _cybersec_ e possíveis vetores que o atacante pode utilizar para acessar a sua aplicação. Está com medo de expôr o seu serviço na internet? Use uma _tailnet_ via [_Tailscale_](https://tailscale.com/); Tem medo de alguém ter acesso ao _RDP_ da sua máquina de maneira não autorizada? Feche a porta do _RDP_; E o meu painel de _admin_? Não coloque o _port-forwarding_, e adicione _2FA_ como uma medida física de segurança; Quer cortar toda conexão maliciosa pela raiz? Coloque um _NAT_ que só permite conexões previamente solicitadas.

# E na prática?

Bom, na prática eu limito quem pode acessar o _SSH_ ao grupo seleto que tem acesso a minha _tailnet_, dentro da _tailnet_ eu assumo o princípio de menor privilégio, ou seja, conseguiu entrar? Boa sorte, você não tem acesso a nenhum serviço dentro da _tailnet_; um _firewall_ também está colocado para restringir conexões apenas pela _tailnet_ e via _subnet_; desabilitei _login_ em _SSH_ usando senhas, e também desabilitei a possibilidade de fazer o acesso remoto como _root_.

Com tudo isso feito, posso configurar o [_Securo_](https://www.usesecuro.com/pt) rodando como um serviço dentro de uma porta no servidor. E o que é o [_Securo_](https://www.usesecuro.com/pt), afinal? É um serviço _open-source_ de gerenciamento financeiro que se conecta diretamente ao _open-finance_ via [_Pluggy_](https://meu.pluggy.ai) e pode ser hospedado localmente.

Sério, eu achei esse projeto simplesmente **incrível**, ele resolve todas as minhas dores relacionadas à organização financeira. Eu não tenho mais trabalho de subir despesas; de calcular para onde tá indo cada coisa; quanto eu gastei do meu _income_ em coisas superfuluas. Ele já faz tudo isso automaticamente, e pra melhorar, de forma gratuita. Veja por si só: [usesecuro.com](https://www.usesecuro.com/pt)

# Conclusão

Não planejo colocar muitas coisas além de um [_Securo_](https://www.usesecuro.com/pt) e um _Hermes_ rodando nesse servidor, não vejo o por quê para alocar mais coisas dentro dele, se eu ainda não tenho um caso de uso muito específico, indo bem além, creio que colocar um [_Forgejo_](https://forgejo.org/) dentro dele já está de ótimo tamanho para mim.

Viva o _software_ livre!
