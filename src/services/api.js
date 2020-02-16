import axios from "axios"

const instance = axios.create({ baseURL: process.env.REACT_APP_API_ENDPOINT })

//
//	Adaptei um pedaço do meu projeto com Vue
//	hehehehehe
//

export default {
	async GET(route, foo = "") {
		const response = await instance.get(`${route}/${foo}`, this.instance_params).then(r => r.data);
		return response
	},

	async POST(route, data) {
		const response = await instance.post(route, data, this.instance_params).then(r => r.data);
		return response
	},

	async PUT(route, data) {
		const response = await instance.put(`${route}/${(data.id) ? data.id : data.ID}`, data, this.instance_params).then(r => r.data);
		return response
	},

	async DELETE(route, id) {
		const response = await instance.delete(`${route}/${id}`, this.instance_params, {}).then(r => r.data);
		return response
	}
}