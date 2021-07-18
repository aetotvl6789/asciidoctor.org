var idMapping = {
  '': '/reveal.js-converter/latest/',
  'ruby-setup': '/reveal.js-converter/latest/setup/ruby-setup/',
  'prerequisites': '/reveal.js-converter/latest/setup/ruby-setup/#prerequisites',
  'install': '/reveal.js-converter/latest/setup/ruby-setup/#install',
  'rendering-the-asciidoc-into-slides': '/reveal.js-converter/latest/setup/ruby-setup/#rendering-the-asciidoc-into-slides',
  'node-javascript-setup': '/reveal.js-converter/latest/setup/node-js-setup/',
  'prerequisites-2': '/reveal.js-converter/latest/setup/node-js-setup/#prerequisites',
  'node-install': '/reveal.js-converter/latest/setup/node-js-setup/#install',
  'convert-asciidoc-into-slides': '/reveal.js-converter/latest/setup/node-js-setup/#convert-asciidoc-into-slides',
  'using-the-javascript-api': '/reveal.js-converter/latest/setup/node-js-setup/#using-the-javascript-api',
  'standalone-executable': '/reveal.js-converter/latest/setup/standalone-executable/',
  'install-2': '/reveal.js-converter/latest/setup/standalone-executable/#install',
  'convert-asciidoc-into-slides-2': '/reveal.js-converter/latest/setup/standalone-executable/#convert-asciidoc-into-slides',
  'syntax-examples': '/reveal.js-converter/latest/converter/features/',
  'basic-presentation-with-speaker-notes': '/reveal.js-converter/latest/converter/features/#basic-presentation-with-speaker-notes',
  'slides-without-titles': '/reveal.js-converter/latest/converter/features/#slides-without-titles',
  'background-colors': '/reveal.js-converter/latest/converter/syntax/background/#background-colors',
  'using-asciidoc-roles': '/reveal.js-converter/latest/converter/syntax/background/#using-asciidoc-roles',
  'classic': '/reveal.js-converter/latest/converter/syntax/background/#classic',
  'background-images': '/reveal.js-converter/latest/converter/syntax/background/#background-images',
  'background_videos': '/reveal.js-converter/latest/converter/syntax/background/#background_videos',
  'background-iframes': '/reveal.js-converter/latest/converter/syntax/background/#background-iframes',
  'slide-transitions': '/reveal.js-converter/latest/converter/syntax/transition/',
  'fragments': '/reveal.js-converter/latest/converter/syntax/fragment/',
  'stretch-class-attribute': '/reveal.js-converter/latest/converter/syntax/layout/#stretch-class-attribute',
  'videos': '/reveal.js-converter/latest/converter/syntax/video/',
  'syntax-highlighting': '/reveal.js-converter/latest/converter/syntax/syntax-highlighting/',
  'vertical-slides': '/reveal.js-converter/latest/converter/syntax/layout/#vertical-slides',
  'columns-layout': '/reveal.js-converter/latest/converter/syntax/layout/#columns-layout',
  'asciidoctor-reveal-js-specific-roles': '/reveal.js-converter/latest/converter/syntax/roles/',
  'asciidoctor-reveal-js-specific-attributes': '/reveal.js-converter/latest/converter/revealjs-options/',
  'iframe-preview-overlay': '/reveal.js-converter/latest/converter/revealjs-options/',
  'title-slide-customization': '/reveal.js-converter/latest/converter/syntax/title/',
  'content-meant-for-multiple-converters': '/reveal.js-converter/latest/converter/features/#content-meant-for-multiple-converters',
  'customcss': '/reveal.js-converter/latest/converter/custom-styles/#customcss',
  'slide-state': '/reveal.js-converter/latest/converter/syntax/state/',
  'admonitions': '/reveal.js-converter/latest/converter/syntax/admonitions/',
  'supplemental-content-with-docinfo': '/reveal.js-converter/latest/converter/docinfo/',
  'reveal-js-options': '/reveal.js-converter/latest/converter/revealjs-options/',
  'pdf-export': '/reveal.js-converter/latest/converter/pdf-export/',
  'default-plugins': '/reveal.js-converter/latest/converter/revealjs-plugins/#default-plugins',
  'additional-plugins': '/reveal.js-converter/latest/converter/revealjs-plugins/#additional-plugins',
  'minimum-requirements': '/reveal.js-converter/latest/setup/minimum-requirements/',
  'revealjs-compatibility-matrix': '/reveal.js-converter/latest/setup/compatibility-matrix/#revealjs-compatibility-matrix',
  'asciidoctorjs-compatibility-matrix': '/reveal.js-converter/latest/setup/compatibility-matrix/#asciidoctorjs-compatibility-matrix',
  'showcase-presentations': '/reveal.js-converter/latest/showcase/',
  'power-catchupeverything-practical-and-important-in-java-9-to-13': '/reveal.js-converter/latest/showcase/#power-catchupeverything-practical-and-important-in-java-9-to-13',
  'screenshots': '/reveal.js-converter/latest/showcase/#screenshots',
  'contributing': '/reveal.js-converter/latest/project/contributing/',
  'copyright-and-licensing': '/reveal.js-converter/latest/project/license/',
  'stay-connected': '/about/support/'
}
var url = idMapping[(window.location.hash || '').substr(1)] || idMapping['']
window.location.href = (url.substr(0, 8) === 'https://' ? '' : 'https://docs.asciidoctor.org') + url
