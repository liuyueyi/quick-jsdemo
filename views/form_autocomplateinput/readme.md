## 自动补全输入框
> 输入框的内容是指定的一些数据时，可以考虑采用自动补全

### 1. 依赖

主要依赖了

- `jquery.js`， `bootstrap.js`, `bootstrap3-typeahead.min.js`
- `bootstrap.css`



引入依赖

```html
<link rel="stylesheet" type="text/css" media="all" href="../../resources/bootstrap3/css/bootstrap.min.css" />


<!-- jquery  -->
<script type="text/javascript" src="../../resources/js/jquery-3.1.0.min.js" ></script>
<!-- bootstrap -->
<script type="text/javascript" src="../../resources/bootstrap3/js/bootstrap.min.js" ></script>


<script type="text/javascript" src="../../resources/js/typehead/bootstrap3-typeahead.min.js" ></script>
```


### 2. 测试验证

使用方式比较简单，有两种不同的姿势，第一个是借助js来实现

```html
<div class="wrapper row">
  <div class="col-md-10 col-md-offset-1">
     <input type="text" placeholder="item..." class="typeahead_1 form-control" />
  </div>
</div>

<script>
    $(document).ready(function(){
        $('.typeahead_1').typeahead({
            source: ["测试1","测试2","西大3"]
        });
    });
</script>
```

第二种是直接在html中完成

```html
<div class='wrapper row'>
  <div class="col-md-10 col-md-offset-1">
    <input type="text"
    data-provide="typeahead"
    data-source='["item 1","item 2","item 3"]'
    placeholder="item..."
    class="form-control" />
  </div>
</div>
```
