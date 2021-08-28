import AccountRepository from '../repositories/account.repository.js'

async function createAccount(name, balance) {
    return await AccountRepository.insertAccount(name, balance);
}

async function getAccount() {
    return await AccountRepository.getAccounts()
}

async function getAccountById(id) {
    return await AccountRepository.getAccountById(id)
}

async function deleteAccount(id) {
    await AccountRepository.removeAccount(id)
}

async function updateAccount(id, name, balance) {
    return await AccountRepository.updateAccount(id, name, balance)
}

async function updateBalance(id, balance) {
    return await AccountRepository.updateBalance(id, balance)
}

export default {
    createAccount,
    getAccount,
    getAccountById,
    deleteAccount,
    updateAccount,
    updateBalance
}