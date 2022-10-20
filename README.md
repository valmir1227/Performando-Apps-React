# ===Fluxos de Renderização no React===

## Pai para filho

tsx`
<Pai>
   <Filho/>
<Pai/>`

- Sempre que o componente pai tiver uma nova renderização, o coponente filho automaticamente vai ser renderizado novamente.

## Propriedade

tsx`
<Pai>
   <Filho title="title"/>
<Pai/>

`
Quando haver mudanças em alguma propriedade 

## HOOKs (useState, useContext, useReducer)

Mudanças nos hooks causam uma nova renderização

tsx`
function Component() {
	const [estado, setEstado] = useState()
}
`

## Fluxo de renderização
1. Gerar uma nova versão do componente que precisa ser renderizado;
2. Comparar essa nova versão com a versão anteriror já salva na página;
3. Se houverem alterações, o React "renderiza" essa nova versão em tela;

## MEMO

 <strong>
 <a href="https://pt-br.reactjs.org/docs/react-api.html">React.memo</a></strong> verifica apenas as alterações de prop. Se o seu componente de função envolvido em React.memo tiver um useState, useReducer ou useContext Hook em sua implementação, ele ainda será renderizado quando o estado ou o contexto mudar.


igualdade referêncial

tsx`
Object.is()
`

Object.is() determina se dois valores correspondem ao mesmo valor. Dois valores correspondem ao mesmo valor se uma das seguintes condições for verdadeira:

- ambos são undefined
- ambos são null
- ambos são true ou ambos são false
- ambos são strings do mesmo comprimento, com os mesmos caracteres
- ambos são o mesmo objeto
- ambos são numéricos e
- ambos são +0
- ambos são -0
- ambos são NaN
- ou ambos são não-zero e ambos são não NaN e ambos correspondem ao mesmo valor

## UseMemo

O useMemoHook pode ser usado para impedir x  que funções caras e intensivas em recursos sejam executadas desnecessariamente.

## UseCallback

Um motivo para usar useCallback é evitar que um componente seja renderizado novamente, a menos que suas props sejam alteradas.

## !

- Não faça cálculos no momento da renderização.

## Code splitting 

Cria múltiplos pacotes que podem ser carregados dinamicamente em tempo de execução. Evitando que seu bundle demore muito para carregar...
Dividir o código de sua aplicação pode te ajudar a carregar somente o necessário ao usuário, o que pode melhorar dramaticamente o desempenho de sua aplicação.

## Lazing load

Em essência, o carregamento lento significa que um componente ou parte do código deve ser carregado quando necessário.
Caso você tenha um aplicativo grande, como um sistema de gerênciamento de conteúdo com portal do cliente, administrador etc. Nesse caso não é uma boa ideia carregar o App inteiro.

-  Será um aplicativo enorme e custará muita transferência de dados desnecessária, o que pode levar ao carregamento lento do site.

- Um login de cliente não terá acesso a recursos específicos do administrador, portanto, carregá-lo é um desperdício de memória e tempo.

### Vantagens 

Em situações em que sabemos que determinados códigos/recursos não estarão acessíveis a todos os usuários ou o usuário não os acessa com frequência, é melhor carregá-los quando o usuário solicitar.

