# 代码格式化指南 本项目使用 Prettier 进行代码格式化，确保代码风格的一致性。

安装 格式化工具已作为开发依赖项包含在项目中，安装依赖时会自动安装： `bash npm
install ` ## 使用方法 ### 命令行使用 - **格式化所有文件**： `bash npm run
format ` - **检查格式（不修改文件）**： `bash npm run format:check ` ###
VS Code 集成 项目已配置 VS Code 设置，支持： - 保存时自动格式化 -
为不同文件类型指定 Prettier 作为默认格式化工具 - 推荐安装 Prettier 扩展 ###
支持的文件类型 - Markdown (`.md`) - JavaScript (`.js`) - CSS (`.css`) - HTML
(`.html`) - JSON (`.json`) - YAML (`.yaml`, `.yml`) ## 配置文件 - `.prettierrc`

- Prettier 配置 - `.prettierignore` - 忽略格式化的文件 - `.vscode/settings.json`
- VS Code 格式化设置 ## 格式化规则 - 使用单引号 - 行宽限制：80 字符 - 缩进：2
  个空格 - 结尾分号：启用 - 换行符：LF
