
const getResult = (a, b) => {
    return a + b;
}

export const HelloWorldApp = () => {

    return (
        <>
            <h1>Hello { getResult(1, 2) }</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}