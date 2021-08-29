import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat
} from "graphql";

const AccountInput = new GraphQLInputObjectType({
    name: "Account",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        balance: {
            type: GraphQLFloat
        }
    })
})

export default AccountInput
