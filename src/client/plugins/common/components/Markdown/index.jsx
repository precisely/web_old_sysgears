import React from 'react';
import md from 'markdown-it';
import reactDisplayName from 'react-display-name';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import shortcodePlugin from './shortcode-plugin';

/**
 * React Markdown component
 *
 * Given markdown text,
 * <MarkdownProcessor content="# Hello <MyComponent x={a.b} y=2 />"
 *
 * @export
 * @param {Object} content - Markdown formatted content containing tags
 * @param {Object} data - Data available to components
 * @param {Array} components - Components can be referenced inside the markdown
 * @returns React component
 */
export default function Markdown({ content, components, params }) {
  const shortcodes = components.reduce((acc, component) => ({
    [reactDisplayName(component)]: attrs => {
      return ReactDOM.renderToString(component.render(attrs));
    }
  }));

  const processor = md({ html: true }).use(shortcodePlugin, shortcodes, params);

  return <div dangerouslySetInnerHTML={processor.render(content, params)} />;
}

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
  components: PropTypes.array,
  params: PropTypes.object.isRequired
};
