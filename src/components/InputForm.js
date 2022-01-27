import Lijst from "./Lijst";

function InputForm(props){
 
  return <div>

<form>
    <input type="text" placeholder="task" >{props.input}</input>
<button type="submit" onClick={console.log("Hello")} >Clik me</button>
    </form>



  </div>;
}

export default InputForm;
