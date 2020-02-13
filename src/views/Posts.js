import React, { Component } from 'react'
import Table from '../components/Table'
import api  from "../services/api"

export default class Posts extends Component {
	state = {
		posts: null
	}

	componentDidMount() {
		this.getData()
	}

	getData = async () => {
		const endpoint = `posts?_format=json&access-token=TfUldxlrFHaqlwswhQYWBhLFFxmtS77WM66z&page=1`
		const response = await api.GET(endpoint)
		this.setState({ posts: response.result })
	}

	render() {
		return (
			<section>

				<h1 className='content-title'>Últimas postagens</h1>
				<Table datatable={ this.state.posts } />

			</section>
		)
	}
}