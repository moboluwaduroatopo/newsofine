<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Image;
use App\Product;
use App\Shopdetails;
use App\Categories;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return response()->json(
            //[
            Categories::where('id','=',$id)->get()
            //     'cat'=> Product::orderBy('id')->join('Categories','products.cat_id','=','Categories.id')
            //     ->join('Users','products.user_id','=','Users.id')
            //    ->select('products.*','Categories.cat_name','Users.name','Users.ufile','Users.role')
            //    ->where('cat_id','=',$id)
            //    ->get()
            //    // return $dat;
            //     ]
        );
    }
    public function cat($id)
    {
        return response()->json(
            //[
            // 'catname' => Categories::where('id','=',$id)->get(),
                Product::orderBy('id')->join('Categories','products.cat_id','=','Categories.id')
                ->join('Users','products.user_id','=','Users.id')
               ->select('products.*','Categories.cat_name','Users.name','Users.ufile','Users.role')
               ->where('cat_id','=',$id)
               ->get()
               // return $dat;
            //    ]
            );
    }
    public function allproduct()
    {
        return response()->json(Product::all());
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function singlep($id)
    {
        //$pro=Product::all()
       $pro= Product::where('id','=',$id)->get();
       $pros=$pro[0]->user_id;
       $cat=$pro[0]->cat_id;
       //return $pros;
         return response()->json(
            // 'catname' => Shop::where('id','=',$id)->get(),
                 Product::orderBy('id')->join('Categories','Products.cat_id','=','Categories.id')
               ->join('Users','products.user_id','=','Users.id')
               ->select('Products.*','Categories.cat_name','users.name','users.role')
               ->where('products.id','=',$id)
               ->get()
                );
    
    }
    public function productbyuser($id)
    {
        //$pro=Product::all()
       $pro= Product::where('id','=',$id)->get();
       $pros=$pro[0]->user_id;
       $cat=$pro[0]->cat_id;
       //return $pros;
         return response()->json(
               Product::orderBy('id')->join('Categories','Products.cat_id','=','Categories.id')
               ->join('Users','products.user_id','=','Users.id')
              ->select('Products.*','Categories.cat_name','Users.name','users.role','users.ufile')
              ->where('user_id','=',$pros)
              ->get()
              );
   
    }
    public function productbycat($id)
    {
        //$pro=Product::all()
       $pro= Product::where('id','=',$id)->get();
       $pros=$pro[0]->user_id;
       $cat=$pro[0]->cat_id;
       //return $pros;
         return response()->json(
             Product::orderBy('id')->join('Categories','Products.cat_id','=','Categories.id')
               ->join('Users','products.user_id','=','Users.id')
              ->select('Products.*','Categories.cat_name','Users.name','users.role','users.ufile')
              ->where('cat_id','=',$cat)
              ->get()
               // return $dat;
              );
   
    } 
    // public function allproductbyuser()
    // {
    //     //$pro=Product::all()
    // //    $pro= Product::where('id','=',$id)->get();
    // //    $pros=$pro[0]->user_id;
    // //    $cat=$pro[0]->cat_id;
    //    //return $pros;
    //      return response()->json(
    //          Product::orderBy('id')->join('Categories','Products.cat_id','=','Categories.id')
    //            ->join('Users','products.user_id','=','Users.id')
    //           ->select('Products.*','Categories.cat_name','Users.name','users.role','users.ufile')
    //           ->where('id','=',Auth::user()->id)
    //           ->get()
    //            // return $dat;
    //           );
   
    // } 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if ($request->productfile ){
        //     $file=$request->productfile;
        //     $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
        //    // $filename= time().'.'.$file->getClientOriginalExtension();
        //     Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
        //    //$user=auth()->user();
        //     $request->merge(['productfile'=>$filename]);
        //     //$user->save();
        // }
        $pro=new Product;
       $imageName = time().'.'.$request->productfile->getClientOriginalExtension();
      // return $request->file->move(public_path('upload'), $imageName);
     $path= $request->productfile->move(public_path('/upload/uploads/'), $imageName);
     //$pro=new Product;
    //  'cat_id','product_name','price','user_id',''
        $pro->product_name=$request->input('product_name');
        $pro->price =$request->input('price');
        $pro->cat_id=$request->input('cat_id');
        $pro->description=$request->input('description');
        $pro->user_id=$request->input('user_id');
        $pro->productfile=$imageName;
        $pro->save();
     return redirect('/addproduct/')->with('success','Product added successfully');
      //return $request;
    //    $shopdetails= Products::create($request->all());
    //    return $pro;
    //    $shopdetails= Products::create($request->all());
        
    //     return $shopdetails;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pro =Product::findOrFail($id);
        return $pro;
        // view('/product/edit')->with('pro',$pro); 
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $pro =Product::findOrFail($id);
          $pro->product_name=$request->input('product_name');
        $pro->price =$request->input('price');
        $pro->quantity=$request->input('quantity');
        $pro->shortd=$request->input('shortd');
        $pro->save();
          return redirect('/productlist/')->with('success','Update successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pro =Product::findOrFail($id);
        $pro->delete();
        return redirect('/productlist/')->with('success','Delete successfully');
    }
}
