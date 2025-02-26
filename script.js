// Arrays com as músicas e autores
const games = ["Chrono Trigger", "Super Mario World", "Super Bomberman 5", "Mortal Kombat 3", "Top Gear", "Sonic the hedgehog", "Resident Evil 4", "God Of War 3", "Midnigth Club 3", "Down Hill"];
const consoles = ["Super Nintendo", "Super Nintendo", "Super Nintendo", "Super Nintendo", "Super Nintendo", "Mega Drive", "PS2", "PS2", "PS2", "PS2"];
const corpoTabela = document.getElementById("corpo-tabela");

// Preencher a tabela com os dados declarados acima.
for (let i = 0; i < games.length; i++) {
    let row = corpoTabela.insertRow();
    row.insertCell(0).textContent = games[i];
    row.insertCell(1).textContent = consoles[i];
}

// Função para adicionar uma nova linha na tabela
function adicionarLinha() {
    let game = document.getElementById("game").value;
    let console = document.getElementById("console").value;

    if (game === "" || console === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    let row = corpoTabela.insertRow();
    row.insertCell(0).textContent = game;
    row.insertCell(1).textContent = console;

    // Limpar os campos após adicionar novos dados
    document.getElementById("game").value = "";
    document.getElementById("console").value = "";
}

//Ordernar tabela

function ordenarTabela(coluna) {
const tabela = document.getElementById('tabela');
const tbody = tabela.getElementsByTagName('tbody')[0];
const linhas = Array.from(tbody.rows);
const isNumeric = !isNaN(linhas[0].cells[coluna].innerText);

    linhas.sort((a, b) => {
        let valorA = a.cells[coluna].innerText;
        let valorB = b.cells[coluna].innerText;

        if (isNumeric) {
            valorA = parseFloat(valorA);
            valorB = parseFloat(valorB);
        }

        if (valorA < valorB) return -1;
        if (valorA > valorB) return 1;
        return 0;
    });

    // Reorganiza as linhas na tabela
    linhas.forEach(linha => tbody.appendChild(linha));
}

// Click para ordenar as colunas
document.querySelectorAll('th').forEach((header, index) => {
    header.addEventListener('click', () => ordenarTabela(index));
});
