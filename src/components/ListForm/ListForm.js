
import './ListForm.css';

const ListForm = props => {

    return (
      <section className="ingredient-form">
          <div className="card">
              <form>
                <span className="form-control">
                  <input type="text" id="todo" placeholder="Add a todo"/>
                </span>
                <span className="ingredient-form__actions">
                  <button type="submit">Add</button>
                </span>
              </form>
          </div>
      </section>
    );
    
}

export default ListForm;