import { elMenuProps } from  '@element-plus'

export const TchMenu: elMenuProps['items'] = [
	{
		label: '考试列表',
		key: '/examlist',
	},
	{
		label: '教师阅卷',
		key: '/grandinglist',
	},
]

export const AdmMenu: elMenuProps['items'] = [
	{
		label: '考试管理',
		key: '/exammanage',
	},
	{
		label: '教师管理',
		key: '/tchmanage',
	},
	{
		label: '考试列表',
		key: '/examlist',
	},
	{
		label: '教师阅卷',
		key: '/grandinglist',
	},
]

export const DropDownMenu: elMenuProps['items'] = [
	{
		key: 'changeuser',
		label: '切换账号',
	},
	{
		key: 'changepwd',
		label:' 修改密码',
	},
	{
		key: 'logout',
		label:' 退出登录',
	},
]
