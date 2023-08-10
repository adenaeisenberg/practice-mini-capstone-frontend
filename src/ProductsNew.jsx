export function ProductsNew() {
  return (
    <div id="products-new">
      <h2>Add a New Product</h2>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Price: <input type="integer" />
        </div>
        <div>
          Image Url: <input type="text" />
        </div>
      </form>
    </div>
  );
}
