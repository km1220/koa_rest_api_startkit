import Router from 'koa-router';

const router = new Router({
	prefix: '/books'
});

const books = [
	{ id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
	{ id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
	{ id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
	{ id: 101, name: 'Into The Wild', author: 'John Krakauer' }
];

router.get('/', (ctx, next) => {
	ctx.body = books;
	next();
});
router.get('/:id', (ctx, next) => {
	const getCurrentBook = books.filter(function (book) {
		if (book.id == ctx.params.id) {
			return true;
		}
	});
	if (getCurrentBook.length) {
		ctx.body = getCurrentBook[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Book Not Found';
	}
	next();
})

router.post('/new', (ctx, next) => {
	if (!ctx.request.body.id || !ctx.request.body.name || !ctx.request.body.author) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		books.push({
			id: ctx.request.body.id,
			name: ctx.request.body.name,
			author: ctx.request.body.author
		});
		ctx.response.status = 201;
		ctx.body = `New book added with id: ${ctx.request.body.id} & name: ${ctx.request.body.name
			}`;
	}
	next();
});


export default router.routes();