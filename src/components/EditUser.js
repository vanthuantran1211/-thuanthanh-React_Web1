import React, { Component } from 'react';

class EditUser extends Component {
    // props.userEditObject
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    saveButton = () => {
        var info ={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;

        //console.log("info o edituser "+info.name);
        
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // hide form
    }

    render() {
        //console.log(this.state);
        
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <div className="card text-white bg-secondary mb-3 mt-2">
                            <div className="card-header text-center">Sửa thông tin</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input 
                                    onChange = {(event) => this.isChange(event)}
                                    defaultValue={this.props.userEditObject.name} className="form-control" name="name" placeholder="Tên User" type="text" />
                                </div>
                                <div className="form-group">
                                    <input 
                                    onChange = {(event) => this.isChange(event)}
                                    defaultValue={this.props.userEditObject.tel} className="form-control" name="tel" placeholder="Điện thoại " type="text" />
                                </div>
                                <div className="form-group">
                                    <select 
                                    onChange = {(event) => this.isChange(event)}
                                    defaultValue ={this.props.userEditObject.Permission} className="custom-select" name="Permission" required >
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger"
                                    value="Lưu" onClick={() => this.saveButton()} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser; 
