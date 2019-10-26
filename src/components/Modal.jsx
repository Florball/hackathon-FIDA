import React from 'react'

const Modal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      <h3>Demo Modal</h3>
    </button>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="close">
              </button>
            </div>
            <div className="modal-body">

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Modal
