import printConsoleScreen from "./printConsoleScreen.js";
let queue = [];
let isRunning = true;
while (isRunning) {
    const text = `${showFormattedQueue(queue)}Selecione alguma opção:\n1-Novo cliente\n2-Atender cliente\n3-Sair`;
    const option = prompt(text);
    switch (option) {
        case '1':
            const newClient = prompt('Digite o nome do cliente a ser adicionado na fila: ').trim();
            queue.push(newClient);
            break
        case '2':
            const firstClient = queue.shift();
            if (!firstClient) {
                printConsoleScreen('Não há nenhum cliente na fila.');
                break
            }
            printConsoleScreen(`O cliente ${firstClient} está sendo atendido e foi removido da fila.`)
            break
        case '3':
            isRunning = false;
            break
        default:
            printConsoleScreen('Opção inválida. Tente novamente.');
            break
    }
}

function showFormattedQueue(queue) {
    if (queue.length !== 0) {
        let queueText = 'Fila:\n';
        queue.forEach((client, index) => {
            queueText += `${index + 1}° ${client}\n`;
        });
        console.log(`${queueText}`);
        return queueText
    } else {
        console.log('Não há clientes na fila.');
        return 'Não há clientes na fila.\n';
    }
}