# LummaQuery - Extensões Personalizadas para jQuery

**LummaQuery** é uma biblioteca que adiciona diversas extensões úteis ao jQuery, oferecendo métodos adicionais para facilitar a manipulação de elementos DOM e o trabalho com formulários. Ela oferece funcionalidades como serialização de dados em formato JSON, manipulação de atributos, controle de estados de elementos e muito mais.

A biblioteca está disponível via npm no pacote `@chroma-studio/lummaquery`.

## Instalação

### Via NPM
Para instalar a biblioteca, use o seguinte comando no seu terminal:

```bash
npm install jquery
npm install @chroma-studio/lummaquery
```

Após a instalação, basta importar o pacote e usá-lo em seu código:

```javascript
import $ from "jquery";
import '@chroma-studio/lummaquery';
```

### Via CDN
Se você estiver usando diretamente no navegador via CDN, basta incluir o script:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@chroma-studio/lummaquery@latest"></script>
```
## Licença de Uso

A biblioteca **LummaScriptify** está licenciada sob a **Licença LummaScriptify Proprietária**.  
**Permissões:**  
- Uso pessoal e em projetos internos.  
- Modificação do código para uso pessoal.  

**Restrições:**  
- Distribuição pública ou comercial sem autorização expressa.  
- Uso em projetos de terceiros sem licença válida.  

Para obter uma licença comercial, entre em contato: [oseias.d.gomes@gmail.com](mailto:oseias.d.gomes@gmail.com).

## Funcionalidades

LummaQuery estende a funcionalidade do jQuery com os seguintes métodos:

### 1. `.id()`
Retorna o ID do primeiro elemento no conjunto.

```javascript
$('#elemento').id();
```

### 2. `.enabled()`
Habilita os elementos selecionados.

```javascript
$('button').enabled();
```

### 3. `.disabled()`
Desabilita os elementos selecionados.

```javascript
$('button').disabled();
```

### 4. `.check()`
Marca os checkboxes selecionados.

```javascript
$('input[type="checkbox"]').check();
```

### 5. `.uncheck()`
Desmarca os checkboxes selecionados.

```javascript
$('input[type="checkbox"]').uncheck();
```

### 6. `.serializeJson()`
Serializa os dados do formulário para um objeto JSON.

```javascript
var formData = $('#formulario').serializeJson();
```

### 7. `.toggleAttr(attr, value1, value2)`
Alterna um atributo entre dois valores especificados.

```javascript
$('#elemento').toggleAttr('data-status', 'ativo', 'inativo');
```

### 8. `.hasAttr(attr)`
Verifica se o elemento possui um atributo específico.

```javascript
$('#elemento').hasAttr('data-status');
```

### 9. `.hasElement(selector)`
Verifica se o elemento contém um filho correspondente ao seletor.

```javascript
$('#elemento').hasElement('.filho');
```

### 10. `.tag()`
Retorna o nome da tag do primeiro elemento do conjunto.

```javascript
$('#elemento').tag();
```

### 11. `.reset()`
Reseta os campos do formulário.

```javascript
$('#formulario').reset();
```

## Exemplos

### Exemplo 1: Habilitar e desabilitar botões
```javascript
// Habilita todos os botões
$('button').enabled();

// Desabilita todos os botões
$('button').disabled();
```

### Exemplo 2: Serializar dados do formulário
```javascript
var dados = $('#meuFormulario').serializeJson();
console.log(dados);
```

### Exemplo 3: Alternar o atributo de um elemento
```javascript
$('#meuElemento').toggleAttr('class', 'visivel', 'invisivel');
```

### Exemplo 4: Verificar se um elemento tem um atributo
```javascript
if ($('#meuElemento').hasAttr('data-id')) {
    console.log('O elemento tem o atributo data-id');
}
```

## Contribuição
Se você deseja contribuir para o desenvolvimento desta biblioteca, sinta-se à vontade para abrir issues ou pull requests no [repositório oficial](https://github.com/Git-Chroma-Studio/LummaQuery).

## Licença
Este projeto está licenciado sob a **Licença LummaScriptify Proprietária**.  
**Permissões:**  
- Uso pessoal e em projetos internos.  
- Modificação do código para uso pessoal.  

**Restrições:**  
- Distribuição pública ou comercial sem autorização expressa.  
- Uso em projetos de terceiros sem licença válida.  

Para obter uma licença comercial, entre em contato: [oseias.d.gomes@gmail.com](mailto:oseias.d.gomes@gmail.com).

### Licença Comercial
Se você precisa de uma licença que permita o uso fechado da LummaScriptify em projetos comerciais, entre em contato para obter uma licença comercial personalizada: [oseias.d.gomes@gmail.com](mailto:oseias.d.gomes@gmail.com).

**Desenvolvido por [Oséias Gomes](https://github.com/sdgomes)**