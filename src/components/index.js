/* eslint-disable no-alert, no-console, no-unused-vars */

import Vue from 'vue'
const requireContext = require.context('./', false, /.*\.vue$/)
requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    let Component = component.default || component
    Vue.component(Component.name, Component)
  }, {})