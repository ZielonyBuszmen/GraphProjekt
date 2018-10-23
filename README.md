# GraphProjekt 

[![Build Status](https://travis-ci.org/ZielonyBuszmen/GraphProjekt.svg?branch=master)](https://travis-ci.org/ZielonyBuszmen/GraphProjekt) [![Coverage Status](https://coveralls.io/repos/github/ZielonyBuszmen/GraphProjekt/badge.svg?branch=master)](https://coveralls.io/github/ZielonyBuszmen/GraphProjekt?branch=master)


![first photo of project](graphProjekt_1.png)

Kolory, teksty i layout zostały poczynione przez Patrycję. ([Patrycja20](https://github.com/Patrycja20))

## Instlacja i uruchomienie
Do instalacji zależności i uruchomienia programu potrzebny jest Node.js (wraz z npm) oraz yarn.

W przypadku braku `yarna` instalujemy go globalnie komendą `npm install -g yarn`

1. Klonujemy projekt (`git clone ...`)
2. Za pomocą `yarna` instalujemy zależności (`yarn install`)
3. Uruchamiamy projekt (`yarn start`)


![first photo of project](graphProjekt_2.png)


## Notatki
#### Przydatne tutoriale i linki

- O co c'mon z Connect() => https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
- React i Bootstrap 4 => https://reactstrap.github.io/

#### Wrzucenie strony na gh-pages można wykonać komendą (w systemie wymagany jest zainstalowany yarn):
```
yarn deploy
```

#### Słowniczek
 - Adjacency list - Lista sąsiedztw
 - Adjacency matrix - Macierz sąsiedztwa
 
 
 ### Stopień pokrycia kodu testami
 
```
-------------------------------|----------|----------|----------|----------|-------------------|
File                           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------|----------|----------|----------|----------|-------------------|
All files                      |    85.19 |    82.35 |     97.5 |    89.08 |                   |
 src                           |       55 |    45.45 |    90.48 |    62.69 |                   |
  helpers.js                   |      100 |      100 |      100 |      100 |                   |
  index.js                     |        0 |        0 |        0 |        0 |... ,4,5,6,8,11,13 |
  setupTests.js                |      100 |      100 |      100 |      100 |                   |
  store.js                     |        0 |        0 |        0 |        0 |... 28,29,33,38,41 |
 src/actions                   |      100 |      100 |      100 |      100 |                   |
  actionCreators.js            |      100 |      100 |      100 |      100 |                   |
 src/components                |      100 |      100 |      100 |      100 |                   |
  AdjacencyList.js             |      100 |      100 |      100 |      100 |                   |
  AdjacencyMatrix.js           |      100 |      100 |      100 |      100 |                   |
  App.js                       |      100 |      100 |      100 |      100 |                   |
  BlockMask.js                 |      100 |      100 |      100 |      100 |                   |
  ConnectivityButtonChecker.js |      100 |      100 |      100 |      100 |                   |
  Header.js                    |      100 |      100 |      100 |      100 |                   |
  Home.js                      |      100 |      100 |      100 |      100 |                   |
  VertexQuantityInput.js       |      100 |      100 |      100 |      100 |                   |
 src/reducers                  |      100 |      100 |      100 |      100 |                   |
  connectivityReducer.js       |      100 |      100 |      100 |      100 |                   |
  graphSizeReducer.js          |      100 |      100 |      100 |      100 |                   |
  index.js                     |      100 |      100 |      100 |      100 |                   |
  matrixReducer.js             |      100 |      100 |      100 |      100 |                   |
-------------------------------|----------|----------|----------|----------|-------------------|
```