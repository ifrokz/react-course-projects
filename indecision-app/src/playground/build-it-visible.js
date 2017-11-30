const buttonMostrar = () => {
    mostrandoTexto = !mostrandoTexto;
    renderApp();
}

let mostrandoTexto = false;

const renderApp = () => {    
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={buttonMostrar}>{mostrandoTexto ? 'Hide details' : 'Show details'}</button>
            {mostrandoTexto && (
                <div>
                    <p>Algo de texto de ejemplo</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template , document.getElementById("app"));
};

renderApp();