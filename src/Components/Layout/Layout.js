import Sidebar from "../Sidebar/Sidebar";

export const Layout = (props) => {
    const {children} = props    

    return(
        <div>
            { /* <Header openSidebar = {toggleSidebar}/> */}
            <div>
                <Sidebar sidebar={true}/>
            </div>
            {children}
        </div>
    );
}
