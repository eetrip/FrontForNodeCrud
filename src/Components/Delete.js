import axios from "axios";

class Delete {
  deleteNote(id) {
    axios
      .delete("http://localhost:3000/notes/" + id)
      .then(() => {
        console.log("Employee Deleted !!!");
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Delete;
