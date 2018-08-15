import React, { Component } from 'react';

class TableDataRow extends Component {

    permissionShow = () => {
      if(this.props.permission === 1){
        return "Admin";
      } else if(this.props.permission === 2){
        return "Moderator";
      } else {
        return "Nomal";
      }
    }
    //props.deleteButtonClick



    editClick = () => {
      this.props.editFunClick();
      this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) =>{
      //console.log("ID nhan dc la: "+idUser);
      this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
              <td >{this.props.stt+1}</td>
              <td>{this.props.userName}</td>
              <td>{this.props.tel}</td>
              <td>{this.permissionShow()}</td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-warning sua" onClick ={() => this.editClick()} >
                    <i className="fa fa-edit" />Sửa</button>
                  <button className="btn btn-danger xoa" onClick ={(idUser) => this.deleteButtonClick(this.props.id)}>
                    <i className="fa fa-delete" />Xóa</button>
                </div>
              </td>
            </tr>   
        );
    }
}

export default TableDataRow;