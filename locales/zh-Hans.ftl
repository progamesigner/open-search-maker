title = Open Search 生成器

footer = 由 <author>Yang Sheng Han</author> 用 <heart>{ $heart }</heart> 开发

xml-preview =
  .tab = Open Search XML 文件
  .message = 需要名称及有效网址。

help-title = 几乎完成！
help-step-1 = 在网址栏上<bold>右键点击</bold>。
help-step-2 = 点击<bold>添加"{ $name }"</bold>。
help-step-3 = 前往 <marker>about:preferences#search</marker> 查看您已安装的搜索引擎。

dialog-error-title = 发生错误！

control-show-advanced-options = 显示高级选项
control-name-input =
  .label = 搜索引擎名称
  .placeholder = 示例搜索引擎
control-description-input =
  .label = 搜索引擎描述
control-url-input =
  .label = 搜索请求网址
control-url-input-hint = 变量 <placeholder>%s</placeholder> 将会被替换成 <name>&#123;searchTerms&#125;</name> 参数。
control-post-input = 使用 <code>POST</code> 查询参数
control-icon-input =
  .browser = 浏览
  .label = 图标
control-icon-input-hint = 图标大小至少要 { $size }&#215;{ $size } 像素 - 这里也接受 <hyperlink>Data URLs</hyperlink>。
control-encoding-input =
  .label = 输入编码
control-suggestion-url-input =
  .label = 搜索建议请求网址
control-suggestion-url-input-hint = <placeholder>%s</placeholder> 将会被替换成输入的搜索查询 (<code>&#123;searchTerms&#125;</code>)，并将作为 <code>application/x-suggestions+json</code> 类型的网址。

button-back = 返回首页
button-confirm = 确认
button-submit =
  { $status ->
    [pending] 生成中……
   *[other] 生成
  }
