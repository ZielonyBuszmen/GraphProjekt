# GraphProjekt

## Instlacja i uruchomienie
Do instalacji zależności i uruchomienia programu potrzebny jest Node.js (wraz z npm) oraz yarn.

W przypadku braku `yarna` instalujemy go globalnie komendą `npm install -g yarn`

1. Klonujemy projekt (`git clone ...`)
2. Za pomocą `yarna` instalujemy zależności (`yarn install`)
3. Uruchamiamy projekt (`yarn start`)


_________

## Kilka notatek

### Dodawanie linków
```html
import { Route, Link } from 'react-router-dom';

// linki do danych podstron
<Link to="/">Home</Link>
<Link to="/about-us">About</Link>

// routy - czyli tam gdzie maja byc zamontowane komponenty
<Route exact path="/" component={Home} />
<Route exact path="/about-us" component={About} />

```


### TODO lista:
- Branch - przed dokończeniem - czyli przed zrobieniem wszstkich zadań z projektu
- [ ] Wielki przycisk "Sprawdź spójność"
- [ ] Input do wpisania ilości wierchołków i przycisk "OK" zatwierdzający to
- [ ] Przycisk "reset", który resetuje stan aplikacji do początkowego (puste formularze, itp)
- [ ] Inputy do wpisania nazw wierchołków, które wyświetlą się po wybraniu rozmiaru. Nazy te wyświetlą się w grafie w listy sąsiedztwa i w macierzy sąsedztwa
- [ ] Ostylowanie obu formularzy wpisywania grafów
- [ ] Ostylowanie strony