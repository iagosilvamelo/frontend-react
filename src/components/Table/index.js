import React from 'react'

const Table = () => {
	return (
		<table>
			<thead>
				<th>Título</th>
				<th>Conteúdo</th>
				<th>Data de publicação</th>
			</thead>

			<tbody>
				<tr>
					<td>Lorem ipsum dolor amet</td>
					<td>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</td>
					<td>19/05/2019</td>
				</tr>

				<tr>
					<td>Lorem ipsum dolor amet</td>
					<td>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</td>
					<td>19/05/2019</td>
				</tr>

				<tr>
					<td>Lorem ipsum dolor amet</td>
					<td>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</td>
					<td>19/05/2019</td>
				</tr>

				<tr>
					<td>Lorem ipsum dolor amet</td>
					<td>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</td>
					<td>19/05/2019</td>
				</tr>
			</tbody>

			<tfoot>
				<tr>
					<td>Exibindo 9 postagens</td>
					<td></td>
					<td> 1 2 3 </td>
				</tr>
			</tfoot>
		</table>
	)
}

export default Table