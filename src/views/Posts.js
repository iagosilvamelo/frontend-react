import React, { Component } from 'react'
import api   from "../services/api"
import prev  from '../assets/img/prev.svg'
import next  from '../assets/img/next.svg'

export default class Posts extends Component {
	state = {
		posts: [],
		meta: {}
	}

	componentWillMount() {
		this.getData(1)
	}

	getData = async (page) => {
		const endpoint = `posts?_format=json&access-token=TfUldxlrFHaqlwswhQYWBhLFFxmtS77WM66z&page=${page}`
		const response = await api.GET(endpoint)

		if (response._meta.success)
			this.setState({ posts: response.result, meta: response._meta })
	}

	render() {
		const { posts, meta } = this.state

		return (
			<section>

				<h1 className='content-title'>Últimas postagens</h1>

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
							{ posts.map( data => (
								<tr key={ data.id }>
									<td>{ data.title }</td>
									<td>{ data.body }</td>
									<td>{ data.date }</td>
								</tr>
							)) }
						</tbody>

						<tfoot>
							<tr>
								<td>Exibindo { meta.perPage } postagens</td>
								<td></td>
								<td>
									<ul className="pages">
								        <li><img src={prev} alt="Anterior"/></li>

								        { for (let i = 1 ; i <= meta.pageCount; i++) {
								        	<li>meta.pageCount</li>
								        } }

								        <li><img src={next} alt="Próximo"/></li>
								    </ul>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>

			</section>
		)
	}
}