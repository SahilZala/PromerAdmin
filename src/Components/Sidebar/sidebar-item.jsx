import './sidebar-item-style.css';
export default function SidebarItem(props) {

    return props.isOn ? (

        <>
            <div onClick={() => props.openItem(props.index)} style={{
                color: 'var(--main-color-black)',
                backgroundColor: 'var(--main-color-pich)'
            }} className="sidebar-item-style">
                {props.children}
                <p>{props.item.item}</p>
            </div>

            <div>
                {props.item.subItems.map((d,index) => <p key={index} onClick={()=>props.onSubItemClick(d.id)} className="subItem-style">{d.item}</p>)}
            </div>
        </>) : (<div onClick={() => props.openItem(props.index)} style={{ color: 'var(--main-color-dark-grey)', }} className="sidebar-item-style">
            {props.children}
            <p>{props.item.item}</p>
        </div>);
}