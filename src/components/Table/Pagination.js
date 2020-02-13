import React from 'react'
import prev  from '../../assets/img/prev.svg'
import next  from '../../assets/img/next.svg'

const Pagination = () => {
	return (
		<tr>
			<td>Exibindo 9 postagens</td>
			<td></td>
			<td>
				<ul className="pages">
                    <li><img src={prev} alt="Anterior"/></li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li><img src={next} alt="Próximo"/></li>
                </ul>
			</td>
		</tr>
	)
}

export default Pagination