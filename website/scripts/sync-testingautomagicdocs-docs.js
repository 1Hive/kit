const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/testing-automagic-docs'

const pages = [
  {
    destination: '/docs/am-doc1.md',
    id: 'am-doc1',
    title: 'Testing Auto-Magic Doc1',
    sidebarLabel: 'AM-Doc1',
    hideTitle: true,
    contentLocation: 'docs/doc1.md'
  },
  {
    destination: '/docs/am-doc2.md',
    id: 'am-doc2',
    title: 'Testing Auto-Magic Doc2',
    sidebarLabel: 'AM-Doc2',
    hideTitle: true,
    contentLocation: 'docs/doc2.md'
  },
  {
    destination: '/docs/am-doc3.md',
    id: 'am-doc3',
    title: 'Testing Auto-Magic Doc3',
    sidebarLabel: 'AM-Doc3',
    hideTitle: true,
    contentLocation: 'docs/doc3.md'
  }
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
