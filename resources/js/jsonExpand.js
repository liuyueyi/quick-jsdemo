function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

function isObj(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

function processJsonObj(jsonBody, line) {
    try {
        let keys = Object.keys(jsonBody);
        if (keys.length === 0) {
            return jsonBody;
        }

        // 长整数会转换为对象，做一个兼容
        if (keys.length === 3) {
            var sub = keys[0] + keys[1] + keys[2];
            if (sub == 'sec' || sub == 'sce' || sub == 'esc' || sub == 'ecs' || sub == 'cse' || sub == "ces") {
                return line;
            }
        }

        var result = {};
        for (let key in jsonBody) {
            const ans = formatJsonStr(jsonBody[key]);
            result[key] = ans;
        }
        return result;
    } catch (e) {
        return jsonBody;
    }
}

function processJsonArray(jsonArray) {
    try {
        if (jsonArray.length === 0) {
            return jsonArray;
        }

        var result = [];
        var index = 0;
        for (let val in jsonArray) {
            result[index++] = formatJsonStr(val);
        }
        return result;
    } catch (e) {
        return jsonArray;
    }
}

// 实现json对象的平铺
function formatJsonStr(line) {
    try {
        const jsonBody = JSON.parse(line);
        if (isArray(jsonBody)) {
            return processJsonArray(jsonBody);
        } else if (isObj(jsonBody)) {
            return processJsonObj(jsonBody, line);
        } else {

            return line;
        }
    } catch (e) {
        return line;
    }
}

function expandJsonStr(jsonStr) {
    jsonStr = jsonStr.replace(/"\w+":\s*\d{16,}/g, function (longVal) {
        let split = longVal.split(":");
        return split[0] + ':' + '"' + split[1].trim() + '"';
    });
    return formatJsonStr(jsonStr);
}

// 实现json字符串的平铺
const demo = '{"action":"dd","con":"{\\"a\\":123,\\"b\\":1293847125987}"}';
var result = expandJsonStr(demo);
console.log(result);
