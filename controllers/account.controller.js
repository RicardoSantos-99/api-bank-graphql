import AccountService from '../services/account.service.js'

async function createAccount(req, res, next) {
    try {
        let {name, balance} = req.body

        if (!name || balance === undefined) {
            throw new Error(`name and balance is required`)
        }

        const account = await AccountService.createAccount(name, balance)

        res.send(account)

        LOGGER.info(`POST /account - ${JSON.stringify(account)}`)
    } catch (err) {
        res.status(400).send({error: err.message})
    }
}

async function getAccounts(req, res, next) {
    try {
        const data = await AccountService.getAccount()

        res.send(data)

    } catch (err) {
        next(err)
    }
}

async function getAccountById(req, res, next) {
    try {
        const {id} = req.params

        const data = await AccountService.getAccountById(id)

        res.send(data)

    } catch (err) {
        next(err)
    }
}

async function deleteAccount(req, res, next) {
    try {
        const {id} = req.params

       await AccountService.deleteAccount(id)

        res.end()

        LOGGER.info(`DELETE /account - ${id}`)

    } catch (err) {
        next(err)
    }
}

async function updateAccount(req, res, next) {
    try {
        const {id, name, balance} = req.body

        if (!id || !name || balance === undefined) {
            throw new Error(`id, name and balance is required`)
        }

        const updatedAccount = await AccountService.updateAccount(id, name, balance)

        res.send(updatedAccount)

        LOGGER.info(`PUT /account - ${JSON.stringify(updatedAccount)}`)

    } catch (err) {
        next(err)
    }
}

async function updateBalance(req, res, next) {
    try {
        const {id, balance} = req.body

        if (!id || balance === undefined) {
            throw new Error(`id and balance is required`)
        }

        const updatedAccount = await AccountService.updateBalance(id, balance)

        res.send(updatedAccount)

        LOGGER.info(`PATCH /account - ${JSON.stringify(updatedAccount)}`)

    } catch (err) {
        next(err)
    }
}

export default {
    createAccount,
    getAccounts,
    getAccountById,
    deleteAccount,
    updateAccount,
    updateBalance
}