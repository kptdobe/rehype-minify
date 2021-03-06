/**
 * @fileoverview
 *   Minify the doctype.
 * @example
 *   {"processor": {"fragment": false}}
 *   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head></head><body></body></html>
 */

'use strict'

var visit = require('unist-util-visit')

module.exports = doctype

function doctype() {
  return transform
}

function transform(tree) {
  visit(tree, 'doctype', visitor)
}

function visitor(node) {
  if (node.public) {
    node.public = null
  }

  if (node.system) {
    node.system = null
  }

  return false
}
