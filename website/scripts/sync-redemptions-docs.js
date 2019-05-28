const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/redemptions-app'

const pages = [
  {
    destination: 'docs/redemptions-welcome.md',
    id: 'redemptions-welcome',
    sidebarLabel: 'Redemptions App',
    title: '1Hive Redemptions App',
    contentLocation: 'docs/welcome.md'
  },
  {
    destination: 'docs/redemptions-github.md',
    id: 'redemptions-basic-info',
    sidebarLabel: 'Basic Info',
    title: '1Hive Redemptions App: basic info',
    contentLocation: 'docs/basic-info.md'
  },
  {
    destination: 'docs/redemptions-user-guide.md',
    id: 'redemptions-user-guide',
    sidebarLabel: 'User Guide',
    title: '1Hive Redemptions App: user guide',
    contentLocation: 'docs/user-guide.md'
  },
  {
    destination: 'docs/redemptions-dev-guide.md',
    id: 'redemptions-dev-guide',
    sidebarLabel: 'Dev Guide',
    title: '1Hive Redemptions App: dev guide',
    contentLocation: 'docs/dev-guide.md'
  }
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
