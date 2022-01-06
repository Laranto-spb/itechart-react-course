import Card from '../Card';

const Main = () => {
  return (
    <div className="container">
      <h1 className='center-align'><span className='main-red'>iTechArt</span> React Course</h1>
      <div className='row'>
        <Card title={'Card 1'} />
        <Card title={'Card 2'} /> 
        <Card title={'Card 3'} /> 
      </div> 
    </div>
  );
}

export default Main;
