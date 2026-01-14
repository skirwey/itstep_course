import MainPage from "./MainPage";
import AboutPage from "./AboutPage";

function App() {
    let isMainPage = true;
    //let component;

    /*if(isMainPage) {
        component = <MainPage/>;
    } else {
        component = <AboutPage />;
    }*/

    return (
      <div>
        {
            isMainPage ? (<MainPage/>) : (<AboutPage />)
        }
      </div>
    );
}

export default App;