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
        amount: 20000,
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

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover trasação" />
            </td>
        `;

        return html;
    },
};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "- " : ""

        value = String(value).replace(/\D/g,"")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
        })

        return signal + " " + value
    }
}

transactionsList.forEach((transaction) => {
    DOM.addTransaction(transaction);
})


