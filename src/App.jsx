import styled from 'styled-components';

function App() {
  const Wrapper = styled.section`
 
  .img{
    height: 600px;
  };

  .grid{
    display: grid;
    grid-template-columns:  auto auto;
    justify-content: space-evenly;
    align-items: center;
    // gap: 10px;
  };

  .grid2{
    display: grid;
    grid-template-columns:  auto auto;
    justify-content: space-between;
    margin-top: 30px;
  };

  // .margin{
  //   margin-top: 100px;
  // };

  .margin2{
    margin-top: 80px;
  };
  
  .h1{
    text-align: center;
    font-size: 50px;
    margin-top: 40px;
  };

  // .input{
  //   width: 700px;
  //   padding: 15px 14px 15px 20px;
  // };

  .p{
    font-size: 19px;
    font-weight: 600;
  };

  .text{
    font-size: 18px;
  }
  .mar{
    margin-right: 10px;
  };

  .mar2{
    margin-top: 15px
  };

  // .btn{
  //   color: white;
  //   font-size: 25px;
  //   background-color: #9b72d5;
  //   padding: 15px 300px 15px 300px;
  //   margin: 80px 0px 0px 45px;
  //   border: 0px;
  //   border-radius: 6px;
  // };

  .p3{
    font-size: 19px;
    text-align: center;
    margin-top: 50px
  };

  .a{
    color: #9b72d5;
    font-weight: 600;
  };


  // responsive

  // Mobile

    @media only screen and (max-width: 688px){
      .img{
        height: 300px;
      };
  
      .grid{
        display: grid;
        grid-template-columns: repeat(1, .1fr);
        justify-items: center;
        align-items: center;
      };
  
      .grid2{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        gap: 30px;
        margin-top: 30px;
      };
  
      .input{
        width: 300px;
        padding: 15px 14px 15px 20px;
      };
  
      .btn{
        color: white;
        font-size: 18px;
        background-color: #9b72d5;
        padding: 15px 130px 15px 130px;
        margin: 60px 0px 0px 13px;
        border: 0px;
        border-radius: 6px;
      };
    };

  // Tab

  @media only screen and (min-width: 600px){

    .img{
      height: 300px;
    };

    .input{
      width: 400px;
      padding: 15px 14px 15px 20px;
    };

    .btn{
      color: white;
      font-size: 18px;
      background-color: #9b72d5;
      padding: 15px 200px 15px 200px;
      margin: 60px 0px 0px 5px;
      border: 0px;
      border-radius: 6px;
    };
    .margin{
      margin-top: 30px;
    };
    .margin2{
      margin-top: 60px;
    };

    .h1{
      text-align: center;
      font-size: 40px;
      margin-top: 40px;
    };

    @media (min-width: 1024px) {
      .img{
        height: 600px;
      };

      .input{
        width: 700px;
        padding: 15px 14px 15px 20px;
      };

      .btn{
        color: white;
        font-size: 25px;
        background-color: #9b72d5;
        padding: 15px 300px 15px 300px;
        margin: 80px 0px 0px 45px;
        border: 0px;
        border-radius: 6px;
      };

      .margin{
        margin-top: 100px;
      };
    };

   
  }


`;
  return (
    <>
      <Wrapper>
        <div className='grid margin'>
          <div>
            <img className='img' src="/login.jpg" alt="" />
          </div>
          <div>
            <div>
              <h1 className='h1'>Login</h1>
              <div className='margin2'>
                <p className='p'>Login ID</p>
                <input className='input' type="number" placeholder='Enter Login ID ' />
                <p className='p'>Password</p>
                <input className='input' type="password" placeholder='Enter Password' />
              </div>
              <div className='grid2'>
                <div>
                  <input className='mar mar2' type="radio" />
                  <label className='text'>Remember Me</label> <br />
                  <input className='mar mar2' type="radio" />
                  <label className='text'>Agree to <a className='a' href="#">Terms & Conditions</a></label>
                </div>
                <div>
                  <a className='text mar2 a' href="#">Change Password</a>
                </div>
              </div>
              <button className='btn'>Login</button>
              <p className='p3'>Do not have an account? <a className='a' href="#">Register Here</a></p>
            </div>
          </div>
        </div>
      </Wrapper>

    </>
  )
}

export default App
