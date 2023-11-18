import './custome-selection.css';
export default function CustomeSelector(props)
{
    return <select className='custome-selector-style' onChange={(select) => {return props.onChange(props.options[select.target.selectedIndex]);}} onSelect={(selected) => console.log(selected.target.value)}>
        {props.options.map((data,index) => <option key={index}>{data.title}</option>)}
      
    </select>;
}