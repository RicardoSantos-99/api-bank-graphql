import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} from "graphql";

const Account = new GraphQLObjectType({
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

export default Account
