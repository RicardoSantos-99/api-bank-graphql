import { GraphQLList, GraphQLString } from "graphql";
import Account from "../types/Account.js";
import AccountResolver from '../resolvers/account.resolver.js';


const accountQueries = {
    getAccounts: {
        type: new GraphQLList(Account),
        resolve: () => AccountResolver.getAccount()
    },
    getAccount: {
        type: Account,
        args: {
            id: {
                name: "id",
                type: GraphQLString
            }
        },
        resolve: (_, args) => AccountResolver.getAccountById(args.id)
    }
}

export default accountQueries