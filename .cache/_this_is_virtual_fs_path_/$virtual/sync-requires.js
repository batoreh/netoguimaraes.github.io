
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/awcr3d/proj/netoguimaraes.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/awcr3d/proj/netoguimaraes.github.io/src/pages/index.js")),
  "component---src-templates-post-jsx": preferDefault(require("/home/awcr3d/proj/netoguimaraes.github.io/src/templates/Post.jsx"))
}

