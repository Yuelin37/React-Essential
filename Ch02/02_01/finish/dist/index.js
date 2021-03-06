const { createElement } = React
const { render } = ReactDOM

const style = {
	backgroundColor: 'blue',
	color: 'orange',
	fontFamily: 'verdana'
}

const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World'
)

render(
	title,
	document.getElementById('react-container')
)
