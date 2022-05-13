表格数据格式化
--- 

将表格数据格式化为insert sql, 或者json数组

### 应用场景

- 比如我们通过db查询到的表格数据，希望可以生成对应的插入sql
- 将表格数据，格式化为json对象，用于程序使用


### demo

[index.html](./index.html) 写了一个简单的demo，支持表格数据转json、转insert sql语句


如果只希望使用js方法，形如

引入 [tableDataFormat.js](../../../resources/js/util/tableDataFormat.js)

```js
const table_content = "id\tuser_id\tuser_name\trequest_time\turl\tcost_time\tresponse_code\t\n" +
    "28\t0\t\t2022-05-05 20:05:06\t/\t0\t1012\n" +
    "60\t0\t\t2022-05-05 21:59:26\t/\t1\t1012\n";

console.log(table2jsonStr(table_content));
console.log(table2insertSql(table_content, "test_table"));

```

输出信息如下

```text
{
  fields: [
    'id',
    'user_id',
    'user_name',
    'request_time',
    'url',
    'cost_time',
    'response_code'
  ],
  values: [
    [ '28', '0', '', '2022-05-05 20:05:06', '/', '0', '1012' ],
    [ '60', '0', '', '2022-05-05 21:59:26', '/', '1', '1012' ]
  ],
  str: '[{"id":"28","user_id":"0","user_name":"","request_time":"2022-05-05 20:05:06","url":"/","cost_time":"0","response_code":"1012"},{"id":"60","user_id":"0","user_name":"","request_time":"2022-05-05 21:59:26","url":"/","cost_time":"1","response_code":"1012"}]'
}

---- 下面是 insert sql

{
  fields: [
    'id',
    'user_id',
    'user_name',
    'request_time',
    'url',
    'cost_time',
    'response_code'
  ],
  values: [
    [ '28', '0', '', '2022-05-05 20:05:06', '/', '0', '1012' ],
    [ '60', '0', '', '2022-05-05 21:59:26', '/', '1', '1012' ]
  ],
  str: 'insert into `test_table` (`id`,`user_id`,`user_name`,`request_time`,`url`,`cost_time`,`response_code`) values \n' +
    "('28','0','','2022-05-05 20:05:06','/','0','1012'),\n" +
    "('60','0','','2022-05-05 21:59:26','/','1','1012');"
}
```