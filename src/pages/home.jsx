import Firstsection from "../components/featuredCatagories/firstsection";


import Cards from "../components/home/cards";
import { Carousel } from 'antd';
const contentStyle = {

  width: '100%',
  color: '#fff',

  textAlign: 'center',
  background: '#364d79',
};
export default function Home() {
  return (
    <>

    <h1 className="text-[var(--green)]"></h1>
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={2000}>
    <div>
      <div style={contentStyle}><Firstsection/></div>

      {/* <div style={contentStyle} className=' text-center  mt-10 bg-[#323649] text-white  py-20'><h3 className='font-bold text-3xl px-10'>Featured Product Title</h3>
    <p className=' px-10  py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p className=' pb-5'>R150,00 – R400,00 incl VAT </p>
    <button className=' bg-[#2F8EFF] py-3 px-10 mt-5'>Read More</button>
    </div> */}
    </div>
    <div>
   <div style={contentStyle}><Firstsection/></div>
    </div>
    <div>
    <div style={contentStyle}><Firstsection/></div>
    </div>
    <div>
      <div style={contentStyle}><Firstsection/></div>
    </div>
  </Carousel>
      <div className="container-fluid px-5 mx-auto my-10  ">
       
        <Cards />
      </div>
    </>
  );
}
