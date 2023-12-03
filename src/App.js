import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const InitialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'UI/UX Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Backend Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'FullStack Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: InitialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersList = usersDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({usersDetailsList: filteredUsersList})
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Users List</h1>
          <input
            type="search"
            className="search-bar"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
