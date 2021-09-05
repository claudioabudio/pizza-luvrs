const AWS = require("aws-sdk")

AWS.config.update({region: "us-west-2"})

const dynamodb = new AWS.DynamoDB.DocumentClient()

async function putItem(table, item) {
    const params = {
        TableName: table,
        Item: item
    }
    return dynamodb.put(params).promise()
}

async function getAllItems(table) {
    const params = {
        TableName: table
    }

    const result = await dynamodb.scan(params).promise()
    return result.Items
}

async function getItem(table, idKey, id) {
    const params = {
        TableName: table,
        Key: {
            [idKey]: id
        }
    }

    const result = await dynamodb.get(params).promise()
    return result.Item
}

module.exports = {
    putItem,
    getAllItems,
    getItem
}
