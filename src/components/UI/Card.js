import './Card.css';

function Card(props){
    // niche card ke baad white space dena jaruri hai
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;