/* globals HtmlService */

/**
 * @typedef RenderTemplateOptions
 * @type {object}
 * @property {string} title - title.
 * @property {string} path - your name.
 * @property {object} props - data that will be available in scriptlets via the 'props' variable.
 * @property {number} width - width.
 * @property {number} height - height.
 */

/**
 * Create HtmlOutput object from template
 * @param {RenderTemplateOptions} options
 * @returns HtmlOutput
 */
function renderTemplate(options) {
  const {
    title,
    path,
    props,
    width,
    height,
  } = options

  const template = HtmlService.createTemplateFromFile(path)

  // Render html
  const html = template.evaluate()

  // Add data to template
  if (props) {
    const content = html.getContent()
    const [before, after] = content.split('<head>')
    const inject = `<script>var props = ${JSON.stringify(props)} </script>`
    const contentWithProps = [before, '<head>', inject, after].join('')
    html.setContent(contentWithProps)
  }

  if (title) {
    html.setTitle(title)
  }
  if (width) {
    html.setWidth(width)
  }
  if (height) {
    html.setHeight(height)
  }
  return html
}

export default renderTemplate;
