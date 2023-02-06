import './InputFormBox.css';
import Card from 'react-bootstrap/Card';

function InputFormBox(props) {

  return (
    <Card>
      <center>{props.title.name}</center>
      <form>
        <label>
          :
          <input type="number" name="" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Card>
  );
}

export default InputFormBox;