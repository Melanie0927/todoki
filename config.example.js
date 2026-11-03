// ===== Todoki 云服务配置模板 =====
// 使用步骤：
//   1. 复制本文件为 config.js（命令：cp config.example.js config.js）
//   2. 在 WorkBuddy 中打开本项目，开通云服务（Cloud Service）后，你会获得
//      属于你自己的 endpoint 和 publishableKey
//   3. 把下面两个占位值替换成你的真实值即可
//   4. config.js 已被 .gitignore 忽略，不会提交到 Git 仓库，保证密钥不泄露
window.APP_CONFIG = {
  endpoint: '替换为你的 endpoint（形如 https://xxx.app.workbuddy.host）',
  publishableKey: '替换为你的 publishableKey（形如 wbpk_xxx）',
};
