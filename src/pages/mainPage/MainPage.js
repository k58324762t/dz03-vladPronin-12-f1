import React from 'react'
import News from '../../constructor/news/News'

class MainPage extends React.Component {
	constructor(el) {
		super(el)

		this.state = { openNews: false }
		this.opennews = this.opennews.bind(this)
	}

	opennews() {
		this.setState({ openNews: !this.state.openNews })
	}

	render() {
		return (
			<>
				{this.state.openNews && <News></News>}

				<button onClick={this.opennews}>close</button>
			</>
		)
	}
}
export default MainPage
