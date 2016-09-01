---
layout: post
title: Eu não sei fazer tudo com CSS
tags: frontend
comments: true
excerpt_separator: <!--bora-->
---

Um post sobre a evolução do CSS3.
<!--bora-->
Se você costuma ler bastante e acompanhar os assuntos do universo de desenvolvimento frontend, já percebeu que faz um tempo que está rolando uma moda de fazer tudo que for possível com CSS. E não digo moda no sentido pejorativo. Moda porque tem aumentado a frequência de aparições de posts, pens e exemplos de código com isso. Em alguns casos são até coisas úteis, como um menu escondido com uma transição legal ou qualquer coisa do tipo, mas outras vezes são coisas bem [fúteis](http://codepen.io/p-stacey-a/pen/ZWNryz). O  menu do meu blog eu fiz usando além de css3, um pouquinho de JavaScript, mas já vi gente fazendo só com CSS. Enfim, vamos explorar um pouco mais esse assunto?
<div class="post-img-container">
	<img class="post-img" src="http://16102-presscdn-0-48.pagely.netdna-cdn.com/wp-content/uploads/2014/12/css3_2.jpg"/>
</div>

## Porque estão fazendo tanta coisa apenas com CSS3?

Primeiro, levando em consideração o conceito de programação: <code> entrada de dados &#8594; processamento &#8594; e saída de dados</code>, podemos dizer que, ao contrário do que muitos dizem e desconstruindo gradiosos anos de conceituação, CSS3, se já não é, está virando uma linguagem de programação. Apesar de a maior parte dela ser uma linguagem visual de estilização, já temos nela recursos que implementam manipulação de dados para obtenção de determinados resultados. O exemplo mais claro disso é a função <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/calc"><code>calc()</code></a> do CSS. Podemos ver outros diversos exemplos de casos de lógica de programação aplicada dentro do CSS3, como o caso da pseudoclasse <code class="language-css"><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/:nth-child">:nth-child()</a></code> ou das [variáveis](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_variables), que ainda não estão com suporte aceitável, mas já são uma certeza para a próxima versão do CSS. Isso sem contar o poder que os preprocessadores possuem.

E queira ou não admitir que o CSS3 está dando os primeiros passos como linguagem de programação, é inegável que as funcionalidades adicionadas à linguagem na sua versão 3 dão margem pra infinitas coisas, dando enfase à: <code>flexbox</code>, <code>animation</code>, <code>transition</code> e <code>transform</code>.

E vejam que eu não estou entrando nem no mérito das mágicas que os preprocessadores conseguem fazer compilando pra CSS. Meu ponto aqui é apenas enfatizar que este mundo de coisas que dá pra fazer com a linguagem em si. E a pergunta para o subtítulo é obvia. Sabe porque estão fazendo tanta coisa apenas só com css? Porque dá pra fazer. Veja alguns exemplos:

- [Jogo feito apenas com CSS](http://codepen.io/i0z/pen/mFLCw)
- [Menu Lateral escondido](http://codepen.io/Twikito/pen/zGdqVO)
- [Barra de navegação fixa](http://codepen.io/Haru89ka/pen/jPbVWZ)
- [Diversos outros exemplos](http://codepen.io/search/pens?q=only+css&limit=all&type=type-pens)

## Dá pra fazer e eu não sei... Mas isso não quer dizer que eu não vá saber pra sempre.

Como se sabe de longa data, os estudo na área tecnológica são freneticamente incansáveis. Se você programa todo dia, todo dia vai descobrir uma coisa nova. Se você implementa layouts ou UI todo dia, sempre vai ter que ralar um pouquinho mais para fazer algum componente ter tal comportamento ou característica, por exemplo. E se você for iniciante, vai descobrir mais coisas ainda. Eu, por exemplo, descobri hoje como fazer paginação e configurar um resumo do post no <a href="https://jekyllrb.com/">Jekyll</a>, que suporta esse blog. E se você não sabe fazer tudo com CSS3, assim como eu, comece a estudar para que daqui um tempo saiba.

Acredito que com o fato de o javascript estar tomando rumos fora do clássico de manipulação de propriedades e do DOM, somando com o avanço do CSS em relação ao seu design e funcionalidades, daqui um tempo pode ser capaz implementar projetos grandes utilizando javaScript apenas para implementação de um MVW no frontend, por exemplo, e deixando o CSS tomar conta do resto. Talvez eu esteja até falando besteira, mas querendo ou não, o argumento é válido: se você não sabe como utilizar o CSS de um outro ponto de vista que não seja o padrão de 10 anos atrás, definindo seu <code>padding</code> e <code>margin</code> e apenas isso, você pode estar criando um monstro.

E eu percebi isso.

## Alimento o monstro pra que ele não me ataque ou me alimento para atacá-lo?

Eu saí de casa e comi para caralho. Comecei a estudar CSS3 mais a fundo. Comecei de leve, com <code>transitions</code> e <code>transforms</code>, depois entendi como funcionam as <code>animations</code> e ainda estou fazendo algumas experimentações para ver onde consigo chegar nisso. Depois pretendo fazer um post com o roadmap de estudo de CSS que eu estou montando, abordando algumas práticas importantes para se aprender.

É óbvio que o JavaScript é necessário, eu não estou tirando mérito de quem o usa. Ainda há coisas no frontend que só conseguem ser reproduzidas com JS e acredito que isso ainda vai demorar um pouco para mudar. Mas acontece que se desafiar a fazer mais coisas com CSS3 vai incentivar a criatividade e a resolução de problemas de um desenvolvedor infinitamente. Eu ainda uso JavaScript para muita coisa que sei que daria pra fazer apenas com CSS, se usado da maneira correta, mas na minha cabeça, a modularidade das coisas ainda funcionam no esquema: CSS estiliza e JavaScript manipula uns dados, mexe no DOM e faz a mágica. O mais difícil eu já fiz, que foi entender que isso não é exatamente assim, o resto é só questão de tempo.

 Para você que está começando a se interessar mais por CSS agora, recomendo a estudar a fundo os códigos do [CodePen](http://codepen.io), porque lá os doutores se revelam e não tem pra ninguém, caro colega. Basta a nós, reles mortais, enfiar a cara no computador e estudar pra tentar fazer o mínimo. Acho que agora que de um panorama geral, sinto-me confortável para ir atrás e experimentações concretas desse modelo OnlyCSS de fazer as coisas. Caso saia alguma coisa legal, posto um guia aqui no blog de como cheguei em tal solução, como foi a implementação e o código em si.

 Caso não chegue a nada legal é porque não fui tão a fundo nisso quanto deveria. Até, meus caros.
