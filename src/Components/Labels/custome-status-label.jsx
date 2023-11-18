import "./custome-status-label.css";

export default function CustomeStatusLabel(props){

    let statusStyle = props.isActive === true ? { 
        color: "#006400",
        backgroundColor: "#b7efc5"
    } : {
        color: "#cc444b",
        backgroundColor: "#e4b1ab"
    };

    return <label style={statusStyle} className="custome-status-label">
        {props.label}
    </label>
}