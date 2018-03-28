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