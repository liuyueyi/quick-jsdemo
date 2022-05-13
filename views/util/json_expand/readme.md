面向问题
---

将json字符串进行可视化时，若某个value也是一个json串，会导致转换后的结果并不直观，如

### 输入

```text
{"key":"value","a":"{\"key\":\"value\",\"a\":\"hello world\"}","ary":"[1, 2, 3]"}
```

### 格式化后输出

```json
{
    "key": "value",
    "a": "{\"key\":\"value\",\"a\":\"hello world\"}",
    "ary": "[1, 2, 3]"
}
```

### 预期输出

```json
{
    "key": "value",
    "a": {
        "key": "value",
        "a": "hello world"
    },
    "ary": [
        "0",
        "1",
        "2"
    ]
}
```

### 使用姿势

引入 [jsonExpand.js](../../../resources/js/util/jsonExpand.js)

```js
// 实现json字符串的平铺，即若json字符串中某个key对应的value也是json串，可以将其进行展开
const demo = '{"key":"value","a":"{\\"key\\":\\"value\\",\\"a\\":\\"hello world\\"}","ary":"[1, 2, 3]"}';
var result = expandJsonStr2Str(demo);
console.log(result);
```