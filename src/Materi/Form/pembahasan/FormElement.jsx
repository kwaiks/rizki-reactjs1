import React from "react";
import './index.module.css'

export default class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES' : "NO"}
        `);
        this.setState ({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
    }

    const changeState = (e) => {
        this.setState({[e.target.name]: e.target.value});
        // const a = {
        //   key: 'a',
        //   'key': 'a'
        //   [e.target.name]: 'a'
        // }
    }

    render () {
        return (
            <div className="form">
                <div className="form-body">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nama : <input 
                            type="text" 
                            name="nama" 
                            defaultValue={this.props.nama}
                            onChange={changeState}/>
                        </label>
                        <br />
                        <label>
                            Jurusan : <select name="jurusan" onChange={changeState}>
                                <option value="">Pilih Jurusan</option>
                                <option value="Teknik informatika">Teknik informatika</option>
                                <option value="Sistem Informasi">Sistem Informasi</option>
                                <option value="Teknik Komputer">Teknik Komputer</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Jenis Kelamin : 
                            <input type="radio" value="Pria" name="gender"
                            onChange={changeState}/>Pria
                            <input type="radio" value="Wanita" name="gender"
                            onChange={changeState}/>Wanita
                        </label>
                        <br />
                        <label>
                            Alamat: <textarea name="alamat" id="" cols="30" rows="5"
                            onChange={changeState}></textarea>
                        </label>
                        <br />
                        <label>
                            Member : <input type="checkbox" checked={this.state.member} name="member"
                            onChange={changeState}/>
                        </label>
                        <br />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>    
            </div>
        )
    }
}
