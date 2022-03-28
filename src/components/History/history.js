import React, { Component } from 'react';
import './history.css'

 class history extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<div class="container bootdey">
    <div class="panel panel-default panel-order">
        <div class="panel-heading">
            <strong>Lịch sử giao dịch</strong>
            <div class="btn-group pull-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Filter history <i class="fa fa-filter"></i></button>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Approved orders</a></li>
                        <li><a href="#">Pending orders</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div class="row">
                
                <div class="col-md-11">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="pull-right"><label class="label label-danger">Đã huỷ</label><label class="label label-info">Đã hoàn tiền</label></div>
                            <span><strong>Bonita Grand Hotel </strong></span> <span class="label label-info">Khách sạn</span><br />
                           Điểm thưởng : Không có,<br/> Tổng tiền: 1,200,000 VND <br /> 
                        </div>
                        <div class="col-md-12">Kết thúc vào lúc: 06/03/2022 </div>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="col-md-11">
                    <div class="row">
                    <div class="col-md-12">
                            <div class="pull-right"><label class="label label-success">Đã Thanh toán</label></div>
                            <span><strong>VinPearl Hạ Long </strong></span> <span class="label label-info">Tour du lịch</span><br />
                           Điểm thưởng : 300,<br/> Tổng tiền: 25,200,000 VND <br /> 
                        </div>
                        <div class="col-md-12">Kết thúc vào lúc: 11/01/2022 </div>
                    </div>
                </div>
            </div>

            <div class="row">
              
                <div class="col-md-11">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="pull-right"><label class="label label-success">Đã Thanh toán</label></div>
                            <span><strong>First-Class VietnamAirline HNI - SGN </strong></span> <span class="label label-info">Vé máy bay</span><br />
                           Điểm thưởng : 150,<br/> Tổng tiền: 13,000,000 VND <br /> 
                        </div>
                        <div class="col-md-12">Kết thúc vào lúc: 06/03/2022 </div>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="col-md-11">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="pull-right"><label class="label label-info">pending</label></div>
                            <span><strong>Order name</strong></span> <span class="label label-info">group name</span><br />
                            Quantity : 4, cost: $523.13<br />
                            
                        </div>
                        <div class="col-md-12">Kết thúc vào lúc: 06/03/2022 </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-footer">Tổng chi tiêu của bạn:  <b>43,350,000 VND</b></div>
    </div>
</div>
      </div>
    )
  }
}
export default history