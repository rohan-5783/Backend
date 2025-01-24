import { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [isForm, setIsForm] = useState(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    ProductName: "",
    image: "",
    ProductPrice: "",
    ProductDescription: "",
    id: "",
  });

  function Fetchdata() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Fetchdata();
  }, []);

  function handleSubmit(e) {
    e.preventDefault(); 
    if (isForm) {
      axios
        .put(`http://localhost:3000/Updateproduct/${form.id}`, form)
        .then(() => {
          Fetchdata();
          setForm({ ProductName: "", image: "", ProductPrice: "", ProductDescription: "", id: "" });
          setIsForm(false); 
        })
        .catch((err) => console.log(err));
    } else {
      
      axios
        .post("http://localhost:3000/addproduct", form)
        .then((res) => {
          console.log(res);
          Fetchdata(); 
          setForm({ ProductName: "", image: "", ProductPrice: "", ProductDescription: "", id: "" }); // Reset form
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/deleteproduct/${id}`)
      .then((res) => {
        console.log("Deleted:", res.data);
        Fetchdata();
      })
      .catch((err) => {
        console.error("Error deleting the item:", err.response ? err.response.data : err.message);
      });
  }

  function handleEdit(el) {
    setIsForm(true);
    setForm(el);
  }

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className="Form">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h2>Todo Component</h2>
          <input
            type="text"
            name="ProductName" // Match with state property
            placeholder="Enter Product Title"
            value={form.ProductName}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="image"
            placeholder="Enter Product Image URL"
            value={form.image}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="ProductPrice" // Match with state property
            placeholder="Enter Product Price"
            value={form.ProductPrice}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="ProductDescription" // Match with state property
            placeholder="Enter Product Description"
            value={form.ProductDescription}
            onChange={handleInputChange}
            className="input-field"
          />
          <button type="submit" className="Submit">
            {isForm ? 'Update Product' : 'Add Product'}</button>
        </form>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "1000px", margin: "auto" }}>
        {data.map((el) => (
          <div className="card" key={el.id}>
            <img src={el.image} alt={el.ProductName} height={200} width={200} />
            <h2>{el.ProductName}</h2>
            <h3>{el.ProductDescription}</h3>
            <h2>{el.ProductPrice}</h2>
            <button onClick={() => handleDelete(el.id)} className="delete-btn">Delete</button>
            <button onClick={() => handleEdit(el)} className="edit-btn">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
