---
layout: post
title: Vamos falar sobre o VIM
tags: workflow
comments: true
excerpt_separator: <!--bora-->
---

<div class="post-img-container">
	<img class="post-img" src="/assets/post-imgs/vim.png"/>
</div>

Uma das maiores pautas de discussão que encontramos nos fóruns e grupos do facebook sobre workflow em geral é quanto ao editor de texto que cada um usa. Existe uma infinidade deles e eu já usei diversos. Mas acho que encontrei o mais completo e funcional. Vamos falar um pouco sobre ele? Bora.

<!--bora-->

## Sobre editores de texto

Primeiramente, queria dizer que é essencial usar um editor de texto do seu gosto, que te deixa produtivo e que atende às suas necessidades. 

O fato é: eu já usei todos os editores do mundo, acho. Levemos em consideração que eu não gosto de IDEs. Usar Java + NetBeans foi o bastante eu entender que IDEs, apesar de nos deixar bastante produtivos nos tirando certas obrigações, elas também nos deixam mal acostumados. A IDE nada mais é que um editor de texto cheio de plugins que você quase não usa, que deixa tudo mais lento que o normal e que acaba criando uma camada a mais entre você e o código.

IDE é uma boa solução para bons programadores, que já sabem como determinada linguagem funciona e só querem se preocupar a programar, para qualquer um que queira aprender mais a fundo sobre funcionamento de algumas configurações e entendimento geral da linguagem/workflow, programar usando um editor de texto e configurando seus próprios plugins pode ser bem mais interessante. 

O primeiro editor que usei foi o sublime 2 e ele ainda está entre os meus favoritos. O ecossistema que o sublime criou foi realmente inovador e ainda hoje é um dos editores mais indicados para todos os níveis. Usei o Atom, mas no fim das contas é muito pesado pra um editor. Usei o Visual Studio code 2015, que é bem parecido com o Atom e menos pesado, mas não há tantos plugins assim. Usei o Builder, um editor da Gnome, mas ele é muito limitado ainda para desenvolvimento web. No fim das contas, pra ser bom pra mim, o editor tinha que ser leve, rápido e com um ecossistema interessante de plugins e ferramentas. Depois de tudo, decidi voltar então para o Sublime, que satisfazia todas essas características. 

Até que eu conheci o VIM.

## Uma história de amor melhor que crepúsculo

Me pareceu um tanto surreal a ideia de um editor de texto onde eu não usaria o mouse. Achei que seria terrível no começo, e talvez até tenha sido, mas a leveza, rapidez e os plugins me fizeram arriscar um pouco de tempo para me tornar produtivo nele. 

A premissa do VIM é usar o mínimo do mouse possível. Isso acaba sendo interessante porque a gente, obviamente, escreve o código com o teclado, configurar e manipular o editor com o mesmo periférico que usamos pra escrever os códigos acaba sendo uma mão na roda. Não é preciso tirar a mão do teclado e perder 2s pra selecionar aquela opção do editor, só preciso digitar um comando e dar um enter. Acredite ou não, isso faz bastante diferença.

Enfim, não vim aqui pra defender o VIM e seu uso, seus benefícios e produtividade. Vim dar umas dicas rápidas para iniciantes. Se quiser saber mais sobre o editor, dê uma lida no [texto do Marcos Brizeno](https://brizeno.wordpress.com/2014/07/24/por-que-voce-tambem-gostaria-de-utilizar-vim/) e no do [Willian Oliveira](https://woliveiras.com.br/posts/Comecando-com-o-editor-de-texto-VIM/).

## Algumas dicas pra começar

Eu perdi um dia quase todo pesquisando sobre configurações do vim, sobre plugins e sobre como deixá-lo mais user-friendly. E não me arrependo, descobri ferramentas bem interessantes que me ajudaram bastante. E como eu sou muito gente fina, vou passar as dicas pra vocês.

### Aprendendo

Existem vários meio de aprender a usar o VIM e você pode fazer isso antes ou depois de configurar ele com as próximas dicas que eu vou dar. 

O tutorial mais indicado para aprendizado é o tutorial do próprio vim, o <code>vimtutor</code>. Digite no seu terminal <code>vimtutor</code> e siga as instruções. Não é necessário fazer tudo de uma vez, como disse o [Willian Oliveira](https://woliveiras.com.br/posts/Comecando-com-o-editor-de-texto-VIM/) em seu texto que me auxiliou bastante. O mais interessante é que o <code>vimtutor</code> aborda na prática, com exercícios, o que faz o aprendizado ser bem dinâmico. 

Outra opção é pegar os comandos do VIM e ir testando na prática, que é basicamente o que o vim tutor faz, mas você terá mais liberadade pra testar e para fazer seu próprio caminho. Traduzi há um tempo atrás um pequeno guia para iniciantes e intermediários que pode ser interessante, [clique aqui](https://gist.github.com/netoguimaraes/ef6039d565dd5c8343fc) para ver.

A opção em português mais completa é um projeto do Willian Oliveira, o projeto [VIM para noobs](https://woliveiras.com.br/vimparanoobs/). Ele dá toda um embasamento para você se tornar um ninja do VIM.

### Gerando o .vimrc

É vero que para usar o VIM como editor de texto para programação não é tão simples no começo. Não é simplesmente abrir e começar a escrever os códigos que o syntax highlight já vai estar lá, a identação configurada, os snippets nem nada. O vim vem praticamente inutilizável para programar em sua versão padrão, que já vem instalada em distros Linux. Para configurá-lo, temos que editar um arquivo de configuração chamado <code>vimrc</code>. 

Se você quiser entender todas as variáveis, entender como tudo funciona no VIM e escrever seu próprio arquivo de configuração na mão, eu vou te dar total apoio. Mas eu não fiz isso. Existem ferramentas bem simples feitas para auxiliarem nós, os preguiçosos, iniciantes e espertos, a configurarmos o nosso VIM da forma mais rápida possível. Temos o [vimconfig.com](http://vimconfig.com/), que é muito simples e rápido e temos o [vim-bootstrap.com](http://vim-bootstrap.com/) que é um pouco mais completo, mas também muito simples e que dá suporte também para o NeoVim, um fork do VIM.

### Sobre os plugins do VIM

São infinitos. Sério. E são muito robustos, pois o VIM está sendo usado há 25 anos (mais velho que eu!) e tem alguns plugins com idade bem avançada, o que significa que foram maturados o suficiente pela comunidade. 

Para procurar, instalar e configurar os plugins que uso no meu editor, utilizei o site [vimawesome.com](http://vimawesome.com/), que fornece uma busca simples, sistema de tags e explicações sobre os plugins. No vim awesome também podem ser encontrados themas para o VIM, que pode ser interessante pra quem se importa com o visual. E tem muita coisa interessante lá. [Esse artigo](http://www.pinceladasdaweb.com.br/blog/2014/02/18/plugins-do-vim-para-frontend/) do Marco Bruno me deu um norte bem interessante sobre plugins para frontenders. Veja também [esse post](http://spf13.com/post/the-15-best-vim-plugins) e [esse](http://joelhooks.com/blog/2013/04/23/5-essential-vim-plugins/). 

Recomendo o plugin do [NERDTree](http://vimawesome.com/plugin/nerdtree-red) e o [vim-polyglot](http://vimawesome.com/plugin/vim-polyglot) como essencial, o resto é bem pessoal. 

O VIM é um universo gigante e tentei dar um panorama geral para iniciantes se introduzirem nesse ecossistema de forma rápida e simples para depois se aprofundar. Qualquer dúvida, nos comentários.  





