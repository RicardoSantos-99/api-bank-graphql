import { promises as fs } from "fs";
import { v4 as uuid4 } from "uuid";

const {readFile, writeFile} = fs

async function writeAccount(account) {
    const data = JSON.parse(await readFile(FILE_NAME));

    data.accounts.push(account)

    await writeFile(FILE_NAME, JSON.stringify(data, null, 2))

    return account
}

async function getAccounts() {
    const data = JSON.parse(await readFile(FILE_NAME));

    return data.accounts
}

async function getAccountById(id) {
    const accounts = await getAccounts()

    const account = accounts.find(account => account.id === id)

    if (!account) throw new Error("account not find")

    return account
}

async function insertAccount(name, balance) {
    const account = {
        id: uuid4(),
        name,
        balance
    }

    return await writeAccount(account);
}

async function removeAccount(id) {
    const accounts = await getAccounts()

    const newAccounts = accounts.filter(account => account.id !== id)

    const data = {
        accounts: newAccounts
    }

    await writeFile(FILE_NAME, JSON.stringify(data, null, 2))
}

async function updateAccount(id, name, balance) {
    const accounts = await getAccounts()
    const index = accounts.findIndex(account => account.id === id)

    if (index === -1) {
        throw new Error("user not found")
    }

    accounts[index] = {
        id,
        name,
        balance
    }

    const data = {
        accounts
    }

    await writeFile(FILE_NAME, JSON.stringify(data, null, 2))

    return accounts[index]
}

async function updateBalance(id, balance) {
    const account = await getAccountById(id)
    account.balance = balance

    await writeAccount(account)

    return account
}

export default {
    getAccounts,
    insertAccount,
    getAccountById,
    removeAccount,
    updateAccount,
    updateBalance
}