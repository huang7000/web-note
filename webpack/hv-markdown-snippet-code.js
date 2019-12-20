module.exports = [
  require("markdown-it-container"),
  "hv-markdown-snippet-code",
  {
    validate: function(params) {
      return params.trim().match(/^snippet\s*(.*)$/);
    },
    render(tokens, index) {
      let { nesting, info } = tokens[index];
      if (nesting === 1) {
        let content = info.trim().match(/^snippet\s+(.*)$/) || [];
        let description = content.length > 1 ? content[1] : "";
        description = description.replace("---", "");
        return `<div class="hv-snippet--tag hv-snippet--tag-${description}">${description}</div>`;
      } else {
        return `\n`;
      }
    },
    marker: "-"
  }
];
