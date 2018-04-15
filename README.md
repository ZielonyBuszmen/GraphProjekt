# GraphProjekt


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
- [ ] Przycisk, który wysyła akcję do odliczenia grafu (liczenia spojnosci)
- [ ] Przycisk "reset"
- [ ] Input do wpisania ilości wierchołków i przycisk "OK" zatwierdzający to
- [ ] Inputy do wpisania nazw wierchołków, które wyświetlą się po wybraniu rozmiaru. Nazy te wyświetlą się w grafie w listy sąsiedztwa i w macierzy sąsedztwa
- [ ] Ostylowanie obu formularzy wpisywania grafów
- [ ] Ostylowanie strony