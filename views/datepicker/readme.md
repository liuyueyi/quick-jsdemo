## 日期选择控件
> 经常出现的日期选择，从开始时间到结束时间，要求可配置到s, 主要借助 daterangepicker 来实现


### 0. 控件

主要依赖的是 daterangepicker 这个控件，友情链接: [http://www.daterangepicker.com/](http://www.daterangepicker.com/)

### 1. 依赖

主要依赖了

- `jquery.js`， `bootstrap.js`, `moment.min.js`, `datarangepicker.js`
- `bootstrap.css`, `datarangepicker.css`

本控件有较多的配置项，可以实现各种适用的日期选择


引入依赖

```html
<!-- css依赖 -->
<link rel="stylesheet" type="text/css" media="all" href="../../resources/bootstrap3/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" media="all" href="../../resources/css/datepicker/daterangepicker.css" />



<!-- jquery  -->
<script type="text/javascript" src="../../resources/js/jquery-3.1.0.min.js" ></script>
<!-- bootstrap -->
<script type="text/javascript" src="../../resources/bootstrap3/js/bootstrap.min.js" ></script>


<!-- 注意moment.js必须放在前面 -->
<script type="text/javascript" src="../../resources/js/datepicker/moment.min.js" ></script>
<script type="text/javascript" src="../../resources/js/datepicker/daterangepicker.js" ></script>
```


### 2. 测试验证

使用方式比较简单，主要是看根据个人的场景，进行配置项的设置，下面是一个实例；也可以直接运行目录下的html文件

```js
<div class="container">

  <div class="row">

    <div class="col-md-4 col-md-offset-2 demo">
      <h4>Your Date Range Picker</h4>
      <input type="text" id="config-demo" class="form-control" name="daterange">
      <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
    </div>

  </div>

</div>

<style type="text/css">
.demo { position: relative; }
.demo i {
  position: absolute; bottom: 10px; right: 24px; top: auto; cursor: pointer;
}
</style>

<script type="text/javascript">


    $(document).ready(function() {
        var options = {};

        options.locale = {
            direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
            format: 'YYYY-MM-DD HH:mm:ss',
            separator: ' - ',
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['周天', '周一', '周二', '周三', '周四', '周五','周六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1,
            timePicker:true
          };
          options.timePicker = true;
          options.timePicker24Hour = true;
          options.autoApply = true;


        $('input[name="daterange"]').daterangepicker(
          options,
        function(start, end, label) {
          alert('A date range was chosen: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        }
  );

});
</script>
```
