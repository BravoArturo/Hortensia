import imageSoad from '../src/assets/Logos/bocalogo.png';
import imageHomeSpray from '../src/assets/HomeSpray/homespraygral.jpg';
import imageVelaCemento from '../src/assets/Velas/velascementogral.jpg';
import imageVelaVidrio from '../src/assets/Velas/velasvidriogral.jpg';
import floresChicas from '../src/assets/Flores/floreschicasgral.jpg';
import floresGrandes from '../src/assets/Flores/floresgrandesgral.jpg';
import image1 from '../src/assets/Difusores/difusorgral.jpg';
const data ={
    jabones:[
        {
          _id: 1,
          image: imageSoad,
          name: 'Jabones',
          price: 500,
          descripcion:'Esta es la descripción',
          estado:''
    }
],
    homeSpray:[
    {
        _id: 1,
      image: imageHomeSpray,
      name: 'Home Spray',
      price: 420,
      descripcion:'Esta es la descripción',
      estado:''
    }
],
    velas:[
    {
      _id: 1,
      image: imageVelaCemento,
      name: 'Velas de Cemento',
      price: 780,
      descripcion:'Esta es la descripción',
      estado:''
},
{
    _id: 2,
    image: imageVelaVidrio,
    name: 'Velas de vidrio',
    price: 550,
    descripcion:'Esta es la descripción',
    estado:''
}
],
    flowers:[
    {
    _id: 1,
      image: floresChicas,
      name: 'Flores Chicas',
      price: 300,
      descripcion:'Esta es la descripción',
      estado:''
},
{
    _id: 2,
    image: floresGrandes,
    name: 'Flores Grandes',
    price: 600,
    descripcion:'Esta es la descripción',
    estado:''
}
],
    difussers:[
    {
    _id:1,
      image: image1,
      name: 'Difusor',
      price: 750,
      descripcion:'Esta es la descripción',
      estado:''
}
]
}
export default data;