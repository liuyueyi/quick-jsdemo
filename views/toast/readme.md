## 弹窗测试case
> 弹窗，类似手机上的toast，弹出一个信息，过一段时间后自动消失

### 1. 依赖

主要依赖了`jquery`, `jquery.toastmessage.js`， `jquery.toastmessage.css`


images 目录下存放了几种不同的toast对应的图标，可以根据需要进行替换


引入依赖

```html
<link rel="stylesheet" type="text/css" media="all" href="../../resources/css/jquery.toastmessage.css" />
<script type="text/javascript" src="../../resources/js/jquery-3.1.0.min.js" ></script>
<script type="text/javascript" src="../../resources/js/jquery.toastmessage.js" ></script>
```


### 2. 测试验证

使用方式比较简单，直接调用

```js
$().toastmessage('showSuccessToast', '显示一个成功的弹窗!');
$().toastmessage('showWarningToast', '显示一个警告的弹窗!');
$().toastmessage('showNoticeToast', '显示一个通知的弹窗!');
$().toastmessage('showErrorToast', '显示一个错误的弹窗!');
```
