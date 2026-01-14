import Button from "./Button";

export function List({items}){

    const listItems = items.map(product =>
       <ListItem item={product} key={product.id}/>
    );       

    return (<ul>{listItems}</ul>);
}

export function ListItem({item}) {
    return (
        <li style={{color: item.isFruit ? 'magenta' : 'darkgreen'}}>{item.title}</li>
    );
}

function MainPage(){
    let content = {
        title: "Main Page",
        text: "This is main site page"
    }

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <Button startCount={5} btnClass="btn btn-danger" step={1}/>
            <Button startCount={3} btnClass="btn btn-info" step={3}/>
            <List items={products} />
        </>
    );
}

export default MainPage;