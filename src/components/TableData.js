import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  }

  mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
    <TableDataRow 
      deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
      editFunClick ={(user) => this.props.editFun(value)} userName={value.name}
      key={key} stt={key} tel={value.tel} permission={value.Permission} id = {value.id}
      changeEditUserStatus ={() => this.props.changeEditUserStatus()}/>
    ))
  
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>

    );
  }
}

export default TableData;