const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1Hive/communication'

const pages = [
  {
		destination: 'docs/sync/contributing-welcome.md',
    id: 'contributing-welcome',
    sidebarLabel: 'Welcome',
    title: 'Hi! Let\'s change the world, together.',
    contentLocation: 'docs/contributing-welcome.md'
  },
  {
		destination: 'docs/sync/projects-welcome.md',
    id: 'projects-welcome',
    sidebarLabel: 'Welcome',
    title: 'Welcome',
    contentLocation: 'docs/projects-welcome.md'
  },
  {
    destination: 'docs/sync/communication-github.md',
    id: 'communication-github',
    sidebarLabel: 'Navigating Our GitHub',
    title: 'Navigating Our GitHub',
    contentLocation: 'docs/github.md'
  },
  {
    destination: 'docs/sync/communication-keybase.md',
    id: 'communication-keybase',
    sidebarLabel: 'Joining Our Chat',
    title: 'Joining Our Community Chat',
    contentLocation: 'docs/keybase.md'
	},
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
