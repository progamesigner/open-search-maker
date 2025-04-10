title = Open Search Maker

footer = Made with <heart>{ $heart }</heart> by <author>progamesigner</author>

xml-preview =
  .tab = Open Search XML
  .message = Name & valid URLs are required.

help-title = Almost done!
help-step-1 = <bold>Right-click</bold> on the address bar.
help-step-2 = Click <bold>Add "{ $name }"</bold>.
help-step-3 = Go to <marker>about:preferences#search</marker> to see your installed search engines.

dialog-error-title = Something Wrong!

control-show-advanced-options = Show Advanced Options
control-name-input =
  .placeholder = Example Name
control-description-input =
  .label = Description
control-url-input =
  .label = Search URL
control-url-input-hint = The variable <placeholder>%s</placeholder> will be substituted with query <name>&#123;searchTerms&#125;</name>.
control-post-input = Use <code>POST</code> query parameters
control-icon-input =
  .browser = Browser
  .label = Icon
control-icon-input-hint = Icon should be at least { $size }&#215;{ $size } pixels - <hyperlink>Data URLs</hyperlink> are also accepted here.
control-encoding-input =
  .label = Input Encoding
control-suggestion-url-input =
  .label = Suggestion URL
control-suggestion-url-input-hint = <placeholder>%s</placeholder> will be substituted with the entered search query (<code>&#123;searchTerms&#125;</code>) and will be <code>application/x-suggestions+json</code> type URL.

button-back = Back
button-confirm = Ok
button-submit =
  { $status ->
    [pending] Making ...
   *[other] Make
  }
