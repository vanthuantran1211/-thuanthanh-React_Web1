import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject:{} // {} is object
    }
  }

  componentWillMount() {
    // kiểm tra xem đã tồn tại localStorage hay chưa
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
    //console.log(localStorage.getItem('userData'));
    
  }
  
  deleteUser = (idUser) => {
    // example function filter
    // var arr = [1,2,3];
    // var x = 2;
    // arr = arr.filter(item => item != x);
    // console.log(arr);
    

    //var tempData = this.state.data;

    var tempData = this.state.data.filter(item => item.id !== idUser);
    console.log(tempData);
    this.setState({
      data:tempData
    });

    // đẩy vào dữ liệu
    localStorage.setItem('userData', JSON.stringify(tempData))

    //console.log('id day len app la: ' + idUser);
    // tempData.forEach((value,key) => {
    //   if(value.id === idUser){
    //     //console.log(value.name);
    //     //console.log(key); tempData.delete
        
    //   }
    // })
  }

  getUserEditInfoApp = (info) => {
    console.log("thong tin da sua xong la " + info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    // push data from state to localStorage - userData
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  // gửi thông tin user lên App
  editUser = (user) => {
    console.log("Connect success");
    this.setState({
      userEditObject:user
    });
    console.log(user);
  }

  getNewDataUser = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    //console.log(items);

    //console.log("Ket noi ok");
    console.log(this.state.data);
    localStorage.setItem('userData',JSON.stringify(items));
  }


  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    //console.log("du lieu bo nhan duoc la: " + this.state.searchText);
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }


  //thongBao = () => { alert("Xin chao"); };
  render() {
    //console.log(this.state.data);
    // localStorage.setItem("key1","truongvu");
    // console.log(localStorage.getItem('key1'));
    // localStorage.removeItem("key1");
    //localStorage.setItem('userData', JSON.stringify(DataUser));

    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    })
    //console.log(result);

    return (
      <div>
        <Header />
        <div className="searchForm"> 
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus ={() => this.changeEditUserStatus()}
                userEditObject={() => this.state.userEditObject} />
              <TableData
                deleteUser = {(idUser) => this.deleteUser(idUser)} 
                editFun={(user) => this.editUser(user)} dataUserProps={result}
                changeEditUserStatus ={() => this.changeEditUserStatus()} />
              <AddUser add={(name, tel, Permission) => this.getNewDataUser(name, tel, Permission)} hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
