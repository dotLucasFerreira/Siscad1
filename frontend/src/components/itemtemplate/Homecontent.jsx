import '../css/Main.css'
import Header from '../template/Header'
export default props =>
    <>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-2">
                <div className="display-4">{props.title1}</div>
                <hr />
                <p className="mb-0">{props.subtitle1}</p>
                {props.children}
            </div>
        </main>
    </>