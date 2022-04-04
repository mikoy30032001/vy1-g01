import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-findcond navbar-fixed-top">
            <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">TravelLako</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-fw fa-bell-o"></i> Thông báo <span class="badge">12</span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#"><i class="fa fa-fw fa-tag"></i> <span class="badge">Vé máy bay</span> Giảm 20% khi đặt vé với Vietnam Airline</a></li>
                    <li><a href="#"><i class="fa fa-fw fa-tag"></i> <span class="badge">Vé máy bay</span> Giảm 20% khi đặt vé với Vietnam Airline</a></li>
                    <li><a href="#"><i class="fa fa-fw fa-tag"></i> <span class="badge">Vé máy bay</span> Giảm 20% khi đặt vé với Vietnam Airline</a></li>
                    <li><a href="#"><i class="fa fa-fw fa-tag"></i> <span class="badge">Vé máy bay</span> Giảm 20% khi đặt vé với Vietnam Airline</a></li>  
                  </ul>
                </li>
                
                <li class="active">
                  
                </li>
                <li class="active"><a href="/history">Lịch sử giao dịch <span class="sr-only">(current)</span></a></li>

                <li class="active"><a href="voucher">Voucher của tôi <span class="sr-only">(current)</span></a></li>
      
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dương Tấn Tài <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    
                    <li><a href="/chinh-sua-ho-so"><i class="fa fa-user" aria-hidden="true"></i> Chỉnh sửa hồ sơ </a></li>
                    <li><a href="#"><i class="fa fa-renren" aria-hidden="true"></i> Điểm thưởng của tôi </a></li>                  
                    <li><a href="#"><i class="fa fa-history" aria-hidden="true"></i> Danh sách giao dịch </a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-history" aria-hidden="true"></i> Đặt chổ của tôi </a></li>                    
                    <li><a href="#"> <i class="fa fa-cc-discover" aria-hidden="true"></i>Khuyến mãi </a></li>                    
                    
                    <li><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</a></li>
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-right search-form" role="search">
                <input type="text" class="form-control" placeholder="Search" />
              </form>
            </div>
          </div>
        </nav>
        );
    }
}

export default Header;