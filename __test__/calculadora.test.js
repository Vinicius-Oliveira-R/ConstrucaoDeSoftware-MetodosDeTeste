const CalculadoraServico = require("../src/servico/CalculadoraServico")


test("Deve retornar a soa de dois números",()=>{

    // dado
    let a = 10
    let b = 20
    let saidaEsperada = 30

    // quando
    let resposta = CalculadoraServico.somar(a, b)

    // então
    expect(resposta).toBe(saidaEsperada)
})