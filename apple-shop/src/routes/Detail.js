function DetailPage ({shoes}) {
  return (
    <div className="container">
      {
        shoes.map((item, idx)=>{
          return (
            <DetailCard shoes={shoes} key={idx} idx={idx}/>
          )
        })
      }
    </div> 
  )
};

function DetailCard ({shoes, idx}) {
  console.log(idx);
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${idx+1}.jpg`} width="100%" alt="item img"/>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{shoes[idx].title}</h4>
        <p>{shoes[idx].content}</p>
        <p>{shoes[idx].price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  )
};

export default DetailPage;