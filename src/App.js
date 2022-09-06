import "./App.css";
import { useState } from "react";
const contacts = require("./contacts.json");
//const contactsToDisplay = contacts.slice(0, 4);
const init = contacts.slice(0, 4);

function App() {
  const [contactsToDisplay, setContact] = useState(init);

  const addNewContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    if (contactsToDisplay.find((e) => e.name === random.name)) return;

    setContact([...contactsToDisplay, random]);
  };
  const sortByPop = () => {
    setContact(() =>
      [...contactsToDisplay].sort((c1, c2) => c1.popularity < c2.popularity)
    );
  };
  const sortByName = () => {
    setContact(() =>
      [...contactsToDisplay].sort((c1, c2) => c1.name.localeCompare(c2.name))
    );
  };
  const removeContact = (name) => {
    const allContactExceptCurrent = contactsToDisplay.filter(
      (contact) => contact.name !== name
    );

    setContact(allContactExceptCurrent);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => addNewContact()}>ADD NEW RANDOM CONTACT</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPop}>Sort By Popularity</button>
      <table className="celibrity-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Populatiry</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>

        {contactsToDisplay.map((contact) => {
          return (
            <>
              <tr
                key={contact.name}
                onClick={() => removeContact(contact.name)}
              >
                <td>
                  <img src={contact.pictureUrl} alt="profile-picutre" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
