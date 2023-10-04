import "../style.css"

const ButtonUsers = ({linkGit, names}) => { // estas dos vars es de la desestructuracion, vienen de => buttonName/index.jsx 
    return (<>
        <div className="button-git">
            <a href={linkGit}>{names}</a>
        </div>
    </>)
  };

export default ButtonUsers;
