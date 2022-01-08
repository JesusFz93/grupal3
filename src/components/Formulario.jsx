import React, {useState} from 'react'



export const Formulario = () => {

    const [name, setName] = useState('')
    const [username, setUser] = useState('')
    const [mail, setEmail] = useState('')


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
                            className="form-control input-md"
                            onChange={(e) => setName(e.target.value)}
                            />
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
                            className="form-control input-md"
                            onChange={(e) => setUser(e.target.value)}
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label">
                        Email
                    </label>
                    <div>
                        <input
                            id="mail"
                            name="mail"
                            type="email"
                            className="form-control input-md"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                </div>
            </form>
        </div>
    )
}