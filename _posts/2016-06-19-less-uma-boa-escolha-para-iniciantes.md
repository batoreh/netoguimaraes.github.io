---
layout: post
title: "LESS: uma boa escolha para iniciantes"
tags: workflow, css, less
comments: true
excerpt_separator: <!--bora-->
---
<div class="post-img-container">
	<img class="post-img" src="http://webdesignledger.com/wp-content/uploads/2015/08/less_css.png"/>
</div>
"Menos é mais" 

Essa é uma frase bastante usada em diversas áreas, prega a ideia de que a economia de recursos é algo beneficente para o produto final. É usado na área do design, por exemplo, para cortar recursos visuais usados desnecessariamente que no fim das contas apenas prejudicam a experiência do usuário. Acredito que com o preprocessadores não é diferente e é por isso que eu uso e defendo o LESS.

## O que é um preprocessador de CSS?

Um preprocessador funciona como uma extensão do CSS comum que temos hoje em sua versão 3. O preprocessador é uma espécie de "compilador" que gera código CSS de acordo com um código escrito por nós em uma linguagem que possui diversas funcionalidades a mais que o próprio CSS. No fim das contas, há gente que defenda o uso do CSS puro, mas em projetos grandes, o uso de preprocessadores torna-se uma mão na roda. Vejam mais nesse artigo sobre o [CSS do Github](http://markdotto.com/2014/07/23/githubs-css/) e sobre o CSS do [Lonely Planet](http://ianfeather.co.uk/css-at-lonely-planet/).

Temos alguns preprocessadores disponíveis para conhecermos e usarmos da forma que acharmos melhor. Costumo dizer que é só questão de gosto a escolha de um deles, mas ao longo do tempo, percebi no LESS algumas características que o fazem ser bastante interessante como primeiro contato de um Frontender Junior no universo dos preprocessadores. Vamos falar um pouco sobre os motivos disso.

## Porque eu uso LESS

Quando quis começar a usar preprocessadores, pesquisei bastante e me dei conta que no geral, preprocessadores eram todos iguais e que a minha escolha não iria fazer tanta diferença assim, então escolhi o LESS porque achei a **documentação dele bem mais sucinta e objetiva** que a do Stylus e do SASS, outros dois preprocessadores em questão na época. Então parti na jornada e passei a usar o LESS em projetos menores para ir me adaptando, pois supostamente era um jeito novo de fazer as coisas. Mas para a minha surpresa, a curva de aprendizado foi bem curta. Apenas precisei entender quando era bom ou não usar tal funcionalidade. 

Em menos de dois projetos eu já estava escrevendo na sintaxe do LESS com a mesma produtividade que escrevia CSS. Mas isso só foi assim por causa da sintaxe do LESS ser como é.

## Sintaxe

O LESS não te faz criar novos costumes quanto à sintaxe e ele só possui uma sintaxe. Muitos podem defender o Stylus e a sintaxa SCSS por ela agilizar o processo sem ter que escrever as chaves, os dois pontos ou os ponto e vírgula. Mas o ponto que ponho aqui é: haverão casos onde não será possível ou interessante o uso de preprocessadores e você não poderá controlar isso sempre. Então, vez ou outra você vai ser obrigado a escrever CSS puro. E quando isso acontecer, quanto mais distante for a sintaxe que você usa no seu preprocessador da sintaxe original do CSS puro, mais fácil e produtivo vai ser você escrever código sem preprocessador. 

No começo do projeto do SASS, a sintaxe era muito diferente de CSS puro. A sintaxe que hoje é conhecida pelo próprio nome SASS, é identada, sem a presença de dois pontos, ponto e vírgula ou chaves. O LESS surgiu logo depois como opção para quem queria algo mais próximo do CSS. Com o surgimento do LESS, o time do SASS percebeu o quão louco era o fato de eles terem alterado a sintaxe do CSS em seu preprocessador que eles criaram uma nova sintaxe, a SCSS, que permite você escrever código mais próximo da sintaxe original do CSS e ainda assim ter as funcionalidades do preprocessador. 

O único argumento a favor de uma sintaxe identada como a SASS ou a do Stylus é o fator produtividade. Supostamente, você se torna mais produtivo se não escrever ponto e vírgulas, chaves e dois ponto, mas isso vai por água a baixo com o artifício dos snippets e atalhos dos editores de texto. Eu por exemplo nem escrevo as palavras completas dos atributos. Quando quero adicionar um <code>padding</code>, digito <code>pa</code> e o snippet já completa, quanto mais em relação à pontos chaves e outros símbolos sintáticos...

## LESS usa JavaScript

O Stylus também usa. Mas porque isso pode ser bom pra iniciantes? Porque JavaScript é algo praticamente obrigatório para qualquer um que queira mexer com web, ruby apesar de ser uma ótima linguagem em diversos aspectos, não é tão próxima assim dos iniciantes. O SASS usa a linguagem ruby e seu gerenciador de pacotes como padrão. Não questiono aqui a qualidade da linguagem ou seu gerenciador de pacotes, mas é inegável que hoje em dia, há muito mais frameworks e ferramentas para frontenders usando o <code>npm</code> como gerenciador de pacotes. Isso ajuda a organizar melhor e nos faz não entrar num ecossistema novo apenas para usar um preprocessador. 

Eu sei que há pacotes do SASS para <code>npm</code> também e para diversos outros pacotes, mas na documentação oficial, é recomendado o uso do GEM para instalar o SASS e acredito que o suporte oficial também é priorizado para a versão do GEM. 

## Uso do lado do cliente

Iniciantes em computação têm medo de CLIs. Isso é um fato inegável. E no universo frontend não é diferente. Usar um terminal pode ser um saco para iniciantes, esquecer uma opção ou um parâmetro pode gerar um resultado não esperado e frustrar muito facilmente o iniciante, portanto, CLIs nem sempre são boas opções.

Esse medo, é claro, tem que ser perdido o mais rápido possível. Automatizadores de tarefas como Gulp e Grunt (ou outros) são essenciais para um workflow produtivo. Mas para os casos em que realmente há uma aversão ao terminal, o LESS traz uma opção que nenhum dos outros preprocessadores trazem: o uso do LESS do lado do cliente.

Basicamente, ele compila os arquivos less "on-the-fly", do lado do cliente, no browser mesmo, usando JavaScript. Basta você seguir as [instruções](http://lesscss.org/#client-side-usage) que essa funcionalidade pode ser facilmente alcançada. É bom deixar claro que o us dessa funcionalidade não é nada interessante para projetos reais em produção, pois um simples JavaScript desativado pode acabar com seus estilos, sem falar que prejudica um tanto a performace da página. Mas é uma boa pedida para aprendizado com projetos locais, facilita bastante as coisas no começo, caso queira testar o LESS sem ter muito trabalho.

<hr>

Qualquer dúvida nos comentários. Se gostou do post, ajude a divulgar o blog, faço ele apenas por amor, sem monetização nenhuma, então quanto mais longe chegar, mais "bem pago" eu serei &hearts;. 