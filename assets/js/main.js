document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');

	var root = new Vue({
		el: '#root',
		data: {
			newTextTodo: '',
			listTodo: [
				{
					todoText: 'vai in bagno',
					todoFinished: 'nope',
				},
				{
					todoText: 'fai la spesa',
					todoFinished: 'nope',
				},
				{
					todoText: 'compra il pane',
					todoFinished: 'nope',
				},
				{
					todoText: 'osserva la pizza',
					todoFinished: 'nope',
				},
			],


		},
		methods: {

			newTodo: function () {
				if (this.newTextTodo != '') {
					this.listTodo.push({
						todoText: this.newTextTodo,
						todoFinished: 'nope',
					})
					this.newTextTodo = '';
				}
			},
			editTodo: function name() {
				console.log('edit');
			},
			checkTodo: function name(todo) {
				console.log('check', todo);
				todo.todoFinished = 'yep'
				console.log(this.listTodo);
			},
			removeTodo: function name() {
				console.log('remove');
			},

		},
		computed: {
			orderedlistTodo: function () {
				let todoNotFinished = this.listTodo.filter((e) => e.todoFinished == 'nope')
				let todoFinished = this.listTodo.filter((e) => e.todoFinished == 'yep')
				return [...todoNotFinished, ...todoFinished]
			}
		},
		created: function () {

		},
	})
});