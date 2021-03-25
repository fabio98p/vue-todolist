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
					todoInEdit: false,
				},
				{
					todoText: 'fai la spesa',
					todoFinished: 'nope',
					todoInEdit: false,
				},
				{
					todoText: 'compra il pane',
					todoFinished: 'nope',
					todoInEdit: false,
				},
				{
					todoText: 'osserva la pizza',
					todoFinished: 'nope',
					todoInEdit: false,
				},
			],


		},
		methods: {

			newTodo: function () {
				if (this.newTextTodo != '') {
					this.listTodo.push({
						todoText: this.newTextTodo,
						todoFinished: 'nope',
						todoInEdit: false,
					})
					this.newTextTodo = '';
				}
			},

			editTodo: function (todo) {
				if (todo.todoInEdit) {
					todo.todoInEdit = false;
				} else {
					todo.todoInEdit = true;
				}
			},


			checkTodo: function name(todo) {
				console.log(todo);
				todo.todoFinished = 'yep'
			},

			removeTodo: function name(todo) {
				console.log(todo);
				this.listTodo.splice(this.listTodo.indexOf(todo), 1)
			},
		},
		computed: {
			orderedlistTodo: function () {
				let todoNotFinished = this.listTodo.filter((e) => e.todoFinished == 'nope')
				let todoFinished = this.listTodo.filter((e) => e.todoFinished == 'yep')
				return [...todoNotFinished, ...todoFinished]
			}
		},
	})
});