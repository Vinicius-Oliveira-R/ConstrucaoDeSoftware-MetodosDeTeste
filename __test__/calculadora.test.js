const CalculadoraServico = require("../src/servico/CalculadoraServico")


test("Deve retornar a soma de dois números",()=>{

    // dado
    let a = 10
    let b = 20
    let saidaEsperada = 30

    // quando
    let resposta = CalculadoraServico.somar(a, b)

    // então
    expect(resposta).toBe(saidaEsperada)
})


test("Deve retornar a subtracao de dois numeros", ()=>{
    let a = 10
    let b = 20
    let saidaEsperada = 10

    let resposta = CalculadoraServico.subtracao(a,b)

    expect(resposta).toBe(saidaEsperada)
})

test("Deve retornar a multiplicação de dois numeros", () => {
    let a = 10
    let b = 20
    let saidaEsperada = 200

    let resposta = CalculadoraServico.multiplicacao(a, b)

    expect(resposta).toBe(saidaEsperada)
})

test("Deve retornar a divisao de dois numeros", () => {
    let a = 5
    let b = 50
    let saidaEsperada = 10

    let resposta = CalculadoraServico.divisao(a, b)

    expect(resposta).toBe(saidaEsperada)
})

test("Deve retornar o fatorial um número", () => {
    let a = 5
    let saidaEsperada = 120

    let resposta = CalculadoraServico.fatorial(a, b)

    expect(resposta).toBe(saidaEsperada)
})
