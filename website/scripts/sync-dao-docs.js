const { syncPages } = require('./sync-util')

const GIT_REF = 'master'
const REPO = '1hive/dao'

const pages = [
  {
    destination: 'docs/dao-allocations-payroll.md',
    id: 'dao-allocations-payroll',
    sidebarLabel: 'Allocations and Payroll',
    title: 'Community Allocations and Payroll',
    contentLocation: 'docs/allocations-payroll.md'
  },
  {
    destination: 'docs/dao-membership.md',
    id: 'dao-membership',
    sidebarLabel: 'Membership and Participation',
    title: 'Membership and Participation',
    contentLocation: 'docs/membership.md'
  },
  {
    destination: 'docs/dao-projects-tasks.md',
    id: 'dao-projects-tasks',
    sidebarLabel: 'Projects and Tasks',
    title: 'Projects and Tasks',
    contentLocation: 'docs/projects-tasks.md'
	},
  {
    destination: 'docs/dao-rewards-redemptions.md',
    id: 'dao-rewards-redemptions',
    sidebarLabel: 'Rewards and Redemptions',
    title: 'Rewards and Redemptions',
    contentLocation: 'docs/rewards-redemptions.md'
	},
	{
    destination: 'docs/dao-roles-responsibilities.md',
    id: 'dao-roles-responsibilities',
    sidebarLabel: 'Roles and Responsibilities',
    title: 'Roles and Responsibilities',
    contentLocation: 'docs/roles-responsibilities.md'
	}
]

const locationReferenceMap = {}

syncPages(pages, locationReferenceMap, GIT_REF, REPO)
