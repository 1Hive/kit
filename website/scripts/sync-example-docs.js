const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/standards'

const pages = [
  {
    destination: 'docs/sync/example-basic-info.md',
    id: 'basic-info',
    title: '1Hive Redemptions App: Basic Info',
    sidebarLabel: 'Basic Info',
    contentLocation: 'docs/basic-info.md'
  },
  {
    destination: 'docs/sync/example-user-guide.md',
    id: 'user-guide',
    title: '1Hive Redemptions App: User Guide',
    sidebarLabel: 'User Guide',
    contentLocation: 'docs/user-guide.md'
  },
  {
    destination: 'docs/sync/example-dev-guide.md',
    id: 'dev-guide',
    title: '1Hive Redemptions App: Dev Guide',
    sidebarLabel: 'Dev Guide',
    contentLocation: 'docs/dev-guide.md'
  }
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
