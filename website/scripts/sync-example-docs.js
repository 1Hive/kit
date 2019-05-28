const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/standards'

const pages = [
  {
    destination: 'docs/sync/docs-example-overview.md',
    id: 'docs-example-overview',
    title: 'Overview',
    sidebarLabel: 'Overview',
    contentLocation: 'docs/overview.md'
  },
  {
    destination: 'docs/sync/docs-example-basic-info.md',
    id: 'docs-example-basic-info',
    title: 'Basic Info',
    sidebarLabel: 'Basic Info',
    contentLocation: 'docs/basic-info.md'
  },
  {
    destination: 'docs/sync/docs-example-user-guide.md',
    id: 'docs-example-user-guide',
    title: 'User Guide',
    sidebarLabel: 'User Guide',
    contentLocation: 'docs/user-guide.md'
  },
  {
    destination: 'docs/sync/docs-example-dev-guide.md',
    id: 'docs-example-dev-guide',
    title: 'Dev Guide',
    sidebarLabel: 'Dev Guide',
    contentLocation: 'docs/dev-guide.md'
  }
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
