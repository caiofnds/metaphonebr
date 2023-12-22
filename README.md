# MetaphoneBR

[![npm version](https://badge.fury.io/js/metaphonebr.svg)](https://badge.fury.io/js/metaphonebr)
[![GitHub license](https://img.shields.io/github/license/caiofnds/metaphonebr.svg)](https://github.com/caiofnds/metaphonebr/blob/main/LICENSE)

A biblioteca **MetaphoneBR** é uma implementação do algoritmo de fonética Metaphone para o Português Brasileiro. Este projeto é um port do Metaphone para o idioma português, originalmente desenvolvido por [Carlos Jordão](https://github.com/carlosjordao/metaphone-ptbr), proporcionando uma maneira eficaz de calcular códigos fonéticos para palavras em português.

## Instalação

Você pode instalar a biblioteca via npm usando o seguinte comando:

```bash
npm install metaphonebr
```

Esta biblioteca é uma importação do projeto original utilizando a biblioteca bindings para integração com C++. Certifique-se de ter as dependências adequadas instaladas em seu sistema.

## Uso
```
// Importe a biblioteca
const metaphone = require('metaphonebr');

// Ou use a importação ES6
// import metaphone from 'metaphonebr';

// Exemplo de uso
const palavra = 'exemplo';
const codigoFonetico = metaphone(palavra);

console.log(`Código fonético de "${palavra}": ${codigoFonetico}`);
```
## Contribuição
Se você quiser contribuir para o desenvolvimento desta biblioteca, sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

## Licença
Este projeto é licenciado sob a Licença MIT.
