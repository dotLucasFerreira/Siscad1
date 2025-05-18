import Main from '../itemtemplate/Homecontent'
import '../css/Main.css'
import axios from 'axios'
import React, { Component } from 'react'

//Atualizaçao de header com a const headerProps ao importar Main e acrescentando funcao a main
const headerProps = {
    icon: "users",
    title: "Usuarios",
    subtitle: "Incluir, Listar, Alterar e Excluir"
};
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }
    clear() {
        this.setState({ user: initialState.user })
    }
    save() {
        const user = this.state.user
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const nameRegex = /^[\p{L}0-9\s]{1,}$/u

        if (!nameRegex.test(user.name.trim())) {
            alert('O nome deve conter apenas letras, números e espaços.')
            return
        }
        if (!emailRegex.test(user.email.trim())) {
            alert('Informe um e-mail válido no formato exemplo@dominio.com')
            return
        }
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const updateUser = resp.data
                const list = this.getUpdatedList(updateUser)
                this.setState({ user: initialState.user, list })
            })
    }
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }
    updateField(event) {
        const { name, value } = event.target
        const user = { ...this.state.user }
        if (name === 'name') {
            const validName = /^[\p{L}0-9\s]*$/u.test(value)
            if (!validName) return
        }
        if (name === 'email') {
            user[name] = value
        } else {
            user[name] = value
        }
        this.setState({ user })
    }
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.user?.name || ''}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.user?.email || ''}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button
                            className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button
                            className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>

            )
        })
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
