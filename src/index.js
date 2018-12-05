import { h, render, Component } from 'preact'

const Name = () => <h1 id="name">evillt</h1>

class Clock extends Component {
  constructor() {
    super()

    this.state.time = Date.now()
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render(props, state) {
    const time = new Date(state.time).toLocaleTimeString()
    return <span>{ time }</span>
  }
}

render((
  <div>
    <Name></Name>
    <Clock></Clock>
  </div>
), document.querySelector('app'))