import React, { Component } from 'react'
import api   from "../services/api"
import prev  from '../assets/img/prev.svg'
import next  from '../assets/img/next.svg'

export default class Posts extends Component {
	state = {
		posts: [],
		meta: {},
		api_token: ""
	}

	componentWillMount() {
		this.setState({ api_token: process.env.REACT_APP_API_TOKEN })
	}

	componentDidMount() {
		this.getData(1)
	}

	getData = async (page) => {
		const response = await api.GET( `posts?_format=json&access-token=${this.state.api_token}&page=${page}` )

		if (response._meta.success)
			this.setState({ posts: response.result, meta: response._meta })
	}

	toPage(page) {
		if ( page >= 1 && page <= this.state.meta.pageCount )
			this.getData(page)
	}

	render() {
		const { posts, meta } = this.state
		let pages = []

		for (let i = 1 ; i <= meta.pageCount; i++) {
        	pages.push(<li onClick={ e => this.toPage({i}) } key={i}>{i}</li>)
        }


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
								        { pages }
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