function Book(props) {
    return (
      <>
        <li>
            <h3>{props.title} by {props.author}</h3>
        </li>
      </>
    );
  }
  
  export default Book;
  