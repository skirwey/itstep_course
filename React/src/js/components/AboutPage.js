import Button from "./Button";

function AboutPage(divClass){
    let content = {
        title: "Список задач",
        text1: "1. Встать в 5.00",
        text2: "2. Заглянуть в план задач",
        text3: "3. Выучить JavaScript",
    }

    return (
        <Div className={divClass} divClass="div div-class">
            <h1>{content.title}</h1>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <Button btnClass="btn btn-list"/>
        </Div>
    );
}

export default AboutPage;