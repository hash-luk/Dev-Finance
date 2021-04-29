const Modal = {
    toggleModal() {
        document.querySelector(".modal-overlay").classList.toggle("active");
    },
};

const transactionsList = [{
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "23/01/2021",
    },
    {
        id: 1,
        description: "Criaçao Website",
        amount: -70000,
        date: "23/01/2021",
    },
    {
        id: 1,
        description: "internet",
        amount: -20000,
        date: "23/01/2021",
    },
];

const Transaction = {
    incomes() {},
    expenses() {},
    total() {
        //incomes - expenses
    },
};

const DOM = {

    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = (document.createElement('tr'))
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover trasação" />
            </td>
        `;

        return html;
    },
};

transactionsList.forEach((transaction) => {
    DOM.addTransaction(transaction);
})


