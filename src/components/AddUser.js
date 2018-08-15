import React, { Component } from 'react';

// class AddUser extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         trangThaiChinhSua : true
//       }
//   }

//   thayDoiTrangThai = () => {
//     this.setState({
//       trangThaiChinhSua : !this.state.trangThaiChinhSua
//     });
//   }

//   hienThiNut = () => {
//     if (this.state.trangThaiChinhSua === true){
//       return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>;
//     }
//     else {
//       return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
//     }
//   }

//   hienThiForm = () => {
//     if (this.state.trangThaiChinhSua === true){
//       return (
//         <div className="card border-primary mb-3 mt-2">
//             <div className="card-header">Thêm</div>
//             <div className="card-body text-primary">
//               <div className="form-group">
//                 <input className="form-control" placeholder="Tên User" type="text" />
//               </div>
//               <div className="form-group">
//                 <input className="form-control" placeholder="Điện thoại " type="text" />
//               </div>
//               <div className="form-group">
//                 <select className="custom-select" required>
//                   <option value>Chọn quyền mặc định</option>
//                   <option value={1}>Admin</option>
//                   <option value={2}>Modrator</option>
//                   <option value={3}>Normal</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <div className="btn btn-block btn-primary">Thêm mới</div>
//               </div>
//             </div>
//           </d  iv>
//       );

//     }
//   }


//   render() {
//     return (
//       <div className="col-3">
//         <div>
//           {this.hienThiNut()}
//           {this.hienThiForm()}
//         </div>
//       </div>

//     );
//   }
// }

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      Permission: ""
    }
  }


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

    //pakage to item
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = this.state.Permission;
    // console.log(item);

  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card border-primary mb-3 mt-2">
              <div className="card-header">Thêm</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input className="form-control" onChange={(event) => this.isChange(event)} name="name" placeholder="Tên User" type="text" />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={(event) => this.isChange(event)} name="tel" placeholder="Điện thoại " type="text" />
                </div>
                <div className="form-group">
                  <select className="custom-select" onChange={(event) => this.isChange(event)} required name="Permission">
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel,
                    Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm mới" />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }

  render() {
    //console.log(this.state);

    return (
      <div>
        {this.kiemTraTrangThai()}
      </div>

    );
  }
}
export default AddUser;