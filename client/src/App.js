import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
      (savedList.includes(movie)===true)?alert('Cannot add an existing movie.'):setSavedList( [...savedList, movie] );
  }

  return (
    <div>
      <SavedList list={savedList} />
      <div>
          <Route exact path='/'>
              <MovieList />
          </Route>
          <Route path='/movies/:id' render={props => ( <Movie {...props} addToSavedList={addToSavedList}/>)}/>
          
      </div>
    </div>
  );
};

export default App;
