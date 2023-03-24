import { Route } from 'react-router';

function App() {
    return (
        <>
            <Route exact path='/' key='default' component={Main}/>
        </>
    );
}

export default App;
