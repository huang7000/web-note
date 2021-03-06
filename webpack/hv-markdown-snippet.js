module.exports = [
  require("markdown-it-container"),
  "hv-markdown-snippet",
  {
    validate: function(params) {
      return params.trim().match(/^snippet\s*(.*)$/);
    },
    render(tokens, index) {
      let { nesting, info } = tokens[index];
      if (nesting === 1) {
        // 1.获取代码块的描述内容
        let content = info.trim().match(/^snippet\s+(.*)$/) || [];
        let description = content.length > 1 ? content[1] : "";
        var md = require("markdown-it")({ html: true });
        if (description) {
          description = md.render(description);
        }
        // 2.代码块包裹
        return `
        <hv-snippet title>
        <template slot="title">${description}</template>`;
      } else {
        return `
        </hv-snippet>\n`;
      }
    }
  }
];
