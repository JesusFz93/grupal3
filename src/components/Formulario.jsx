import React from 'react'


export const Formulario = () => {
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label className="col-md-4 control-label">
                        Nombre
                    </label>
                    <div>
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
                    <div>
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
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control input-md"/>
                    </div>
                </div>
            </form>
        </div>
    )
}