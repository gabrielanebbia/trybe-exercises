## Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo
## Dia 5 - CSS Responsivo - Mobile First

Os requisitos do exercícios são:

### Parte I

#### A - Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel. (mobile first)

Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:
- [x] Faça o tamanho da fonte ser maior;
- [x] Faça o tamanho da fonte dos elementos h1 ser menor;
- [x] Aumente o espaçamento entre as figuras;
- [x] Adicione um pouco de margin na página.

#### B - Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.

Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.

Realize as seguintes tarefas:
- [x] Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px).

Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;

- [x] Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width do teste da media query.

Dentro desse breakpoint , adicione os seguintes ajustes:
- [x] Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
- [x] Ajuste o tamanho da fonte;
- [x] Ajuste as margens da página;
- [x] Faça as imagens serem mostradas em duas colunas.

#### C - Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.

- [x] Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px).

Realize os seguintes ajustes dentro do breakpoint:
- [x] Altere a cor de fundo;
- [x] Ajuste o tamanho da fonte;
- [x] Ajuste as margens da página;
- [x] Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

### Parte II

Estilize o primeiro capítulo do livro: Alice no País das Maravilhas.

Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. 

- [x] layout pequeno - até 600px
- [x] layout médio - a partir de 600px
- [x] layout grande - a partir de 1000px

### Parte III

O objetivo deste exercício é usar media queries para fazer a página parecer diferente na hora da impressão e em diferentes tamanhos de tela.

Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:

- [x] Os elementos com id header, navigation e footer devem desaparecer;
- [x] O elemento com id aside deve ser mostrado abaixo do conteúdo principal.

Adicione uma media query no arquivo CSS para quando a tela for redimensionada para larguras menores de (240x320) e (360x640).

Especificamente:
- [ ] O elemento com id aside deve desaparecer;
- [ ] O elemento body não deve ter padding;
- [ ] As imagens não devem exceder a largura da tela;
- [ ] Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;
- [ ] O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo após o usuário rolar a página.
