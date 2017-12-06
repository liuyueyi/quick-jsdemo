## 可搜索的表格
> 表格内容较多时，如何军训服快速搜索呢？当数据都已经显示在table里面了，完全可以直接用js进行实时搜索

### 1. 依赖

主要依赖了

- `jquery.js`， `bootstrap.js`, `footable.all.min.js`
- `bootstrap.css`

不仅仅支持表格的搜索，还支持自动分页


引入依赖

```html
<!-- css样式，主要是避免表哥特别抽和样式错乱的问题 -->
<link rel="stylesheet" type="text/css" media="all" href="../../resources/bootstrap3/css/bootstrap.min.css" />

<!-- jquery  -->
<script type="text/javascript" src="../../resources/js/jquery-3.1.0.min.js" ></script>
<!-- bootstrap -->
<script type="text/javascript" src="../../resources/bootstrap3/js/bootstrap.min.js" ></script>


<!-- 注意moment.js必须放在前面 -->
<script type="text/javascript" src="../../resources/js/searchtable/footable.all.min.js" ></script>
```


### 2. 测试验证

使用方式比较简单，主要是看根据个人的场景，进行配置项的设置，下面是一个实例；也可以直接运行目录下的html文件

```js
<div id="wrapper">
   <div class="container">

   <div class="col-md-11 ">
       <div class="">
           <div class="ibox-content">
              //  <input type="text" class="form-control input-sm m-b-xs" id="filter2"
              //         placeholder="Search in table">
              <div class="input-group col-md-12">
                  <input type="text" class="form-control" id="filter"
                         placeholder="输入内容可实现过滤">
                  <span class="input-group-btn">
                  <button class="btn btn-info" type="button">
                      <span class="fa fa-search">实时过滤</span>
                  </button>
                  </span>
              </div>

               <table class="footable table table-stripped" data-page-size="8" data-filter=#filter2>
                   <tbody>
                   <tr>
                       <td>Trident</td>
                       <td>Internet
                           Explorer 4.0
                       </td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
         </div>
   </div>

<script>
$(document).ready(function() {
  $('.footable').footable(); // 注意这一行的调用，用于建立搜索框和table之间的检索关系，必须明确调用
  $('.footable2').footable();
});
</script>
```
