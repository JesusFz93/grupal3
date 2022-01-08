import React from 'react'


export const Formulario = () => {
    return (
            <form>
                <div className="form-group">
                    <label className="col-md-4 control-label">
                        Nombre
                    </label>
                    <div className="col-md-5">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control input-md"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">
                        Usuario
                    </label>
                    <div className="col-md-5">
                        <input
                            id="user"
                            name="user"
                            type="text"
                            className="form-control input-md"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">
                        Email
                    </label>
                    <div className="col-md-5">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control input-md"/>
                    </div>
                </div>
            </form>
    )
}