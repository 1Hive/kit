const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/redemptions-app'

const pages = [
  {
    destination: 'docs/sync/redemptions-overview.md',
    id: 'redemptions-overview',
    sidebarLabel: 'Overview',
    title: '1Hive Redemptions App: overview',
    contentLocation: 'docs/overview.md'
  },
  {
    destination: 'docs/sync/redemptions-github.md',
    id: 'redemptions-basic-info',
    sidebarLabel: 'Basic Info',
    title: '1Hive Redemptions App: basic info',
    contentLocation: 'docs/basic-info.md'
  },
  {
    destination: 'docs/sync/redemptions-user-guide.md',
    id: 'redemptions-user-guide',
    sidebarLabel: 'User Guide',
    title: '1Hive Redemptions App: user guide',
    contentLocation: 'docs/user-guide.md'
  },
  {
    destination: 'docs/sync/redemptions-dev-guide.md',
    id: 'redemptions-dev-guide',
    sidebarLabel: 'Dev Guide',
    title: '1Hive Redemptions App: dev guide',
    contentLocation: 'docs/dev-guide.md'
  }
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
