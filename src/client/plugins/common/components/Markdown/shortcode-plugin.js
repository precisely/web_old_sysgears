import _ from 'lodash';

export default function shortcodePlugin(md, shortcodes) {
  const defaultRuleIndex = md.block.ruler.__find__('html_block');
  if (defaultRuleIndex < 0 || !shortcodes) return;

  const tags = Object.getOwnPropertyNames(shortcodes);
  if (tags.length < 1) return;
  for (const tag of tags) {
    if (typeof shortcodes[tag].render !== 'function') {
      throw new Error('missing render function for shortcode tag: ' + tag);
    }
  }

  const reName = '([a-zA-Z_:][a-zA-Z0-9:._-]*)';
  const reNumber = '(-?(?:\\d*\\.\\d+|\\d+)(?:[eE]-?\\d+)?)';
  const reString = '(\'[^\']*\'|"[^"]*")';
  const reExpr = '({.*})';

  const reAttrs = new RegExp(
    '\\s+' + reName + '(?:\\s*=\\s*(?:' + reNumber + '|' + reString + '|' + reExpr + '))?',
    'g'
  );

  const reTag = /^<(\w+)/;

  function testTag(content) {
    const blockTag = reTag.exec(content);
    if (!blockTag) return false;
    return tags.find(tag => tag === blockTag[1]);
  }

  md.core.ruler.after('block', 'shortcode', function(state) {
    let tokens = state.tokens;

    if (!state.md.options.html) return;

    for (let i = tokens.length - 1; i >= 0; i--) {
      const currentToken = tokens[i];

      if (currentToken.type !== 'html_block') continue;

      const tag = testTag(currentToken.content);

      if (!tag || !shortcodes[tag].inline) continue;

      let token,
        level = currentToken.level;
      const nodes = [];

      token = new state.Token('paragraph_open', 'p', 1);
      token.level = level++;
      nodes.push(token);

      token = new state.Token('inline', '', 0);
      token.content = currentToken.content;
      token.level = level;
      token.children = [];
      nodes.push(token);

      token = new state.Token('paragraph_close', 'p', -1);
      token.level = --level;
      nodes.push(token);

      state.tokens = tokens = md.utils.arrayReplaceAt(tokens, i, nodes);
    }
  });

  const fallback = function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  const defaultRender = {
    html_block: md.renderer.rules.html_block || fallback,
    html_inline: md.renderer.rules.html_inline || fallback
  };

  function render(tokens, idx, options, env, self) {
    const content = tokens[idx].content;

    let parameters = {};
    let attr = reAttrs.exec(content);
    while (attr) {
      if (attr[4]) {
        // expr
        let expr = attr[4].slice(1, -1).trim();
        parameters[attr[1]] = (expr, env);
      } else if (attr[3]) {
        //quoted
        parameters[attr[1]] = attr[3].slice(1, -1);
      } else if (attr[2]) {
        //number
        parameters[attr[1]] = parseFloat(attr[2]);
      } else {
        parameters[attr[1]] = true;
      }
      attr = reAttrs.exec(content);
    }

    const tag = testTag(content);
    if (tag) {
      return shortcodes[tag].render(parameters, env);
    }

    return defaultRender[tokens[idx].type](tokens, idx, options, env, self);
  }

  md.renderer.rules.html_block = md.renderer.rules.html_inline = render;
};
