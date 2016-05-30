---
layout: post
title: .css-comentado 01 - Thumbnail com botão oculto
tags: frontend, css
comments: true
excerpt_separator: <!--bora-->
---
<div class="post-img-container">
	<img class="post-img" src="/assets/comment.png"/>
</div>
Ao longo dos meus estudos, foi notável a grande quantidade de tutoriais com códigos prontos que achei pela internet. Eles sempre nos dão a solução para o problema, porém, nunca te explicam direito o porquê de tais soluções. Então decidi fazer uma série de tutoriais que além de terem o código, acompanham uma explicação um pouco mais detalhada sobre as soluções adotadas. Não sei se esse formato de tutorial é bem aceito, mas aqui fica minha proposta. Hoje falaremos sobre thumbnails com botões ocultos.
<!--bora-->

Aqui temos o nosso exemplo funcionando com o código completo:

<p data-height="400" data-theme-id="0" data-slug-hash="MeWvme" data-default-tab="css,result" data-user="netoguimaraes" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/netoguimaraes/pen/MeWvme/">MeWvme</a> by João Neto Guimarães (<a href="http://codepen.io/netoguimaraes">@netoguimaraes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Para quem já entende de CSS consideravelmente, o exemplo no codepen já basta para o entendimento do efeito. Mas meu foco aqui é justamente quem tem certa dificuldade com a implementação e quem não entende exatamente o que está acontecendo no código.

Vamos dissecar as coisas melhor aqui. 

## Estruturando as coisas

Se você sabe exatamente o que quer fazer e como vai fazer, a melhor coisa pra começar a construção de qualquer elemento é escrever todo o código HTML que você irá precisar. É comum ir escrevendo o HTML de acordo com as necessidades, mas sempre que possível é interessante escrever o HTML todo de uma só vez para dividirmos melhor as coisas, mas isso vai de cada um. Então eu escrevi o seguinte código: 

<pre>
	<code class="language-markup">
		&lt;a href=&quot;#&quot; class=&quot;container&quot;&gt;
		  &lt;img class=&quot;container-img&quot; src=&quot;https://static.pexels.com/photos/6413/people-eyes-playing-young.jpg&quot; alt=&quot;a boy with a ball&quot;/&gt;
		  &lt;span class=&quot;hidden-link&quot; &gt;Bot&atilde;o&lt;/span&gt;
		&lt;/a&gt;
	</code>
</pre>

Um código simples. Uma <code>a</code> com uma <code>img</code> e um <code>span</code>, que simula um botão, inseridos nela. O elemento <code>&lt;a href=&quot;#&quot; class=&quot;container&quot;&gt;</code> funcionará como um elemento de bloco aqui, como uma <code>div</code>. Usamos ele ao invés de uma <code>div</code> para que todo o corpo do container funcione como um link clicável, auxiliando assim a acessibilidade.

Perceba que o nome da classe do botão já indica uma das funcionalidades que teremos que implementar: a sua invisibilidade. Há várias formas de implementar invisibilidade com CSS3. A primeira é declarando a opacidade com o valor 0 (<code>opacity: 0;</code>). Dessa forma, o elemento não irá aparecer, porém continuará ocupando espaço na página, apesar dele não estar visível, ele continua lá. Essa solução é praticamente igual a declarar a visibilidade igual a "escondido" (<code>visibily: hidden;</code>), vamos entender suas diferenças no fim do artigo. Uma outra solução é definir <code>display: none;</code>. Ao contrário das duas primeiras, nessa solução o elemento some por completo do documento, seu epaço é tomado pelos outros elementos, dependendo das configurações do layout. Mais à frente iremos entender qual dessas é a melhor solução para tornar o botão inicialmente invisível.

## Estilizando as coisas 

As primeiras coisas que escreveremos no nosso CSS serão as estilizações simples dos elementos que temos no nosso HTML. Segue o código: 

