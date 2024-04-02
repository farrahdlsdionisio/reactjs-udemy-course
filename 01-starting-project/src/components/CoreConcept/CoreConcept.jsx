 import './CoreConcept.css';
 // function CoreConcept(props) { // you can rename "props" but it's being used as a standard for react developers; props receives an object
export default function CoreConcept({image,title,description}) { // or object destructuring as long as the keys are the same with the data
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}