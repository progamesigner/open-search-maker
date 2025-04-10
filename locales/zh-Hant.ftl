title = Open Search 產生器

footer = 由 <author>Yang Sheng Han</author> 用 <heart>{ $heart }</heart> 開發

xml-preview =
  .tab = Open Search XML 檔案
  .message = 需要名稱及有效網址。

help-title = 幾乎完成！
help-step-1 = 在網址列上<bold>按右鍵</bold>。
help-step-2 = 點擊<bold>新增「{ $name }」</bold>。
help-step-3 = 前往 <marker>about:preferences#search</marker> 查看您已安裝的搜尋引擎。

dialog-error-title = 發生錯誤！

control-show-advanced-options = 顯示進階選項
control-name-input =
  .label = 搜尋引擎名稱
  .placeholder = 範例搜尋引擎
control-description-input =
  .label = 搜尋引擎描述
control-url-input =
  .label = 搜尋請求網址
control-url-input-hint = 變數 <placeholder>%s</placeholder> 將會被取代成 <name>&#123;searchTerms&#125;</name> 參數。
control-post-input = 使用 <code>POST</code> 查詢參數
control-icon-input =
  .browser = 瀏覽
  .label = 圖示
control-icon-input-hint = 圖示大小至少要 { $size }&#215;{ $size } 像素 - 這裡也接受 <hyperlink>Data URLs</hyperlink>。
control-encoding-input =
  .label = 輸入編碼
control-suggestion-url-input =
  .label = 搜尋建議請求網址
control-suggestion-url-input-hint = <placeholder>%s</placeholder> 將會被取代成輸入的搜尋查詢 (<code>&#123;searchTerms&#125;</code>)，並將作為 <code>application/x-suggestions+json</code> 類型的網址。

button-back = 回到首頁
button-confirm = 確認
button-submit =
  { $status ->
    [pending] 產生中⋯⋯
   *[other] 產生
  }
