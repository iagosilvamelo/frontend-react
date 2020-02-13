import React, { Component } from 'react'
import Pagination from './Pagination'
import api  from "../../services/api"

import './styles.scss'

export default class Table extends Component {
	state = {
		rows: [],
	}

	componentDidMount() {
		this.mountRows()
		console.log(this)
	}

	mountRows = () => {
		let rows = []

		for (let i = 0; i > 10; i++) {
			rows.push(
				<tr>
					<td>Lorem ipsum dolor amet</td>
					<td>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</td>
					<td>19/05/2019</td>
				</tr>
			)
		}

		this.setState({ rows: rows })
	}

	render() {
		return (
			<div className="table-content">
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Conteúdo</th>
							<th>Data de publicação</th>
						</tr>
					</thead>

					<tbody>
						{ this.props.datatable }
					</tbody>

					<tfoot>
						<Pagination />
					</tfoot>
				</table>
			</div>
		)
	}
}