

// let values = [0, 0, 0, 2, 2, 2, 0];

let response: Response = [];

let cells = [
  { "x": -1, "y": 1, "z": 0, "value": 0},
  { "x": -1, "y": 0, "z": 1, "value": 0},
  { "x": 0, "y": 1, "z":  -1, "value": 0},
  { "x": 0, "y": 0, "z": 0, "value": 0},
  { "x": 0, "y": -1, "z": 1, "value": 0},
  { "x": 1, "y": 0, "z":  -1, "value": 0},
  { "x": 1, "y": -1, "z":  0, "value": 0},
]
let dataStatus = 'playing';

let dataTemp: Response = [{"x": 1, "y": -1, "z":  0, "value": 0}];



class Game extends Component {

  public renderGameMain(): void {
    const containerMain = document.createElement('div');

    async function updateData() {
      let dataToSend = Array.from(cells).filter(cell => cell.value !== 0);
      console.log('Send data' + JSON.stringify(dataToSend));

        let data = await fetch('https://hex2048-lambda.octa.wtf/2', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify(dataToSend)
        }).then(responseArr => responseArr.json())
          .then(result => {
              response = result;
              return response;
          })
        return data;
    }

    updateData();

    let renderCells: Array<JSX.Element> = [];

    for (let i = 0; i < 7; i += 1) {
      renderCells.push(<Cell position={i}
        x={cells[i].x} y={cells[i].y} z={cells[i].z} value={cells[i].value} key={i}/>);
    }

    const moveCells = () => {

      function callback(cell: CellObj , i: number, a: Response) {
        if (a.length === 2) {
          if (i === 0) {
            if (cell.value === 0) {
              cell.value = a[i+1].value;
              a[i+1].value = 0;
            } else if (cell.value === a[i+1].value) {
              cell.value = cell.value * 2;
              a[i+1].value = 0;
            }
          }
        } else if (i === 0) {
          if (cell.value === 0) {
            if (a[i+1].value === a[i+2].value) {
              cell.value = a[i+1].value * 2;
              a[i+1].value = 0;
              a[i+2].value = 0;
            } else if (a[i+1].value !== 0) {
                cell.value = a[i+1].value;
                a[i+1].value = a[i+2].value;
                a[i+2].value = 0;
              } else {
                cell.value = a[i+2].value;
                a[i+1].value = 0;
                a[i+2].value = 0;
              }
          } else if (cell.value === a[i+1].value) {
            cell.value = cell.value * 2;
            a[i+1].value = a[i+2].value;
            a[i+2].value = 0;
          } else if (cell.value === a[i+2].value && a[i+1].value === 0) {
            cell.value = cell.value * 2;
            a[i+1].value = 0;
            a[i+2].value = 0;
          }
        } else if (i === 1) {
          if (cell.value === 0) {
            cell.value = a[i+1].value;
            a[i+1].value = 0;
          } else if (cell.value === a[i+1].value) {
            cell.value = cell.value * 2;
            a[i+1].value = 0;
          }
        }
        return cell;
      }

      document.addEventListener('keydown', (e) => {
        let tempArr1: Response = [];
        let tempArr2: Response = [];
        let tempArr11: Response = [];
        let tempArr22: Response = [];
        let tempArr33: Response = [];

        if (e.code === 'KeyW') {
          for (let i = -1; i <= 1; i +=1) {
            tempArr1 = cells.filter(cell => cell.x === i).map((cell, j, a) => callback(cell, j, a))
            tempArr2.push(...tempArr1);
          }
          cells = tempArr2;
          updateData();

        } else if (e.code === 'KeyS') {
            for (let i = -1; i <= 1; i +=1) {
              tempArr1 = cells.filter(cell => cell.x === i).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              tempArr2.push(...tempArr1);
            }
            cells = tempArr2;
            updateData();

        } else if (e.code === 'KeyQ') {
              tempArr11 = cells.filter(cell => cell.z === -1).map((cell, j, a) => callback(cell, j, a));
              tempArr22 = cells.filter(cell => cell.z === 0).map((cell, j, a) => callback(cell, j, a));
              tempArr33 = cells.filter(cell => cell.z === 1).map((cell, j, a) => callback(cell, j, a));

            tempArr2.push(tempArr22[0],tempArr33[0], tempArr11[0], tempArr22[1], tempArr33[1], tempArr11[1], tempArr22[2]);
            cells = tempArr2;
            updateData();

        } else if (e.code === 'KeyD') {
              tempArr11 = cells.filter(cell => cell.z === -1).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              tempArr22 = cells.filter(cell => cell.z === 0).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              tempArr33 = cells.filter(cell => cell.z === 1).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
            tempArr2.push(tempArr22[0],tempArr33[0], tempArr11[0], tempArr22[1], tempArr33[1], tempArr11[1], tempArr22[2]);
            cells = tempArr2;
            updateData();

          } else if (e.code === 'KeyA') {
            console.log('a');
              tempArr11 = cells.filter(cell => cell.y === -1).map((cell, j, a) => callback(cell, j, a));
              tempArr22 = cells.filter(cell => cell.y === 0).map((cell, j, a) => callback(cell, j, a));
              tempArr33 = cells.filter(cell => cell.y === 1).map((cell, j, a) => callback(cell, j, a));
              console.log(tempArr11, tempArr22, tempArr33)

            tempArr2.push(tempArr33[0], tempArr22[0], tempArr33[1], tempArr22[1], tempArr11[0], tempArr22[2], tempArr11[1]);
            cells = tempArr2;
            updateData();

        } else if (e.code === 'KeyE') {
            console.log('e');
              tempArr11 = cells.filter(cell => cell.y === -1).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              tempArr22 = cells.filter(cell => cell.y === 0).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              tempArr33 = cells.filter(cell => cell.y === 1).reverse().map((cell, j, a) => callback(cell, j, a)).reverse();
              console.log(tempArr11, tempArr22, tempArr33)

              tempArr2.push(tempArr33[0], tempArr22[0], tempArr33[1], tempArr22[1], tempArr11[0], tempArr22[2], tempArr11[1]);
            cells = tempArr2;
            updateData();
        }
      })
    }


    moveCells();


    this.container.append(containerMain);
  }

  render(): HTMLElement {
    this.renderGameMain();
    return this.container;
  }
}

export default Game;