<pre>
	<code class="language-css">
		.container{
		  position: relative;
		  height: 400px;
		  width: 400px;
		  overflow: hidden;
		  border: 1px solid black;
		}
		.container-img{
		  height: 100%;
		  width: auto;
		}
		.hidden-pseudobutton{
		  display: block;
		  position: absolute;
		  width: 150px;
		  height: 50px;
		  top: 50%;
		  left: 50%;
		  margin: -25px 0px 0px -75px;
		  padding: 10px 50px;
		  opacity: 0;
		  background-color: #008cc4;
		  border: none;
		  border-radius: 30px;
		  font-size: 1.3em;
		  color: white;
		  cursor: pointer;
		}
	</code>
</pre>

Primeiro temos a estilização do nosso <code>container</code> primário, que terá a imagem inserida dentro dele. O <code>position: relative;</code> é opcional, depende de como será construído o layout, apenas por exemplo eu o coloquei aqui. Defini suas e medidas de altura e largura e defini <code>overflow: hidden;</code> que vai garantir que mesmo que a imagem tenha altura ou largura maior que o container, ela não ultrapassará as medidas do container e será clipada. Adicionei também uma borda apenas para melhor vizualização dos limites do container.

Depois temos o seletor que estiliza a <code>img</code>. Aqui temos que a altura será de 100%, ou seja, sempre a imagem ocupará toda a altura do container pai, porém a largura vai variar automaticamente, com a propriedade <code>auto</code> no seletor <code>width</code>. Pra que isso serve? Para que a imagem não fique distorcida. Ela ocupará toda a altura, mas a largura se ajustará de acordo com a proporção da mesma. Essa dica é valiosa porque funciona independente da altura do container. 

Logo depois temos a estilização do pseudobotão. Estilizações de itens como botões, links e inputs são estilizações em geral longas, pois seus estilos padrões são muito distantes do que consideramos hoje em dia algo agradável e harmônico. O seguinte código é um jeito de centralizar elementos com <code>position: absolute;</code> e pode ser usado em diversos casos. 
<pre>
	<code class="language-css">
		display: block;
		position: absolute;
		width: 150px;
		height: 50px;
		top: 50%;
		left: 50%;
		margin: -25px 0px 0px -75px; 
		/* -------------------------------------------------------------*/
		/* Centralizando elemento absoluto vertical e horizontalmente	*/
		/* margin-top = -(altura do elemento/2)px 						*/
		/* margin-top = -(150/2)px -> margin do top = -75px 			*/
		/* margin-left = -(largura do elemento/2)px 					*/
		/* margin-left = -(50/2)px -> margin do top = -25px 			*/
	</code>
</pre>

O que acontece é: as propriedades <code>top</code> e <code>left</code> com valores iguais a <code>50%</code> fazem com que o elemento comece a ser apresentado exatamente no meio do container e dependendo da altura e largura, cresça para baixo e para a direita. Se pegarmos os valores exatos da metade da largura do elemento e adcionarmos a uma margem negativa para a esquerda, temos esse elemento centralizado na horizontal. Se pegarmos o valor exato da altura e adicionarmos à margem negativa do topo, teremos esse elemento centralizado na vertical, logo, o elemento está posicionado exatamente no centro do container. 
O resto das estilizações são puramente estíticas e não vou entrar em detalhes aqui. 

## Criando as transições

Bem, agora que temos nossos elementos devidamente estilizados, precisamos dar vida ao nosso componente. Precisamos que ao passar o mouse em cima do container, haja um desfoque na imagem, uma leve rotação nela e também que apareça o pseudobotão, que na verdade é um link. Vamos iniciar a implementação pelo efeito que a imagem vai ter quando o mouse passar em cima do container.

O código é este:
<pre>
	<code class="language-css">
		.container:hover > .container-img{
		  transition: 1s ease-in-out; 
		  transform: scale(1.2,1.2) rotate(5deg);
		  -webkit-filter: blur(10px);
		  filter: blur(10px);
		}
	</code>
</pre>

