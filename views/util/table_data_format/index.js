var lastTableName = "";
var lastContent = "";
var checkedTag = "sql";

function parseTemplateToSql() {
    let newCheckedTag = document.getElementById("sql").checked ? "sql" : "json";
    let newTableName = document.getElementById("tableName").value.trim();
    const newContent = document.getElementById("json-src").value.trim();

    if (newCheckedTag !== checkedTag) {
        // 切换选中时，更新提示
        newTableName = "";
        document.getElementById("tableName").value = "";
        document.getElementById("tip").innerHTML = newCheckedTag === "sql" ? "插入tableName" : "分组字段";
    }

    if (newContent === lastContent && newCheckedTag === checkedTag && newTableName === lastTableName) {
        // 完全相同时，不参与计算
        console.log("ignore to update content!");
        return;
    }

    lastContent = newContent;
    checkedTag = newCheckedTag;
    lastTableName = newTableName;
    if (newTableName.length === 0 && newCheckedTag === "sql") newTableName = "请用表名替换";

    result = newCheckedTag === 'sql' ? table2insertSql(newContent, newTableName) : table2jsonStr(newContent, newTableName);

    var render_html = "";
    if (result === "error") {
        render_html = "<div style='color:blue'>传入sql数据不满足格式要求，一个合法的传入形如:</div>";
        render_html += "<br/><p style='font-style: italic;'>第一行：field_names，使用英文逗号或者\t空格分隔；第二行至更多行，表示具体的values</p>";
    } else {
        render_html += "<h3>fields</h3>";
        render_html += "<div class='content-info'>" + result['fields'] + "</div><br/>";
        render_html += "<h3>values</h3>";
        for (var i = 0; i < result['values'].length; i++) {
            render_html += "<div class='content-info'>" + result['values'][i] + "</div>";
            render_html += "<br/>"
        }
        render_html += "<br/><h3>转换结果：</h3><div style='color:red;' class='content-info'>" + result['str'].replaceAll("\n", "<br/>") + "</div>";

    }
    document.getElementById("json-target").innerHTML = render_html;
}

// 绑定事件
document.getElementById("json-src").onkeyup = parseTemplateToSql;
// 绑定输入时间
document.getElementById("tableName").onkeyup = parseTemplateToSql;

// radio button 选中
document.getElementById("sql").onclick = parseTemplateToSql;
document.getElementById("json").onclick = parseTemplateToSql;