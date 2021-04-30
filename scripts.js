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
        amount: 70000,
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
    all: transactionsList,
    add(transaction) { 
        Transaction.all.push(transaction)
        App.reload()
    },
    incomes() {
        let income = 0;

        Transaction.all.forEach((transaction) => {
            if(transaction.amount > 0) {
                income += transaction.amount
            }
        })
        return income
    },
    expenses() {
        let expense = 0;

        Transaction.all.forEach((transaction) => {
            if(transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense
    },
    total() {
       return Transaction.incomes() + Transaction.expenses()
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
              <img id="minus" src="./assets/minus.svg" alt="Remover trasação" />
            </td>
        `;

        return html;
    },
    updtadeBalance() {
        document.getElementById('incomeDisplay').innerHTML=Utils.formatCurrency(Transaction.incomes())  
        document.getElementById('expenseDisplay').innerHTML= Utils.formatCurrency(Transaction.expenses()) 
        document.getElementById('totalDisplay').innerHTML=Utils.formatCurrency(Transaction.total()) 
    },
    clearTransanctions() {
        DOM.transactionContainer.innerHTML=""
    }
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

const App = {
    init() {
        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        })
    },
    reload() {
        DOM.clearTransanctions()
        App.init()
    }
}


App.init














DOM.updtadeBalance()

Transaction.add({
    id: 39,
    description: "Alo",
    amount: 200,
    date: "23/01/2021"
}) 



