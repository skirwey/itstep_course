function Header ({headerTagName, headerText, headerClass}) {

    let headerType;

    switch(headerTagName){
        case 'h1':
            headerType = <h1 className={headerClass}>{headerText}</h1>
        break;
        case 'h2':
            headerType = <h2 className={headerClass}>{headerText}</h2>
        break;
        case 'h3':
            headerType = <h3 className={headerClass}>{headerText}</h3>
        break;
        case 'h4':
            headerType = <h4 className={headerClass}>{headerText}</h4>
        break;
        case 'h5':
            headerType = <h5 className={headerClass}>{headerText}</h5>
        break;
        case 'h6':
            headerType = <h6 className={headerClass}>{headerText}</h6>
        break;
    }

    return (
        headerType
    );
}

export default Header;