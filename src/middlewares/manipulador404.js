import NaoEncontrada from "../erros/NaoEncontrada.js"

const manipulador404 = (req, res, next) => {
    const erro404 = new NaoEncontrada()
    next(erro404);
}

export default manipulador404;
