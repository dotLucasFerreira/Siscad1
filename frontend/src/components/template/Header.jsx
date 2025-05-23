import '../css/Header.css';

export default props =>
  <header className="header d-sm-flex flex-column">
        <h1 className="mt-2">
          <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>