Agora vamos entender melhor. O efeito que queremos denota basicamente um <code>if (mouse.hover(container)){show.(button)}</code>. Podíamos fazer isso com JavaScript, mas dá pra fazer com CSS, <a href="http://blog.netoguimaraes.com.br/2016/05/26/Eu-nao-sei-fazer-tudo-com-css.html">então vamos fazer com CSS</a>. Para implementarmos isso, precisamos entender o funcionamento do seletor <code>></code>. Sua função é obter os elementos filhos de um seletor pai. No nosso caso, <code>.container</code> é o pai e <code>.container-img</code> é o filho. A mágica aqui acontece o adicionarmos a pseudoclasse <code>:hover</code> ao seletor pai. Isso indica que o seletor filho só será agraciado com as propriedades do bloco de código quando o elemento pai estiver com o mouse em cima de si. Portanto, o código mostrado acima é nada mais nada menos do que uma abstração de um <code>if</code>. "Se o mouse estiver em cima do container pai, faça com que o filho tenha essas propriedades que eu vou dar". E magicamente, sem nenhum código JavaScript, temos um "<code>if</code>" implementado e nosso componente quase pronto.

Falando do efeito em si, nada mais é do que um zoom, uma rotação e um desfoque, respectivamente <code>scale(1.2,1.2) </code>, <code>rotate(5deg)</code> e <code>filter: blur(10px);</code>. É importante perceber que estes efeitos não vão se comportar da mesma forma nos diversos navegadores, por isso é importante a adição de todos os prefixos, se você quiser que funcione em todos os browsers da forma correta. Para saber mais sobre suporte entre os browsers, acesse sempre <a href="http://caniuse.com/#feat=css-filters">este site</a> e pesquise a determinada propriedade que você quer usar. Como o <code>filter</code> é suportado pela grande maioria dos browsers atualizados, não vou me importar tanto com a compatibilidade, mas no futuro pretendo escrever um texto sobre isso e sobre como esse tema afeta nossa produção.

Para fazermos com que o botão apareça sob as mesmas circunstâncias do efeito da foto, adicionamos o seguinte código:

<pre>
	<code class="language-css">
	.container:hover > .hidden-pseudobutton{
	  opacity: 1;
	}
	</code>
</pre>

Agora temos o efeito acontecendo, porém de forma instantânea. Para que o efeito ocorra de forma gradual e harmônica, temos que adicionar a propriedade <code>transition</code> em cada um dos elementos que vão fazer parte da animação, com seus determinados valores e aí teremos nosso código finalizado. Veja abaixo como ficou o código e o exemplo final:

<p data-height="265" data-theme-id="0" data-slug-hash="MeWvme" data-default-tab="css,result" data-user="netoguimaraes" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/netoguimaraes/pen/MeWvme/">MeWvme</a> by João Neto Guimarães (<a href="http://codepen.io/netoguimaraes">@netoguimaraes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


Aqui entendemos porque utilizamos o método da opacidade para fazer o elemento sumir e desaparecer. Para utilizarmos transições, precisamos tratar com propriedades animáveis. Das 3 que poderíamos usar, apenas a <code>visibility</code> e a <code>opacity</code> são animáveis, porém a opacity possui valores numerais, logo sua animação é mais fluida e pode ser mais manipulada. Para conseguirmos o efeito de fadeIn, apenas usando ela seria possível. 

# Considerações Finais
Esse exemplo que fiz pode ser útil em casos onde a imagem é o mais importante e o link relacionado a ela esteja em segundo plano. Usei algo parecido na construção do meu portifólio, por exemplo. Pode ser útil em galerias de imagens e thumbnails de vídeos.

Se você chegou até aqui e aprendeu algo novo, indique esse texto para alguém que possivelmente também aprenderá algo novo. Não falo isso por querer ganhar mais visualizações e nem nada, até porque meu blog não é monetizado. Quero apenas que este conhecimento que passei possa chegar a mais lugares. Qualquer dúvida ou sugestão deixem nos comentários que eu respondo assim que possível. Não sei se esse modelo de postagem é interessante ou não, na verdade, mas fiz o primeiro para testar, ficaria feliz com seu feedback.  

