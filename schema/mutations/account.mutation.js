import Account from "../types/Account.js";
import AccountResolver from '../resolvers/account.resolver.js';
import { GraphQLBoolean, GraphQLFloat, GraphQLString } from "graphql";

const accountMutation = {
    createAccount: {
        type: Account,
        args: {
            name: {
                type: GraphQLString
            },
            balance: {
                type: GraphQLFloat
            }
        },
        resolve(_, args) {
            return AccountResolver.createAccount(args.name, args.balance)
        }
    },
    deleteAccount: {
        type: GraphQLBoolean,
        args: {
            id: {
                name: "id",
                type: GraphQLString
            }
        },
        resolve(_, args) {
            return AccountResolver.deleteAccount(args.id);
        }
    },
    updateAccount: {
        type: Account,
        args: {
            id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            balance: {
                type: GraphQLFloat
            }
        },
        resolve(_, args) {
            return AccountResolver.updateAccount(args.id, args.name, args.balance)
        }
    },

}

export default accountMutation