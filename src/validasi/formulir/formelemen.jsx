import React from 'react';

export default class FormElement extends React.Component {
    state = {
        nama: "",
        jurusan: "",
        jenisKelamin: "",
        alamat: "",
        member: false,
        errors: {}
    };

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    validate = () => {
        const errors = {};
        if (this.state.nama.trim() === "") {
            errors.nama = "Nama tidak boleh kosong";
        }
        if (this.state.jurusan.trim() === "") {
            errors.jurusan = "Jurusan harus dipilih";
        }
        if (this.state.jenisKelamin.trim() === "") {
            errors.jenisKelamin = "Jenis kelamin harus dipilih";
        }
        if (this.state.alamat.trim() === "") {
            errors.alamat = "Alamat tidak boleh kosong";
        }
        return errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        } else {
            alert("Form berhasil dikirim");

        }
    };

    render() {
        const { nama, jurusan, jenisKelamin, alamat, member, errors } = this.state;
        return (
            <div style={{ margin: `100px`, border: `1px solid gray`, padding: `20px` }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama: <input type="text" name="nama" value={nama} onChange={this.handleChange} />
                        {errors.nama && <div style={{ color: 'red' }}>{errors.nama}</div>}
                    </label> <br />
                    <label>
                        Jurusan: 
                        <select name='jurusan' value={jurusan} onChange={this.handleChange}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Sistem Komputer">Sistem Komputer</option>
                            <option value="Teknik Informasi">Teknik Informasi</option>
                            <option value="Manajemen">Manajemen</option>
                        </select>
                        {errors.jurusan && <div style={{ color: 'red' }}>{errors.jurusan}</div>}
                    </label> <br />
                    <label>
                        Jenis Kelamin: 
                        <input type="radio" value="Laki-Laki" name="jenisKelamin" checked={jenisKelamin === "Laki-Laki"} onChange={this.handleChange} /> Laki - Laki
                        <input type="radio" value="Perempuan" name="jenisKelamin" checked={jenisKelamin === "Perempuan"} onChange={this.handleChange} /> Perempuan
                        {errors.jenisKelamin && <div style={{ color: 'red' }}>{errors.jenisKelamin}</div>}
                    </label> <br />
                    <label>
                        Alamat <br /> 
                        <textarea cols="30" rows="10" name='alamat' value={alamat} onChange={this.handleChange}></textarea>
                        {errors.alamat && <div style={{ color: 'red' }}>{errors.alamat}</div>}
                    </label> <br />
                    <label>
                        Member <input type="checkbox" name="member" checked={member} onChange={this.handleChange} />        
                    </label> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
