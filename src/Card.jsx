import profilePic from './assets/mehu.jpeg'

function Card(){
    return(
        <div className="Card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h1 className='card-title' >Mitarth Pathak</h1>
            <p className='card-text'>this is mitarth the great</p>
        </div>
    );
}

export default Card