const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/communication'

const pages = [
  {
    destination: 'docs/communication-welcome.md',
    id: 'communication-welcome',
    sidebarLabel: 'Welcome',
    title: 'Hi! Let\'s change the world, together.',
    contentLocation: 'docs/welcome.md'
  },
  {
    destination: 'docs/communication-github.md',
    id: 'communication-github',
    sidebarLabel: 'Navigating Our GitHub',
    title: 'Navigating Our GitHub',
    contentLocation: 'docs/github.md'
  },
  {
    destination: 'docs/communication-keybase.md',
    id: 'communication-keybase',
    sidebarLabel: 'Joining Our Chat',
    title: 'Joining Our Community Chat',
    contentLocation: 'docs/keybase.md'
	},
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
