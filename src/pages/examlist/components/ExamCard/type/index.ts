export interface titleProps{
    status: 'waiting' | 'pending' | 'finished'
	title: string
	id: string | number
}

export interface descriptionProps {
	time: string
	grade: string
	analysis: 'waiting' | 'published' | 'processing'
}

export interface rankingButtonProps {
    id: string | number
}