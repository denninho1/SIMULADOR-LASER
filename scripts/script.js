// -------- FATORES --------

const fatores = [
    { parcelas: 2, fator: 0.5070 },
    { parcelas: 3, fator: 0.3427 },
    { parcelas: 4, fator: 0.2605 },
    { parcelas: 5, fator: 0.2112 },
    { parcelas: 6, fator: 0.1783 },
    { parcelas: 7, fator: 0.1549 },
    { parcelas: 8, fator: 0.1373 },
    { parcelas: 9, fator: 0.1236 },
    { parcelas: 10, fator: 0.1126 },
    { parcelas: 11, fator: 0.1036 },
    { parcelas: 12, fator: 0.0962 },
    { parcelas: 13, fator: 0.0898},
    { parcelas: 14, fator: 0.0844},
    { parcelas: 15, fator: 0.0797},
    { parcelas: 16, fator: 0.0756},
    { parcelas: 17, fator: 0.0720},
    { parcelas: 18, fator: 0.0688},
];


// -------- INPUTS(Campos de preenchimento) e a Tabela --------

const valorSistema = document.getElementById("valorSistema");
const valorEntrada = document.getElementById("valorEntrada");
const valorGarantia = document.getElementById("valorGarantia");
const tabela = document.getElementById("tabelaParcelas");


// -------- FORMATADOR --------

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// -------- CALCULAR AS PARCELAS  --------

function calcularParcelas() {

    const sistema = Number(valorSistema.value) || 0;
    const entrada = Number(valorEntrada.value) || 0;
    const garantia = Number(valorGarantia.value) || 0;

    // limpa tabela
    tabela.innerHTML = "";

    // evita cálculo sem valor
    if (sistema <= 0) return;

    // valores financiados
    const financiado = sistema - entrada;
    const financiadoGarantia = (sistema + garantia) - entrada;

    fatores.forEach(item => {

        const parcela = financiado * item.fator;
        const total = entrada + (parcela * item.parcelas);

        const parcelaGarantia = financiadoGarantia * item.fator;
        const totalGarantia = entrada + (parcelaGarantia * item.parcelas);

        const linha = `
            <tr>
                <td>${item.parcelas}x</td>

                <td>${formatarMoeda(parcela)}</td>
                <td>${formatarMoeda(total)}</td>

                <td>${formatarMoeda(parcelaGarantia)}</td>
                <td>${formatarMoeda(totalGarantia)}</td>
            </tr>
        `;

        tabela.insertAdjacentHTML("beforeend", linha);
    });
}


// -------- EVENTO DINÂMICO PARA CADA INPUT --------

// recalcula sempre que digitar
[valorSistema, valorEntrada, valorGarantia]
    .forEach(input => {
        input.addEventListener("input", calcularParcelas);
});