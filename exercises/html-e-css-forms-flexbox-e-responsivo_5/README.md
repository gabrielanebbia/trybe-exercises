## Bloco 6 - HTML e CSS: Forms, Flexbox e Responsivo
### Dia 5 - CSS Responsivo - Mobile First

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre:
- Criar regras CSS específicas para serem aplicadas a dispositivos móveis.
- Construir páginas que alteram o seu layout de acordo com a orientação da tela.

Os requisitos do exercícios são:

### Parte I

#### A - Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel. (mobile first)

Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:
- [x] Faz o tamanho da fonte ser maior;
- [x] Faz o tamanho da fonte dos elementos h1 ser menor;
- [x] Aumenta o espaçamento entre as figuras;
- [x] Adiciona um pouco de margin na página.

#### B - Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.

Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.

Realize as seguintes tarefas:
- [x] Guarda a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px).

Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;

- [x] Cria uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width do teste da media query.

Dentro desse breakpoint , adicione os seguintes ajustes:
- [x] Altera a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
- [x] Ajusta o tamanho da fonte;
- [x] Ajusta as margens da página;
- [x] Faz as imagens serem mostradas em duas colunas.

#### C - Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.

- [x] Cria uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px).

Realize os seguintes ajustes dentro do breakpoint:
- [x] Altera a cor de fundo;
- [x] Ajusta o tamanho da fonte;
- [x] Ajusta as margens da página;
- [x] Adiciona a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

### Parte II

Estilize o primeiro capítulo do livro: Alice no País das Maravilhas.

Utilizando a abordagem mobile first e media queries, cria três versões de layout diferentes para essa página. 

- [x] layout pequeno - até 600px
- [x] layout médio - a partir de 600px
- [x] layout grande - a partir de 1000px

### Parte III

O objetivo deste exercício é usar media queries para fazer a página parecer diferente na hora da impressão e em diferentes tamanhos de tela.

Adiciona uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:

- [x] Os elementos com id header, navigation e footer desaparecem;
- [x] O elemento com id aside é mostrado abaixo do conteúdo principal.

Adiciona uma media query no arquivo CSS para quando a tela for redimensionada para larguras de tela pequena(240x320) e tela de smartphone(360x640).

Especificamente:
- [x] O elemento com id aside desaparece;
- [x] O elemento body não tem padding;
- [x] As imagens não excedem a largura da tela;
- [x] Os itens dentro do elemento navigation aparecem cada um em sua própria linha;
- [x] O elemento com id header é fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo após o usuário rolar a página.
