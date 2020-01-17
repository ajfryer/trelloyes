import React from 'react';
import List from './List'
import './App.css'

function App(props) {
  const STORE = props.STORE;
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {STORE.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map((id) => {
              return STORE.allCards[id];
            })}
          />
        ))}
      </div>
    </main>
  );
}

App.defaultProps = {
  STORE: {
    lists: [],
    allCards: {},
  }
};

class AppClass extends React.Component {
  static defaultProps = {
    STORE: {
      lists: [],
      allCards: {},
    }
  };
  render() {
    // TODO: object deconstruction
    const STORE = this.props.STORE;
    return (
      <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {STORE.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map((id) => {
              return STORE.allCards[id];
            })}
          />
        ))}
      </div>
    </main>
    )
  }
}

export default App;
