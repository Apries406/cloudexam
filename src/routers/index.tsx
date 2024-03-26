import { ExamList } from '../pages/examlist'
import { GradeList } from '../pages/examlist/pages/grade'
import { ExamManage } from '../pages/exammanage'
import { ExamManagementById } from '../pages/exammanage/pages/management'
import { HomePage } from '../pages/home'
import { ReportPage } from '../pages/report'

export const routes = [
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				path: '/exammanage',
				element: <ExamManage />,
			},
			{
				path: '/exammanage/management/:id',
				element: <ExamManagementById />,
			},
			{
				path: '/tchmanage',
				element: <div>TCHManage Page</div>,
			},
			{
				path: '/examlist',
				element: <ExamList />,
			},
			{
				path: '/examlist/gradelist/:id',
				element: <GradeList />,
			},
			{
				path: '/report',
				element: <ReportPage />,
			},
			{
				path: '/grandinglist',
				element: <GradeList />,
			},
		],
	},
	{
		path: '/stulogin',
		element: <div>STULogin Page</div>,
	},
	{
		path: '/tchlogin',
		element: <div>TCHLogin Page</div>,
	},

	{
		path: '/register',
		element: <div>Register Page</div>,
	},
	{
		path: '*',
		element: <div>404 Not Found</div>,
	},
]
