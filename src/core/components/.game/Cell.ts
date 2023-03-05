import './style.css'

export class Cell extends Component {
  constructor(props: cellProps) {
    super(props);

    this.state = {
      position: props.position,
      value: props.value,
      x: props.x,
      y: props.y,
      z: props.z
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(response: Response): void {
    if (response.find(resElement => (resElement.x === this.state.x && resElement.y === this.state.y && resElement.z === this.state.z ))) {
      const resCell = response[response.findIndex(resElement => (resElement.x === this.state.x && resElement.y === this.state.y && resElement.z === this.state.z ))]
      this.state.value = resCell.value,

      cells[this.state.position].value = resCell.value;
    }
  }



  render(): HTMLElement {

    setTimeout(() => this.changeValue(response), 800);
    document.addEventListener('keyup', () => {
      this.changeValue(cells);
      setTimeout(() => this.changeValue(response), 800);
    })

    const xPos = this.state.x === -1 ? '8px' : this.state.x === 0 ? '150px' : '292px';
    const yPos =
      this.state.y === 0 ? this.state.x === -1 ? '251px' : this.state.x === 0 ? '173px' : '86px' :
      this.state.y === -1 ? this.state.x === 0 ? '338px' :  '251px' :
      this.state.y === 1 ? this.state.x === -1 ? '86px' : '8px' : '8px'

    this.style.setProperty('left', xPos);
    this.style.setProperty('top', yPos);

    return this.container;
  }

    return (
      <div style={cellStyle}
        data-value={this.state.value}
        data-x={this.state.x}
        data-y={this.state.y}
        data-z={this.state.z}
        key={this.state.position}>
          {this.state.value}
      </div>
    );
  };
}
