document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');

	var root = new Vue({
		el: '#root',
		data: {
			newTextTodo: '',
			listTodo: [
				{
					todoText: 'vai in bagno'
				},
				{
					todoText: 'fai la spesa'
				},
				{
					todoText: 'compra il pane'
				},
				{
					todoText: 'osserva la pizza'
				},
			],


		},
		methods: {

			newTodo: function () {
				console.log('new todo');
				this.listTodo.push({
					todoText: this.newTextTodo,
				})

			}

		},
		computed: {
			// // a computed getter
			// reversedMessage: function () {
			// 	// `this` points to the vm instance
			// 	return this.message.split('').reverse().join('')
			// }
		},
		created: function () {

		},
	})
});