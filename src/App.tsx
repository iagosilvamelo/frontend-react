import React from 'react'

const App: React.FC = () => {
	const logoMoovinSvg = 'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.svg'
	const logoMoovinPng = 'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.png'

	return (
		<div className='App'>
			<img alt='Logo da Moovin' src={ logoMoovinPng } />
		</div>
	)
}

export default App
