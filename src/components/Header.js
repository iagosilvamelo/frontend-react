import React from 'react'

const Header = () => {
	const logoMoovin = 'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.png'

	return (
		<div className='Header'>
			<img alt='Logo da Moovin' src={ logoMoovin } />
		</div>
	)
}

export default Header
