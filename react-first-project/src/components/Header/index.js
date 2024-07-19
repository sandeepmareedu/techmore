import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="headerCon">
      <div className="headerSubCon">
        <Link className="jobItemLink" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="headerWebsiteLogo"
          />
        </Link>
        <ul className="headerListCon">
          <Link className="jobItemLink" to="/">
            <li className="headerListItem">Home</li>
          </Link>
          <Link className="jobItemLink" to="/Jobs">
            <li className="headerListItem">Jobs</li>
          </Link>
          <li />
        </ul>
        <button onClick={onLogout} className="logout">
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
