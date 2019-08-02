##参数

|   参数名   |   类型   |   可选参数   |   默认值   |  描述    |
| -------- | -------- | ----------- | --------- | -------- |
| type  | string | success,warn,info,error | success | 设置alert提示框的主题风格 |
| showIcon | boolean | true,false | false | 是否显示icon图标 |
| message  | string  | -- | '' | 默认标题内容 |
| description | string | -- | '' | 默认详情描述信息 |
| closeable   | boolean | true,false | true | 设置默认状态下是否显示关闭按钮 |
| closeText   | string  | -- | x | 默认关闭按钮样式 |

##方法

|   方法名   |   说明   |
| --------- | -------- |
| beforeClose | alert提示框关闭前操作 |
| onClose | 点击关闭按钮关闭时操作 |