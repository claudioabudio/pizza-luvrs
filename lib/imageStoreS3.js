
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'pizza-luvrs-claudio-abud',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    }

    await s3.putObject(params).promise()
    return `//pizza-luvrs-claudio-abud.s3.us-west-2.amazonaws.com/${params.Key}`
}