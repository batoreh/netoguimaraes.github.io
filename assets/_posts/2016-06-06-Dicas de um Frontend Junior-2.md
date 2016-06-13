---
layout: post
title: Dicas de um frontend junior 2
tags: dicas, frontend
comments: true
excerpt_separator: <!--bora-->
---

<div class="post-img-container">
	<img class="post-img" src="http://2chie424y5ug2kfkkypuhcvwq2.wpengine.netdna-cdn.com/files/2014/05/wip1.jpg">
</div>

Há uns dias escrevi um post em que eu, desenvolvedor júnior, dava umas dicas sobre a área de frontend que aprendi na prática nos últimos meses trabalhando em uma startup que envolve tecnologia e educação. Acredito que aprendi bastante coisa com esse período de prática, porque apesar de ser um ambiente interessante e estimulante, eu trabalho basicamente sozinho e quando você trabalha sozinho e tem que se virar pra sanar suas dúvidas, pra criar um workflow decente e ainda fazer um pouco de Design, UX e tudo mais, no mínimo você vai aprender algumas coisas.
<!--bora-->
Então aqui vai mais algumas dicas que tenho para os amigos iniciantes na área. 

## Não tenha medo de desenvolver as coisas

Meu esquema de trabalho é sempre o seguinte: o designer faz uma proposta de layout e eu vou implementando e conversando com ele sobre algumas melhorias para o ecossistema web. No começo apareceram algumas coisas que eu não tinha a mínima ideia de como ia fazer, mas eu sempre disse que dava pra implementar todas as propostas dadas por ele. E porque eu disse isso? Porque quando alguém pergunta se a gente sabe fazer algo e nos dá um prazo pra responder, a melhor alternativa é responder que sim e se não sabe, aprender a fazer da melhor forma possível. E foi o que eu sempre fiz. E isso foi um ótima estratégia, porque eu aprendi diversas coisas que eu não aprenderia se tivesse dito apenas pra ele exportar os assets todos e fizesse um site cheio de imagens. O que nos leva pra nossa próxima dica.

## Use o mínimo de assets possíveis

Assets são, em suma, arquivos que utilizamos para complementar nossas páginas webs, como imagens, arquivos de fontes e folhas de estilo. É óbvio que você não vai se limitar a usar 2 ou 3 imagens no site se o site for um galeria de imagens. Aqui falo de um conceito de design utilizado no frontend tanto para melhorar a performace do projeto quanto para melhorar as habilidades de estilização com CSS. O conceito de design que quero introduzir é o de "não use mais do que o necessário". Se eu for procurar, vou achar o nome do autor que fala sobre isso, mas agora não é o foco. Apenas guarde na cabeça "não use mais do que o necessário". 

Sabe quando você usa uma imagem no logo quando podia utilizar uma heading tag ou quando poderia usar um ícone daquela lib que você importou ao invés de usar uma imagem como ícone do facebook? Pois é. Esteja sempre pensando "será que isso é realmente necessário?", pois às vezes enchemos nosso projeto de coisas que na prática são inúteis ou poderiam ser substituídas por outras. Às vezes demoramos um pouco mais para chegar num determinado efeito visual com CSS que poderia ser resolvido apenas com a utilização de uma imagem na página, mas será que seria a solução mais ideal mesmo?

Nos últimos tempos, animações, transitions, [box-shadow](http://codepen.io/MarioSkynex/pen/MeYJGR), Canvas e [SVG](http://willianjusten.com.br/por-que-usar-svg/) são tecnologias que têm sido muito utilizadas para criação de designs muito eficientes e bonitos. Pode ser uma boa estudar isso um pouco mais a fundo se te interessa a área de design também, além de frontend.

## Desenvolva um starter

Sabe quando você tem que começar algum projeto novo e fica criando os arquivos e nomeando e modularizando em pastas e perdendo tempo fazendo algo que não soma nada no teu aprendizado? Pois é, você precisa ser mais preguiçoso. É aquela velha história de que todo programador é um preguiçoso, mas preguiçoso o suficiente pra escrever um starter que faça tudo isso pra você. 
 
Existem diversos jeitos de fazer isso. O mais simples, ao meu ver, é usando o npm. Você cria um projeto com todos os arquivos iniciais criados, gera um pacote do npm e publica ele. Quando quiser utilizá-lo é só chamar pelo próprio npm. Outra forma é criando no github um repositório e baixando ou clonando sempre que quiser começar um novo projeto, mas .git deverá ser apagado sempre que iniciado um novo projeto, caso se queira usar o git para versionar o novo projeto. Pode ser feito também através de um script do bash, caso você seja familirizado com shellscript e linux. O que importa é automatizar esse processo.

Você pode também utilizar um starter já desenvolvido. Existem vários por aí, alguns frameworks já até fornecem os seus, como o ionic. Você também pode utilizar ferramentas como o [Yeoman](http://yeoman.io/), o importante é não perder tempo criando tudo na mão.

## Desenvolva um framework

Este é um tópico que eu ainda não botei em prática por falta de tempo, mas que pretendo no futuro aplicar. Criar um framework não quer dizer criar um Angular ou React da vida, mas sim algo como o [skeleton](http://getskeleton.com/) ou o [Pure](http://purecss.io/). Peguei essa dica com o [cjpatolio](https://github.com/cjpatoilo), desenvolvedor do [Milligram](http://milligram.github.io/); 

Em um tópico do fórum [FrontendBR](https://github.com/frontendbr/forum/issues/164) sobre projetos open source, o autor falou sobre como o desenvolvimento desse framework foi interessante para o aprendizado dele. Acredito que é interessante porque quando se propõe desenvolver algo para outros desenvolvedores, seu cuidado tem que ser redobrado para escrever código legível, reutilizável e funcional. E se não escrever, a comunidade vai criticar até que ele fique bom o suficiente. 

Um exemplo disso é esse blog, que recebo algumas críticas de vez em quando e acabo sempre melhorando uma coisinha aqui e outra ali, tanto no conteúdo como no layout. 

Essas foram mais algumas dicas de um desenvolvedor frontend júnior. Críticas e sugestões nos comentários. Até a próxima.

