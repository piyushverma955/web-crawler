const urlModel = require('../Models/parsedUrlModel');
const util = require('util');
var e = {};

enrichUrl = (urlsArray, callback) => {
    let urls_arrayObject = [];
    urlsArray.map(url => {
        let splitedUrl = url.split('?');
        let obj = {}
        obj.url = splitedUrl[0];
        splitedUrl.shift();
        obj.parameters = splitedUrl.map(urlParams => {
            return urlParams.split('=')[0];
        })
        urls_arrayObject.push(obj);
    })
    callback(null, urls_arrayObject);
}

const promisifyEnrichUrl = util.promisify(enrichUrl);



e.insertInDB = async (urlsArray) => {
    promisifyEnrichUrl(urlsArray).then(async docs => {
        for (let i = 0; i < docs.length; i++) {
            let element = docs[i];
            let isFoundAndUpdated = await urlModel.findOne({ url: element.url })
            if (!isFoundAndUpdated) {
                let create = new urlModel();
                create.url = element.url;
                create.referenceCount = 1;
                create.parameters = element.parameters;
                await create.save();
            } else {
                isFoundAndUpdated.referenceCount++;
                for (let i = 0; i < element.parameters.length; i++) {
                    if (isFoundAndUpdated.parameters.indexOf(element.parameters[i]) == -1) isFoundAndUpdated.parameters.push(element.parameters[i]);
                }
                new urlModel(isFoundAndUpdated);
                await isFoundAndUpdated.save();
            }

        }
    })
}


module.exports = e;