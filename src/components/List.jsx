import React from 'react'

const List = () => {
  return (
    <div className="row m-4">
      <div className="col-3">
        <img src="" className="card-img-left" alt="Producto" />
      </div>
      <div className=" col-3">
        <p>Papa amarilla</p>
        <button type="button" className="btn btn-outline-secondary"><i class="far fa-trash-alt mr-3"></i>Eliminar</button>
      </div>
      <div className="col-4">
        unidades
      </div>
    </div>
  );
}
export default List
