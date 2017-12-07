## markdown
> markdown 富文本编辑器控件，支持在线编辑预览


### 依赖

主要是markdown.css 和 markdown.js 两个依赖，是必须的，整个依然是建立在bootstrap基础上做的

```html
<link rel="stylesheet" type="text/css" media="all" href="../../resources/bootstrap3/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" media="all" href="../../resources/css/md/bootstrap-markdown.min.css" />


<!-- jquery  -->
<script type="text/javascript" src="../../resources/js/jquery-3.1.0.min.js" ></script>
<!-- bootstrap -->
<script type="text/javascript" src="../../resources/bootstrap3/js/bootstrap.min.js" ></script>

<script type="text/javascript" src="../../resources/js/md/bootstrap-markdown.js" ></script>
<script type="text/javascript" src="../../resources/js/md/markdown.js" ></script>
```


### 实例

这个的实现非常简单，但是preview有些不太满意，对于代码的preview不太友好，后续可以研究一二


```html
<div class="wrapper wrapper-content">

  <div class="row container">
    <div class="col-md-11 col-md-offset-1">
    <textarea name="content" data-provide="markdown" rows="10">
h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

* this one
* that one
* the other one
    </textarea>
  </div>
</div>
```


直接用 textarea 添加一个属性 `data-provide="markdown"` 就可以了
