@extends('layouts.navapp')
@section('my-content')
<div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-themecolor">Ecommerce Products</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active">Ecommerce Products</li>
                </ol>
            </div>
            
            <div class="">
                <button class="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right ml-10"><i class="ti-settings text-white"></i></button>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
<div class="table-responsive">
        
        <table id="demo-foo-addrow" class="table product-table table-hover contact-list" data-page-size="10">
                                <thead>
              <tr>
                 <th>ID</th>
                 <th>Product</th>
                 <th>Category</th>
                 <th>Description</th>
                 <th>Price</th>
                 <th>Username</th>
                 <th>Status</th>
                 <td class="op-0">&nbsp;</td>
                <td class="op-0">&nbsp;</td>
                
                
              </tr>
            </thead>
                               
<tbody>
        @foreach ($product as $d)
        <tr>
            <td>{{$d->id}}</td>
                <td class="text-dark font-bold"><img  src='/upload/uploads/{{$d->productfile}}'  alt="" title="">{{$d->product_name}}<br></td>
        <td>{{$d->cat_name}} {{$d->cat_type}}</td>
            <td>{{$d->description}}</td>
                 <td>{{$d->price}}</td>
                 
                 <td>{{$d->name}}</td>
                 <td>In Stock</td>
                 {{-- <td  class="text-center  open_modal"><a href="/product/{{$d->id}}/edit" data-toggle="modal" data-target="#sideModalTR"><i class="fa fa-pencil text-primary"></i></a></td> --}}
        <td  class="text-center  "><button class="open_modal" value="{{$d->id}}"><i class="fa fa-pencil text-primary"></i></button></td>
                 <td class="text-center"><a href="{{url('/deleteproduct/'.$d->id)}}" ><i class="fa fa-trash text-danger text-danger"></i></a></td></tr>
             
         @endforeach
         
           
            </tbody>
        

                               <tfoot>
                                    <tr>
                                        <td colspan="2">
                                            <a class="btn btn-primary btn-rounded" href="addproduct">Add New Product</button>
                                        </td>
                                        <td colspan="7">
                                            <div class="text-right">
                                                <ul class="pagination"> </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
        </div>                          

                  </div>
                </div>
                <!-- Column --> 
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Right sidebar -->
        <!-- ============================================================== -->
        <!-- .right-sidebar -->
        <div class="right-sidebar">
            <div class="slimscrollright">
                <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
                <div class="r-panel-body">
                    <ul id="themecolors" class="mt-20">
                        <li><b>With Light sidebar</b></li>
                        <li><a href="javascript:void(0)" data-theme="default" class="default-theme">1</a></li>
                        <li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
                        <li><a href="javascript:void(0)" data-theme="red" class="red-theme">3</a></li>
                        <li><a href="javascript:void(0)" data-theme="blue" class="blue-theme">4</a></li>
                        <li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
                        <li><a href="javascript:void(0)" data-theme="megna" class="megna-theme">6</a></li>
                        <li class="d-block mt-30"><b>With Dark sidebar</b></li>
                        <li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme working">7</a></li>
                        <li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
                        <li><a href="javascript:void(0)" data-theme="red-dark" class="red-dark-theme">9</a></li>
                        <li><a href="javascript:void(0)" data-theme="blue-dark" class="blue-dark-theme">10</a></li>
                        <li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a></li>
                        <li><a href="javascript:void(0)" data-theme="megna-dark" class="megna-dark-theme ">12</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Right sidebar -->
        <!-- ============================================================== -->
    </div>
<!-- Side Modal Top Right -->

<!-- To change the direction of the modal animation change .right class -->
<div class="modal fade right" id="sideModalTR" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">

  <!-- Add class .modal-side and then add class .modal-top-right (or other classes from list above) to set a position to the modal -->
  <div class="modal-dialog modal-side modal-top-right" role="document">


    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Side Modal Top Right -->

@endsection